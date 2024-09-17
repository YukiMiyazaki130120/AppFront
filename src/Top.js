import logo from './Image/human1.png';
import './Top.css';

function Top() {
  return (
<div>
  <div class="flex">
    <figure class="image"><img src={logo}/></figure>
     <p class="text">サンプル　氏名</p>
  </div>
    <h2 class="text">口座番号</h2>
    <h3 class="text">預金残高</h3>
    <div class="box2">
      <p>50000円</p>
    </div>
</div>


  );
}

export default Top;
