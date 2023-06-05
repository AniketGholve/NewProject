import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './style.css'
function Header() {
    let [userRole, setUserRole] = useState("");
    
    useEffect(() => {
        setUserRole(sessionStorage.getItem("userRole"))
    },[])
    
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink activeClassName="active_class" className="navbar-brand" to="#!">Inventory Management System</NavLink>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                userRole === "" && <>
                                    <li className="nav-item" >
                                        <NavLink className="nav-link" href="#!">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!register">Register</NavLink>
                                    </li>
                                </>
                            }
                            {
                                userRole === "CLP" && <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!/clp_users">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!/patient">Patients</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!inventory">Inventory</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!/administrator">Administrator</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" href="#!/reports">Reports</NavLink>
                                    </li>
                                </>
                            }
                            {userRole === "ALP" && <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#!clinics">Clinics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#!reporting">Reporting</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#!/ordersInfo">Ordering</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#!/shipping">Shipping</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" href="#!/setup">Setup</NavLink>
                                </li>
                            </>}
                            {
                                userRole === "ELP" && <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/elp_users">Success Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/error_orders">Error Orders</a>
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