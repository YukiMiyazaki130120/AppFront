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

function RemittanceDest() {
  const [post, setPost] = React.useState([]);
  const [filename, setFilename] = React.useState("");
  
  React.useEffect(() => {
    axios.get('http://localhost:8000/RemittanceDest').then((response) => {
      setPost(response.data);
      console.log(response.data);
      console.log(response.data[0]["user_name"]);
      setFilename("/Image/" + response.data.image_path);
    });
  }, []);

  const navigate = useNavigate();

  const handleRemit = () => {
    navigate('/Step4');
  };

  const GoHome = () => {
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="header">
        <figure className="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure className="menu"><img src={menu} alt="ロゴ画像"/></figure>
      </div>
      
      <center>
        <div>
          <div className="Title_text">送金相手を選択</div>
        </div>
      </center>

      <div>
        {
          (function () {
            const list = [];
            for (let i = 0; i < 5; i++) {
              list.push(
                <li key={i}>
                  <div className="field" onClick={handleRemit}>
                    <figure className="image"><img src={logo_3} alt="user logo" /></figure>
                    <p>{post[i]?.user_name}</p>
                  </div>
                </li>
              );
            }
            return <ul>{list}</ul>;
          }())
        }
      </div>

      <ul>
        <li>
          <div className="field">
            <figure className="image"><img src={logo_3} alt="サンプル" /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
          <div className="field">
            <figure className="image"><img src={logo_4} alt="サンプル" /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
          <div className="field">
            <figure className="image"><img src={logo_5} alt="サンプル" /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
          <div className="field">
            <figure className="image"><img src={logo_6} alt="サンプル" /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
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
    </div>
  );
}

export default RemittanceDest;
