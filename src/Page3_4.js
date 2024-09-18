import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/approval.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page3_4.css';
import React, { useEffect, useState } from "react";

function Top() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [logoShaken, setLogoShaken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // アニメーションを追加
    setLogoShaken(true);
    const timer = setTimeout(() => {
      setLogoShaken(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleRemit = () => {
    navigate('/');
  };
  const GoHome = () => {
    navigate('/');
  };
  const handleRemit_1 = () => {
    navigate('/RemittanceDest');
  };
  const handleRemit_2 = () => {
    navigate('/Page3_1');
  };
  const handleRemit_3 = () => {
    navigate('/Page4');
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
        <figure className="header_logo" onClick={GoHome}>
          <img
            src={header_logo}
            alt="ロゴ画像"
          />
        </figure>
        <figure className="menu" onClick={toggleMenu}>
          <img src={menu} alt="メニュー画像" />
        </figure>
      </div>

      <div className="container">
        <figure className="Image"><img src={logo} alt="ロゴ画像" className={logoShaken ? "shake" : ""}/></figure>
        <div className="Title_text">支払処理が完了しました</div>

        <div className="p-test01">
          <a className="btn" onClick={handleRemit}>
            <div className="flex_2">トップ画面へ戻る</div>
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
