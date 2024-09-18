import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Top from './Top';
import { ChakraProvider } from '@chakra-ui/react'
import RemittanceDest from './RemittanceDest';
import Step4 from './Step4';
import Step5_complete from './Step5_complete';
import Page3_3 from './Page3_3';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
          <Route path={`/RemittanceDest`} element={<RemittanceDest />} />
          <Route path={`/Step4`} element={<Step4 />} />
          <Route path={`/Step5_complete`} element={<Step5_complete />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
