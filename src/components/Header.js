import React from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
function Header({userRole,activeTab,setActiveTab,activeDropDown,setActiveDropDown,toggleUserAction,toggleActive}) {
    const handleLogout = ()=>{
        localStorage.clear()
    }
    return (
        <>
            {activeDropDown && <div className='overlay' onClick={() => { setActiveDropDown(false) }}></div>}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand">
                        <img src='./images/883.gif' alt='IMS' />Capsule Corp's
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-right" id='navbarSupportedContent'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                userRole === "CLP" && <>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("home")} className={activeTab === 'home' ? 'nav-link active_class' : 'nav-link'}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("patient")} className={activeTab === 'patient' ? 'nav-link active_class' : 'nav-link'}>Patients</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("inventory")} className={activeTab === 'inventory' ? 'nav-link active_class' : 'nav-link'}>Inventory</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("administrator")} className={activeTab === 'administrator' ? 'nav-link active_class' : 'nav-link'}>Administrator</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("report")} className={activeTab === 'report' ? 'nav-link active_class' : 'nav-link'}>Reports</NavLink>
                                    </li>
                                </>
                            }
                            {userRole === "ALP" && <>
                                <li className="nav-item">
                                    <NavLink onClick={() => toggleActive("clinic")} className={activeTab === 'clinic' ? 'nav-link active_class' : 'nav-link'}>Clinics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => toggleActive("reporting")} className={activeTab === 'reporting' ? 'nav-link active_class' : 'nav-link'}>Reporting</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => toggleActive("ordering")} className={activeTab === 'ordering' ? 'nav-link active_class' : 'nav-link'}>Ordering</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => toggleActive("shipping")} className={activeTab === 'shipping' ? 'nav-link active_class' : 'nav-link'}>Shipping</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => toggleActive("setup")} className={activeTab === 'setup' ? 'nav-link active_class' : 'nav-link'}>Setup</NavLink>
                                </li>
                            </>}
                            {
                                userRole === "ELP" && <>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("successOrder")} className={activeTab === 'successOrder' ? 'nav-link active_class' : 'nav-link'}>Success Orders</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => toggleActive("errorOrder")} className={activeTab === 'errorOrder' ? 'nav-link active_class' : 'nav-link'}>Error Orders</NavLink>
                                    </li>
                                </>
                            }
                            <div className='user-actions'>
                                <li className="nav-item">
                                    <NavLink onClick={toggleUserAction}><i className="fa-sharp fa-solid fa-circle-user icon"></i></NavLink>
                                </li>
                            </div>
                            <>
                                {
                                    activeDropDown && <div id="userDropDown" className="sub_menu">
                                        <div>
                                            <NavLink onClick={() => toggleActive("myAccount")}><i className="fa-regular fa-id-card"></i> My Account</NavLink>
                                            <hr></hr>
                                            <NavLink onClick={() => {handleLogout();}} to='http://localhost:8080/realms/Inventory/protocol/openid-connect/logout'><i className="fa-solid fa-right-from-bracket"></i> Logout</NavLink>
                                        </div>
                                    </div>
                                }
                                <div className="userActionResponsive">
                                    <li className="nav-item ">
                                        <NavLink onClick={() => toggleActive("myAccount")} className={activeTab === 'myAccount' ? 'nav-link active_class' : 'nav-link'}><i className="fa-regular fa-id-card"></i> My Account</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink onClick={() => {handleLogout()}} className={activeTab === 'logout' ? 'nav-link active_class' : 'nav-link'} to='http://localhost:8080/realms/Inventory/protocol/openid-connect/logout'><i className="fa-solid fa-right-from-bracket"></i> Logout</NavLink>
                                    </li>
                                </div>
                            </>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Header;