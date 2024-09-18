import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page3_1.css';

function Top() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/Page3_2')
  }
  const GoHome = () => {
    navigate('/')
  }
  
  return (
    <div>
      <div class="header">
        <figure class="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="メニュー画像"/></figure>
      </div>
      <div class="Title_text">請求リンクの作成</div>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      

      <div class="container">
        <h3 class="text">請求金額</h3>
        <input type="number" placeholder="" class="input-box" />
        <h3 class="text">メッセージ</h3>
        <input type="text" placeholder="" class="input-box" />
        <div class="p-test01">
          <a class="btn" onClick={handleRemit}>
            <div class="flex_2" >リンクを作成</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
