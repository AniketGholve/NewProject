import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import EditClinic from './EditClinic';
import ViewClinic from './ViewClinic';
import AddClinic from './AddClinic';
import { getClinics } from '../../../redux/action';
import Alert from '../../Alert';
const mapStateToProp = (state) => {
    return {
        ...state,
        clinicData: state.clinicData,
    }
}
const Clinic = ({ clinicData, setActiveTab, activeTab, toggleActive }) => {
    let [activeDropDown, setActiveDropDown] = useState(false);
    let [activePage, setActivePage] = useState("");
    let [locationId, setLocationId] = useState(null);
    let [successFlag, setSuccessAlertFlag] = useState(false)
    let dispatch = useDispatch();
    const toggleUserAction = () => {
        setActiveDropDown(!activeDropDown);
    }
    useEffect(() => {
        getClinics(dispatch)
    }, [dispatch])
    const deleteClinic = (locationId) => {
        fetch('http://localhost:7890/deleteClinic/' + locationId, { method: 'DELETE' }).then(
            setSuccessAlertFlag(true)
        )
    }
    return (
        <>
            {
                successFlag && <><Alert setActivePage={setActivePage} setSuccessAlertFlag={setSuccessAlertFlag} message="Deleted"/></>
            }
            {
                (activeTab === "clinic" && activePage === "") &&
                <>
                    {/* {activeDropDown && <div className='overlay' onClick={() => { setActiveDropDown(false) }}></div>} */}
                    <h1 className='text-center mb-4 headingFont'>CLINICS</h1>
                    <div className="text-center">
                        <button className="btn btn-success" onClick={() => { setActivePage("addClinic") }}>Add Clinic</button>
                    </div>
                    <div className="container">
                        <div className='d-grid' style={{ gridTemplateColumns: '50% 40% 10% ', placeContent: "center" }}>
                            <div className='downloadReport' style={{ gridColumn: '3/4', placeContent: "center" }}>
                                <button className="btn btn-success" onClick={() => { toggleUserAction() }}>Download</button>
                                {activeDropDown && <div className="dropdown-content my-3 bg-success">
                                    <NavLink className="btn btn-success downloadXLS" to="http://localhost:7890/download/excel">XLS</NavLink>
                                    <hr />
                                    <NavLink className="btn btn-success downloadPDF" to="http://localhost:7890/download/pdf">PDF</NavLink>
                                </div>}
                            </div>
                        </div>
                        <table className="table table-striped table-hover text-center tabel-success mt-3 clinicTable" style={{ gridColumn: 1 / 1 }}>
                            <thead className='theadGreen'>
                                <tr>
                                    <th>Territory</th>
                                    <th>Clinic Name</th>
                                    <th>Clinic Number</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zipcode</th>
                                    <th>Facility Count</th>
                                    <th>Last Order</th>
                                    <th>Last Dispense</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clinicData.map((item, idx) => (
                                        <tr key={idx} >
                                            <td>{item.country}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.city}</td>
                                            <td>{item.state}</td>
                                            <td>{item.zipcode}</td>
                                            <td>0</td>
                                            <td>{item.lastOrderDate}</td>
                                            <td>{item.lastDispence}</td>
                                            <td><NavLink className="p-2" onClick={() => { setActivePage("editClinic"); setLocationId(item.locationId) }}>Edit</NavLink><NavLink className="p-2" onClick={() => { deleteClinic(item.locationId) }}>Remove</NavLink> <NavLink onClick={() => { setActivePage("viewClinic"); setLocationId(item.locationId) }}>View</NavLink></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </>
            }
            {(activeTab === "clinic" && activePage === "addClinic") && <AddClinic successFlag={successFlag} setSuccessAlertFlag={setSuccessAlertFlag} locationId={locationId} setActivePage={setActivePage} activePage={activePage} />}
            {(activeTab === "clinic" && activePage === "editClinic") && <EditClinic successFlag={successFlag} setSuccessAlertFlag={setSuccessAlertFlag} locationId={locationId} setActivePage={setActivePage} activePage={activePage} />}
            {(activeTab === "clinic" && activePage === "viewClinic") && <ViewClinic successFlag={successFlag} setSuccessAlertFlag={setSuccessAlertFlag} locationId={locationId} setActivePage={setActivePage} activePage={activePage} />}
        </>
    )
}

export default connect(mapStateToProp)(Clinic)
