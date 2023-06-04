import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom/client'
function Header() {
    let [userRole, setUserRole] = useState("");
    sessionStorage.setItem("userRole", "ALP")
    useEffect(() => {
        setUserRole(sessionStorage.getItem("userRole"))
    }, [userRole])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#!">Inventory Management System</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                userRole === "" && <>
                                    <li className="nav-item" >
                                        <a className="nav-link" href="#!">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!register">Register</a>
                                    </li>
                                </>
                            }
                            {
                                userRole === "CLP" && <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/clp_users">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/patient">Patients</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!inventory">Inventory</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/administrator">Administrator</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!/reports">Reports</a>
                                    </li>
                                </>
                            }
                            {userRole === "ALP" && <>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!clinics">Clinics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!reporting">Reporting</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!/ordersInfo">Ordering</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!/shipping">Shipping</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!/setup">Setup</a>
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