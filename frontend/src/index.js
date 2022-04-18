import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ChatProvider from './context/ChatProvider';

// import { ChakraProvider } from '@chakra-ui/react'
// import { ChakraProvider } from '../node_modules/@chakra-ui/react'

ReactDOM.render(
  <BrowserRouter>
  <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </ChatProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
