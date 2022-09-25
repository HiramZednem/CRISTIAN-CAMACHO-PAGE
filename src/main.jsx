import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './assets/styles/index.css'


import InformationContent from './organisms/InformationContent'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <App></App> 
      <InformationContent src="https://historia1imagen.files.wordpress.com/2019/08/twitterlogodown.png" text="Quibo" ></InformationContent>
      
    </>
)
