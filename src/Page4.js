import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo_2 from './Image/human2.png';
import logo_3 from './Image/human3.png';
import logo_4 from './Image/human4.png';
import logo_5 from './Image/human5.png';
import logo_6 from './Image/human6.png';

import './RemittanceDest.css';
import { Center, HStack, Spacer, Text, Image } from '@chakra-ui/react'

import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page4.css';
import axios from 'axios';
import React from "react";


function RemittanceDest() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigate = useNavigate()
  const GoHome = () => {
    navigate('/')
  }
  const handleRemit = () => {
    navigate('/RemittanceDest')
  }
  const handleRemit_1 = () => {
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

  return (
  <div>
    <div class="header">
      <figure class="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
      <figure class="menu" onClick={toggleMenu}><img src={menu} alt="ロゴ画像"/></figure>
    </div>
    <div class="Title_text">2023年3月分</div>
    <ul>
      <li>
        <div class="resume_flexbox">
        <p>2023年3月30日</p>
          <p>5000円</p>
          <p>飲み会代お願いします！</p>
          <p>支払済み(1人)</p>
          <p><figure class="presenter"><img src={logo_2} /></figure></p>
        </div>
          
      </li>
    </ul>
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