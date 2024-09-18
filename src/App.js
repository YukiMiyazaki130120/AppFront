import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Top from './Top';
import { ChakraProvider } from '@chakra-ui/react'
import RemittanceDest from './RemittanceDest';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Top />} />
          <Route path={`/RemittanceDest`} element={<RemittanceDest />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
