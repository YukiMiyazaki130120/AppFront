import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Top.css';
//import axios from 'axios';



function Top() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/RemittanceDest')
  }
  /*
  axios.get('http://localhost:5000/')
    .then(responce => {
      const message = responce.data.message;
      console.log(message);
    })
    .catch(error => {
      console.error('リクエストエラー:', error);
    });
  */


  return (
    <div>
      <div class="header">
        <figure class="header_logo"><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="ロゴ画像"/></figure>
      </div>

      <div class="flex">
        <figure class="image"><img src={logo} alt="ロゴ画像"/></figure>
        <p class="text">サンプル　氏名</p>
      </div>
      <h2 class="text">口座番号</h2>
      <h3 class="text">預金残高</h3>
      <div class="container">
        <div class="box2">
          <p>50000円</p>
        </div>
        <Button onClick={handleRemit}>送金</Button>
      </div>
    </div>
  );
}

export default Top;
