import { Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import logo from './Image/human1.png';
import './Top.css';

function Top() {
  const navigate = useNavigate()
  const handleRemit = () => {
    navigate('/RemittanceDest')
}

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

  <Button onClick={handleRemit}>送金する</Button>
</div>


  );
}

export default Top;
