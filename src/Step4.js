import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Step4.css';

function Top() {
  return (
    <div>
      <div class="header">
        <figure class="header_logo"><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="メニュー画像"/></figure>
      </div>
      <h1>送金先</h1>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      <h3 class="text">送金上限額</h3>

      <div class="container">
        <div class="box2">
          <p>50000円</p>
        </div>
        <input type="number" placeholder="金額を入力" class="input-box" />
        <div class="p-test01">
          <a class="btn">
            <div class="flex_2">送金</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
