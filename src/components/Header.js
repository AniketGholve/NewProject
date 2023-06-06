import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
function Header({ userRole }) {
    let [activeTab, setActiveTab] = useState(sessionStorage.getItem("activeTab"));
    const toggleActive = (tab) => {
        sessionStorage.setItem("activeTab", tab);
        setActiveTab(sessionStorage.getItem("activeTab"));
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand">Inventory Management System</NavLink>
                    <div className="collapse navbar-collapse">
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
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Header;