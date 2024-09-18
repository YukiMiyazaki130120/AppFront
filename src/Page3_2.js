import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Page3_2.css';

function Top() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/Page3_3')
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
      <div class="Title">請求リンクが作成されました</div>
      <div class="Title">https://...</div>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      <h3 class="text">送金上限額</h3>

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
    </div>
  );
}

export default Top;
