import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo_2 from './Image/human2.png';
import logo_3 from './Image/human3.png';
import logo_4 from './Image/human4.png';
import logo_5 from './Image/human5.png';
import logo_6 from './Image/human6.png';

import './RemittanceDest.css';
import { Center, HStack, Spacer, Text, Image } from '@chakra-ui/react'

import header_logo from './Image/icon.png';
import menu from './Image/menu.png';

import axios from 'axios';
import React from "react";


function RemittanceDest() {
  const [otherMember, setOtherMember] = React.useState([]);

  // ロゴと image_path の対応を定義
  const imageMap = {
    "human2.png": logo_2,
    "human3.png": logo_3,
    "human4.png": logo_4,
    "human5.png": logo_5,
    "human6.png": logo_6
  };

  /*
  React.useEffect(() => {
    axios.get('http://localhost:5000/RemittanceDest').then((response) => {
    setOtherMember(response.data);
    console.log(response.data);
    //setFilename("/Image/" + response.data.image_path);
    }).catch(error => {
      console.log(error);
    })
  }, []);
  */

  ///
  React.useEffect(() => {
    axios.get('http://localhost:5000/RemittanceDest')
      .then((response) => {
        setOtherMember(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // otherMember が更新されるたびにログを出力
  React.useEffect(() => {
    console.log(otherMember);
  }, [otherMember]);

  //ページ遷移
  const navigate = useNavigate()
  //選択された人の情報を持ちながら移動
  const handleRemit = (member) => {
    navigate('/Step4', { state: { selectedMember: member } });
  };
  const GoHome = () => {
    navigate('/')
  }


  return (
    <div>
      <div class="header">
        <figure class="header_logo" onClick={GoHome}><img src={header_logo} alt="ロゴ画像"/></figure>
        <figure class="menu"><img src={menu} alt="ロゴ画像"/></figure>
      </div>
      <center>
        <div>
        <div class="Title">送金相手を選択</div>
        </div>
      </center>

      <ul>
        {otherMember.map((member, index) => (
          <li key={index}>
            <div class="field" onClick={() => handleRemit(member)}>
              <img src={imageMap[member.image_path]} alt={member.user_name} />
              <p>{member.user_name}</p>
            </div>
          </li>
        ))}
      </ul>

      {/*}
      <div>
        {
          (function () {
            const list = [];
            for (let i = 0; i < 5; i++) {
              list.push(<li>
                <div class="field" onClick={handleRemit}>
                <figure class="image"><img src={logo_2} /></figure>
                  <p>{}</p>
                </div>
              </li>);
            }
            return <ul>{list}</ul>;
          }())
        }
      </div>
      */}

      
      {/*
      <ul>
        <li>
          <div class="field" onClick={handleRemit}>
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
      */}

    </div>
  );
}

export default RemittanceDest;
