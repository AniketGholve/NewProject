import React, { useEffect, useState } from 'react'
import Header from './components/Header.js';
import './App.css'
import CLP from './components/CLP'
import ALP from './components/ALP'
import { Provider } from 'react-redux';
import store from './store'
const App = () => {
  let [userRole, setUserRole] = useState(window.localStorage.getItem("userRole"));
  let [activeTab, setActiveTab] = useState(window.localStorage.getItem("activeTab"));
  let [activeDropDown, setActiveDropDown] = useState(false);
  useEffect(() => {
    window.addEventListener('storage', () => {
      setUserRole(window.localStorage.getItem("userRole"))
      setActiveTab(window.localStorage.getItem("activeTab"))
    })
  }, [])
  const toggleUserAction = () => {
    setActiveDropDown(!activeDropDown);
  }
  const toggleActive = (tab) => {
    localStorage.setItem("activeTab", tab);
    setActiveTab(window.localStorage.getItem("activeTab"));
  }
  return (
    <Provider store={store}>
      <Header userRole={userRole} activeTab={activeTab} setActiveTab={setActiveTab} activeDropDown={activeDropDown} setActiveDropDown={setActiveDropDown} toggleUserAction={toggleUserAction} toggleActive={toggleActive}/>
      {userRole === 'ALP' && <ALP activeTab={activeTab} setActiveTab={setActiveTab} toggleActive={toggleActive}/>}
      {userRole === 'CLP' && <CLP />}
      {userRole === 'ELP' && <CLP />}
      {userRole === 'MLP' && <CLP />}
    </Provider>
  )
}
export default App;
