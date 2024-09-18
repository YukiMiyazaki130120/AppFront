import logo from './Image/approval.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Step5_complete.css';

function Top() {
  return (
    <div>
      <div class="header">
        <figure class="header_logo"><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="メニュー画像"/></figure>
      </div>

      <div class="container">
        <figure class="Image"><img src={logo} alt="ロゴ画像"/></figure>
        <h2>送金処理が完了しました</h2>
        <div class="p-test01">
          <a class="btn">
            <div class="flex_2">トップ画面へ戻る</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Top;
