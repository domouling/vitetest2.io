/* import { useState } from 'react' */
//import reactLogo from './assets/react.svg'

import './App.css'

import "./styles/styles.scss";

import * as bootstrap from 'bootstrap';


import { AppRoutes } from './routes/AppRoutes'

const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App;