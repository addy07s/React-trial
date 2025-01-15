import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
       <h1>MyApp custom function</h1> 
    </div>
  )
  
}

const VisitGoogle=(
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const ReactElement = React.createElement('a',{href:"https://twitch.tv",target:'_blank'}, 'VISIT TWITCH')



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {VisitGoogle}
    {ReactElement}
  </StrictMode>,
)
