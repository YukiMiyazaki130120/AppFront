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
  const [filename, setFilename] = React.useState("");

  
  React.useEffect(() => {
    axios.get('http://localhost:8000/top').then((response) => {
    setPost(response.data);
    console.log(response.data);
    setFilename("/Image/" + response.data.image_path);
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
        <figure class="menu"><img src={menu} alt="ロゴ画像"/></figure>
      </div>
      
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">{post.user_name}</p>
      </div>
      
      <div class="Title_text">口座番号:  {post.account_num}</div>
      <h3 class="text">預金残高</h3>
      <div class="container">
        <div class="box2">
          <p>{post.balance}</p>
        </div>
        <div className="button-container">
          <Button className="custom-btn" onClick={handleRemit}>送金</Button>
          <Button className="custom-btn" onClick={handleRemit_2}>請求</Button>
          <Button className="custom-btn" onClick={handleRemit_3}>請求履歴</Button>
        </div>
      </div>
    </div>
  );
}

export default Top;
