import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import './Top.css';

function Top() {
  return (
    <div>
      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      <h2 class="text">口座番号</h2>
      <h3 class="text">預金残高</h3>
      <div class="box2">
        <p>50000円</p>
      </div>
      <div class="p-test01">
        <a class="btn">
          <div class="flex_2">
            <figure class="image"><img src={logo2} alt="ロゴ画像"/></figure>→送金する
          </div>
        </a>
      </div>
    </div>
  );
}

export default Top;
