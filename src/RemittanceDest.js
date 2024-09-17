
import './RemittanceDest.css';
import logo_1 from './Image/human1.png';
import logo_2 from './Image/human2.png';
import logo_3 from './Image/human3.png';
import logo_4 from './Image/human4.png';
import logo_5 from './Image/human5.png';
import logo_6 from './Image/human6.png';

function RemittanceDest() {
  return (
    <div>
      <center>
        <div>
          <h1>送金相手を選択</h1>
        </div>
      </center>
      
      <ul>
        <li>
          <div class="field">
          <figure class="image"><img src={logo_1} /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
          <div class="field">
          <figure class="image"><img src={logo_2} /></figure>
            <p>サンプル氏名</p>
          </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_3} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_4} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_5} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
        <li>
        <div class="field">
          <figure class="image"><img src={logo_6} /></figure>
          <p>サンプル氏名</p>
        </div>
        </li>
      </ul>
    </div>
  );
}

export default RemittanceDest;
