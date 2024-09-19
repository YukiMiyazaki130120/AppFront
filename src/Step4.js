import { Button } from '@chakra-ui/react';

import { useNavigate, useLocation } from "react-router-dom";
import logo from './Image/human1.png';
import logo_2 from './Image/human2.png';
import logo_3 from './Image/human3.png';
import logo_4 from './Image/human4.png';
import logo_5 from './Image/human5.png';
import logo_6 from './Image/human6.png';



import logo2 from './Image/wallet.png';
import header_logo from './Image/icon.png';
import menu from './Image/menu.png';
import './Step4.css';
import axios from 'axios';
import React, {useState}  from "react";


function Step4() {
  const [mybank, setMybank] = React.useState([]);
  const [amount, setAmount] = useState(''); // 金額を格納するstate
  const [menuVisible, setMenuVisible] = React.useState(false);
  const location = useLocation();
  const { selectedMember } = location.state || {}; //前ページから渡された selectedMember の情報を受け取る


  React.useEffect(() => {
    axios.get('http://localhost:5000/top').then((response) => {
    setMybank(response.data);
    console.log(response.data);
    //setFilename("/Image/" + response.data.image_path);
    })
  }, []);

  // ロゴと image_path の対応を定義
  const imageMap = {
    "human2.png": logo_2,
    "human3.png": logo_3,
    "human4.png": logo_4,
    "human5.png": logo_5,
    "human6.png": logo_6
  };


  const navigate = useNavigate()


  
  const handleRemit = () => {
    if (!amount) {
      alert("金額を入力してください");
      return;
    }

    // 金額が預金残高を超えている場合のチェック
    if (Number(amount) > Math.floor(mybank.balance)) {
      alert("送金金額が預金残高を超えています。");
      return;
    }

    // POST リクエストのデータを準備
    const postData = {
      amount: amount,
      account_num: selectedMember.account_num,
      user_name: selectedMember.user_name
    };

    // axios の POST リクエスト
    axios.post('http://localhost:5000/Step5_complete', postData)
      .then((response) => {
        console.log("送金成功:", response.data);

        // 成功したらページ遷移(値を渡す必要はない？)
        navigate('/Step5_complete', { 
          state: { 
            selectedMember: selectedMember,
            amount: amount  // 金額も渡す
          } 
        });
      })
      .catch((error) => {
        console.error("送金失敗:", error);
        alert("送金に失敗しました。もう一度お試しください。");
      });
    //navigate('/Step5_complete')

    

/*
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
*/


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
  
        <figure class="image"><img src={imageMap[selectedMember.image_path]} alt={selectedMember.user_name} /></figure>
        <p class="text">{selectedMember.user_name}</p>

      </div>
      <h3 class="text">送金上限額</h3>

      <div class="container">
        <div class="box2">

          {/*自分の預金金額を取ってきて、小数点以下切り捨て*/}
          <p>{Math.floor(mybank.balance)} 円</p>
        </div>

        <input type="number" placeholder="金額を入力" class="input-box" value={amount} onChange={(e) => setAmount(e.target.value)}/>

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

export default Step4;
