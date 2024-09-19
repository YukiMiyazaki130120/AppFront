import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human3.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Step4.css';
import React, { useState } from 'react';
import axios from 'axios';

function Top() {
  const navigate = useNavigate()

  const [money, setState] = useState(0);
  const [errors, setErrors] = useState({});
  const [menuVisible, setMenuVisible] = React.useState(false);

  const handleRemit = () => {
    if(money > 50000){
      const newErrors = {};
      newErrors.money = '送金上限額を超えています';
      setErrors(newErrors);
    }else if(money <= 0){
      const newErrors = {};
      newErrors.money = '不正な金額です';
      setErrors(newErrors);
    }else{
      navigate('/Step5_complete')
    }
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
      <div class="Title_text">送金先</div>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">kikuti hanako</p>
      </div>
      <h3 class="text">送金上限額</h3>

      <div class="container">
        <div class="box2">
          <p>500000円</p>
        </div>
        {errors.money && <span className="error">{errors.money}</span>}
        <input type="number"
        placeholder="金額を入力"
        class="input-box"
        min={0}
        value={money}
        onChange={(e) => setState(e.target.value)}
        />  
        <h3 class="text">メッセージ(任意)</h3>
        <input type="text" placeholder="" class="input-box" />
        <div class="p-test01">
          <a class="btn" onClick={handleRemit}>
            <div class="flex_2">送金</div>
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
