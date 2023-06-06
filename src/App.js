import React, { useEffect, useState } from 'react'
import Header from './components/Header.js';
import './App.css'
import CLP from './components/CLP'
import ALP from './components/ALP'
const App = () => {
  let [userRole, setUserRole] = useState("");
  useEffect(() => {
    setUserRole(sessionStorage.getItem("userRole"))
  }, [])
  return (
    <>
      <Header userRole={userRole} />
      {
        userRole==='CLP'? <CLP/> : userRole==='ALP' ? <ALP/> :""
      }
    </>
  )
}
export default App;
