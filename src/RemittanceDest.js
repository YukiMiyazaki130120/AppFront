import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo_2 from './Image/human2.png';
import logo_3 from './Image/human3.png';
import logo_4 from './Image/human4.png';
import logo_5 from './Image/human5.png';
import logo_6 from './Image/human6.png';
import axios from 'axios';
import React from "react";

import './RemittanceDest.css';
import { Center, HStack, Spacer, Text, Image } from '@chakra-ui/react';

import header_logo from './Image/icon.png';
import menu from './Image/menu.png';

import axios from 'axios';
import React from "react";


function RemittanceDest() {
  const [otherMember, setOtherMember] = React.useState([]);
  const [menuVisible, setMenuVisible] = React.useState(false);

  // ロゴと image_path の対応を定義
  const imageMap = {
    "human2.png": logo_2,
    "human3.png": logo_3,
    "human4.png": logo_4,
    "human5.png": logo_5,
    "human6.png": logo_6
  };
  
  
  React.useEffect(() => {
    axios.get('http://localhost:5000/RemittanceDest')
      .then((response) => {
        setOtherMember(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // otherMember が更新されるたびにログを出力
  React.useEffect(() => {
    console.log(otherMember);
  }, [otherMember]);

  //ページ遷移
  const navigate = useNavigate()
  //選択された人の情報を持ちながら移動
  const handleRemit = (member) => {
    navigate('/Step4', { state: { selectedMember: member } });
  };


  const GoHome = () => {
    navigate('/');
  };
  const handleRemit_1 = () => {
    navigate('/RemittanceDest')
  }
  const handleRemit_2 = () => {
    navigate('/Page3_1')
  }


  const handleRemit_3 = () => {
    navigate('/Page4')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleSettings = () => {
    // Handle settings button click
  };
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <div className="header">
        <figure className="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure className="menu" onClick={toggleMenu}><img src={menu} alt="ロゴ画像"/></figure>
      </div>
      
      <center>
        <div>
          <div className="Title_text">送金相手を選択</div>
        </div>
      </center>

      <ul>
        {otherMember.map((member, index) => (
          <li key={index}>
            <div class="field" onClick={() => handleRemit(member)}>
              <img src={imageMap[member.image_path]} alt={member.user_name} />
              <p>{member.user_name}</p>
            </div>
          </li>
        ))}
      </ul>


      {/* ボタンを押すとページトップに*/}
      <Button 
        colorScheme="red" 
        onClick={scrollToTop} 
        style={{ 
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          zIndex: 1000 
        }}>
        ページトップへ
      </Button>

      {/* ハンバーガーメニューの実装 */}
      {menuVisible && (
        <div className="floating-menu">
          <Button className="custom-btn" onClick={handleRemit_1}>送金</Button>
          <Button className="custom-btn" onClick={handleRemit_2}>請求</Button>
          <Button className="custom-btn" onClick={handleRemit_3}>履歴</Button>
          <Button className="custom-btn" onClick={handleSettings}>設定</Button>
        </div>
      )}
    </div>
  );
}

export default RemittanceDest;
