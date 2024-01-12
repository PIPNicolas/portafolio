import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
/>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme =  createTheme({
  palette:{
    background: {
      default: 'rgba(35,33,33,0.85)',
    },
  }
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
