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

function RemittanceDest() {
  const navigate = useNavigate()
  const GoHome = () => {
    navigate('/')
  }
  return (
    <div>
    <div class="header">
      <figure class="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
      <figure class="menu"><img src={menu} alt="ロゴ画像"/></figure>
    </div>
    <div class="Title_text">2023年3月分</div>
    <ul>
      <li>
        <div class="flexbox">
        <p>2023年3月30日</p>
          <p>5000円</p>
          <p>飲み会代お願いします！</p>
          <p>支払済み(1人)</p>
          <p><figure class="presenter"><img src={logo_2} /></figure></p>
        </div>
          
      </li>
    </ul>
  </div>
  );
}

export default RemittanceDest;