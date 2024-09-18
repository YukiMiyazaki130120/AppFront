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


function RemittanceDest() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/Step4')
  }
  return (
    <div>
      <div class="header">
        <figure class="header_logo"><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="ロゴ画像"/></figure>
      </div>
      <center>
        <div>
          <h1>送金相手を選択</h1>
        </div>
      </center>
      
      <ul>
        <li>
          <div class="field" onClick={handleRemit}>
          <figure class="image"><img src={logo_2} /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_3} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_4} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_5} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_6} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
      </ul>
    </div>
  );
}

export default RemittanceDest;
