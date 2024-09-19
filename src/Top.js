import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import logo_2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Top.css';
import axios from 'axios';
import React from "react";



function Top() {
  const [post, setPost] = React.useState([]);

  // ロゴと image_path の対応を定義
  const imageMap = {
    "human1.png": logo
  };

  const [menuVisible, setMenuVisible] = React.useState(false);

  
  React.useEffect(() => {
    axios.get('http://localhost:5000/top').then((response) => {
    setPost(response.data);
    console.log(response.data);
    //setFilename("/Image/" + response.data.image_path);
    })
  }, []);
  

  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/RemittanceDest')
  }
  const handleRemit_2 = () => {
    navigate('/Page3_1')
  }
  const handleRemit_3 = () => {
    navigate('/Page4')
  }
  const handleSettings = () => {
    // Handle settings button click
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  /*
  let data;
  axios.get('http://localhost:5000/top')
    .then(responce => {
      data = responce.data;
      console.log(data);
    })
    .catch(error => {
      console.error('リクエストエラー:', error);
    });
  */

    // let data;
    // async function fetchData() {
    //   try {
    //     const response = await fetch('http://localhost:5000/top');
    //     data = await response.data;
    //     // データを処理するコードをここに記述
    //     console.log(data);
    //   } catch (error) {
    //     console.error('リクエストエラー:', error);
    //   }
    // }
    // fetchData();
    // console.log("a");


  //const logo = "/Image/human1.png";

    
  return (
    <div>
      <div class="header">
        <figure class="header_logo"><img src={header_logo} alt="ロゴ画像"/></figure>
        <div class="Home_text">Home</div>
        <figure class="menu" onClick={toggleMenu}><img src={menu} alt="ロゴ画像"/></figure>
      </div>
    
      <div class="flex">

        <figure class="image"><img src={imageMap[post.image_path]} alt={post.user_name} /></figure>

        <p class="text">{post.user_name}</p>
      </div>
      
      <div class="Title_text">口座番号:  {post.account_num}</div>
      <h3 class="text">預金残高</h3>
      <div class="container">
        <div class="box2">
          <p>{Math.floor(post.balance)} 円</p>
        </div>
        <div className="button-container">
          <Button className="custom-btn" onClick={handleRemit}>①送金</Button>
          <Button className="custom-btn" onClick={handleRemit_2}>②請求</Button>
          <Button className="custom-btn" onClick={handleRemit_3}>③送金履歴</Button>
        </div>
      </div>
        {/* ハンバーガーメニューの実装 */}
        {menuVisible && (
        <div className="floating-menu">
          <Button className="custom-btn" onClick={handleRemit}>送金</Button>
          <Button className="custom-btn" onClick={handleRemit_2}>請求</Button>
          <Button className="custom-btn" onClick={handleRemit_3}>履歴</Button>
          <Button className="custom-btn" onClick={handleSettings}>設定</Button>
        </div>
      )}
    </div>
  );
}

export default Top;
