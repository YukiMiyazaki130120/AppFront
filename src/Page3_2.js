import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page3_2.css';
import axios from 'axios';
import React from "react";

function Top() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/Page3_3')
  }
  const GoHome = () => {
    navigate('/')
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
        <figure class="menu" onClick={toggleMenu}><img src={menu} alt="メニュー画像"/></figure>
      </div>
      <div class="Title_text">請求リンクが作成されました</div>
      <div class="Title">http://localhost:8000/Page3_3</div>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      <h3 class="text">送金上限額</h3>
      <div class="container">
        <div class="box2">
            <p>500000円</p>
        </div>
      </div>


      <div class="container">
        <div class="p-test01">
          <a class="btn" onClick={handleRemit}>
            <div class="flex_2">リンクをコピー</div>
          </a>
          <a class="btn" onClick={GoHome}>
            <div class="flex_2">トップ画面に戻る</div>
          </a>
        </div>
      </div>
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

export default Top;
