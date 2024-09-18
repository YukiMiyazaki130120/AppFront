import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Top from './Top';
import { ChakraProvider } from '@chakra-ui/react'
import RemittanceDest from './RemittanceDest';
import Step4 from './Step4';
import Step5_complete from './Step5_complete';
import Page3_1 from './Page3_1';
import Page3_2 from './Page3_2';
import Page3_3 from './Page3_3';
import Page3_4 from './Page3_4';
import Page4 from './Page4';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
          <Route path={`/RemittanceDest`} element={<RemittanceDest />} />
          <Route path={`/Step4`} element={<Step4 />} />
          <Route path={`/Step5_complete`} element={<Step5_complete />} />
          <Route path={`/Page3_1`} element={<Page3_1 />} />
          <Route path={`/Page3_2`} element={<Page3_2 />} />
          <Route path={`/Page3_3`} element={<Page3_3 />} />
          <Route path={`/Page3_4`} element={<Page3_4 />} />
          <Route path={`/Page4`} element={<Page4 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
