import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/approval.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Step5_complete.css';
import axios from 'axios';
import React from "react";

function Top() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const navigate = useNavigate()
  const handleRemit = () => {
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
        <figure class="header_logo" onClick={handleRemit}><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu" onClick={toggleMenu}><img src={menu} alt="メニュー画像"/></figure>
      </div>

      <div class="container">
        <figure class="Image"><img src={logo} alt="ロゴ画像"/></figure>
        <div class="Title_text">送金処理が完了しました</div>
        <div class="p-test01">
          <a class="btn" onClick={handleRemit}>
            <div class="flex_2" >トップ画面へ戻る</div>
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
