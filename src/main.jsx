import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


// import './assets/css/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(

 
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    
    {/* <CssBaseline className='bg-red-500' /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
