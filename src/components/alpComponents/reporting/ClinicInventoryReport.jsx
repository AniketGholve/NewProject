import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { getClinics, getInventoryData, getOnHand } from '../../../redux/action';
// import { getClinicNames } from '../../../redux/action';
const mapStateToProps = (state) => {
    return {
        ...state,
        clinicData: state.clinicData,
        clinicInventoryData: state.clinicInventoryData
    }
}
const ClinicInventoryReport = ({ clinicData, clinicInventoryData, inventoryOnHand }) => {
    let [activeDropDown, setActiveDropDown] = useState(false);
    let [locationId, setLocationId] = useState(null);
    let dispatch = useDispatch();
    useEffect(() => {
        getClinics(dispatch);
        getInventoryData(dispatch, locationId);
    }, [dispatch, locationId])
    const toggleUserAction = () => {
        setActiveDropDown(!activeDropDown);
    }
    const handleChangeSelect = (e) => {
        setLocationId(e.target.value);
    }
    return (
        <div className="mt-3">
            <h3 className="text-center">Clinic Inventory SnapShot</h3>
            <div className='container'>
                <div className='d-grid' style={{ gridTemplateColumns: 'repeat(10,2fr)', gridTemplateRows: '37px' }}>
                    <select id="reportDropdown" value={locationId} onChange={handleChangeSelect}>
                        <option className="d-none" value={null}>Select Clinic</option>
                        {
                            clinicData.map((item) => {
                                return <option value={item.locationId} className="text-center">{item.name}</option>
                            })
                        }
                    </select>
                    <div style={{ gridColumn: '10/11', placeContent: "end", position: 'relative', zIndex: 1 }}>
                        <button className="btn btn-success w-100" onClick={() => { toggleUserAction() }}>Download</button>
                        {activeDropDown && <div className="dropdown-content my-3 bg-success">
                            <NavLink className="btn btn-success downloadXLS" to="http://localhost:7890/download/excel">XLS</NavLink>
                            <hr />
                            <NavLink className="btn btn-success downloadPDF" to="http://localhost:7890/download/pdf">PDF</NavLink>
                        </div>}
                    </div>
                </div>
                {
                    locationId !== null && <div className="mt-3">
                        <table id="" className="table table-striped table-hover text-center">
                            <thead>
                                <tr className='d-grid' style={{ gridTemplateColumns: "33.33% 33.33% 33.33%" }}>
                                    <th>Doses</th>
                                    <th>Doses on Hand </th>
                                    <th>Expired Doses </th>
                                </tr>
                            </thead>
                            <tbody>
                                {clinicInventoryData.map((item, idx) => (
                                    <tr className='d-grid' key={idx} style={{ gridTemplateColumns: "33.33% 33.33% 33.33%", placeContent: 'start' }}>
                                        <td>{item.productName}</td>
                                        <td onClick={() => getOnHand(item.productId, locationId, dispatch)}><NavLink data-bs-toggle="modal" data-bs-target="#ohHand">{item.onHand}</NavLink></td>
                                        <td><NavLink data-bs-toggle="modal" data-bs-target="#expiredDoses" className={item.expiredQty > 0 && 'text-danger'}>{item.expiredQty}</NavLink></td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                }
                {/* popups */}
                <div className="modal fade" id="ohHand" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Serial Numbers</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table id="patientDetailsTable" className="table table-striped table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className="px-3">Serial Number</th>
                                            <th className="px-3">NDC</th>
                                            <th className="px-3">LOT</th>
                                            <th className="px-3">Expiry Date</th>
                                            <th className="px-3">Serial Status</th>
                                            <th className="px-3">Created On</th>
                                            <th className="px-3">Enterprise Name</th>
                                            <th className="px-3">Location Name</th>
                                            <th className="px-3">Product Id</th>
                                            <th className="px-3">Patient Specific</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            inventoryOnHand.map((item, idx) => (
                                                <tr>
                                                    <td className="px-3">{item.serialNumber}</td>
                                                    <td className="px-3">{item.ndc}</td>
                                                    <td className="px-3">{item.lot}</td>
                                                    <td className="px-3">{item.expiryDate}</td>
                                                    <td className="px-3">{item.serialStatus}</td>
                                                    <td className="px-3">{item.createdOn}</td>
                                                    <td className="px-3">{item.enterpriseName}</td>
                                                    <td className="px-3">{item.locationId}</td>
                                                    <td className="px-3">{item.productId}</td>
                                                    <td className="px-3">{item.patientSpecific}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="expiredDoses" tabIndex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Serial Numbers</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <table id="patientDetailsTable" className="table table-striped table-bordered text-center">
                                    <tr>
                                        <th className="px-3">Serial Number</th>
                                        <th className="px-3">NDC</th>
                                        <th className="px-3">LOT</th>
                                        <th className="px-3">Expiry Date</th>
                                        <th className="px-3">Serial Status</th>
                                        <th className="px-3">Created On</th>
                                        <th className="px-3">Enterprise Name</th>
                                        <th className="px-3">Location Name</th>
                                        <th className="px-3">Product Id</th>
                                        <th className="px-3">Patient Specific</th>
                                    </tr>
                                    <tr ng-repeat="x in expiredData"></tr>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(ClinicInventoryReport)
