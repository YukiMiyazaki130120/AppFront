import logo2 from './Image/human2.png';
import logo3 from './Image/human3.png';
import logo4 from './Image/human4.png';
import logo5 from './Image/human5.png';
import logo6 from './Image/human6.png';

import './RemittanceDest.css';
import { Center, HStack, Spacer, Text, Image } from '@chakra-ui/react'

function RemittanceDest() {
  return (
    <div>
      <Center m={"10px"}>
        <div>
          <Text fontSize='4xl'>送金相手を選択</Text>
        </div>
      </Center>

      <Center>
        <HStack>
          <Image src={logo2}></Image>
          <Text fontSize='2xl'>サンプル氏名</Text>
        </HStack>
      </Center>

      <Center>
        <HStack>
          <Image src={logo3}></Image>
          <Text fontSize='2xl'>サンプル氏名</Text>
        </HStack>
      </Center>
      <Center>
        <HStack>
          <Image src={logo4}></Image>
          <Text fontSize='2xl'>サンプル氏名</Text>
        </HStack>
      </Center>
      <Center>
        <HStack>
          <Image src={logo5}></Image>
          <Text fontSize='2xl'>サンプル氏名</Text>
        </HStack>
      </Center>
      <Center>
        <HStack>
          <Image src={logo6}></Image>
          <Text fontSize='2xl'>サンプル氏名</Text>
        </HStack>
      </Center>
      
            
      {/*
      <div class="field">
        <p>画像</p>
        <p>サンプル氏名</p>
      </div>
      <div class="field">
        <p>画像</p>
        <p>サンプル氏名</p>
      </div>
      <div class="field">
        <p>画像</p>
        <p>サンプル氏名</p>
      </div>
      <div class="field">
        <p>画像</p>
        <p>サンプル氏名</p>
      </div>
      <div class="field">
        <p>画像</p>
        <p>サンプル氏名</p>
      </div>
      */}
    </div>
  );
}

export default RemittanceDest;
