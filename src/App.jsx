import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/layout/Header'
import { HomeEstrenoPromocionado } from './pages/HomeEstreno'

function App() {
return (
  <div className='app'>
<Header isLoggedin={false}/>
<HomeEstrenoPromocionado />
  </div>
  
)

}

export default App
