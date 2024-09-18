import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/approval.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page3_4.css';

function Top() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/')
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

      <div class="container">
        <figure class="Image"><img src={logo} alt="ロゴ画像"/></figure>
        <div class="Title_text">支払処理が完了しました</div>

        <div class="p-test01">
          <a class="btn" onClick={handleRemit}>
            <div class="flex_2">トップ画面へ戻る</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
