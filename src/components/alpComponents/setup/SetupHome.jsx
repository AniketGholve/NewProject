import React, { useEffect } from 'react'
import { getEnterpriseData, getFacilityData, getUserData } from '../../../redux/action'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const SetupHome = ({ enterpriseData, facilityData, userData, setScreen, enterpriseId , setFacilityId ,setUserId}) => {
    let dispatch = useDispatch()
    useEffect(() => {
        getEnterpriseData(enterpriseId, dispatch)
        getFacilityData(enterpriseId, dispatch)
        getUserData(enterpriseId, dispatch)
    }, [dispatch, enterpriseId])
    const deletefacility = (facilityId) => {
        fetch(`http://localhost:7890/deleteFacility/${facilityId}`, { method: 'POST' }).then(response => {
            if (response.ok) {
                alert('Facility Deleted')
                getFacilityData(enterpriseId, dispatch)
            }
        })
    }
    const deleteUser = (id) => {
        fetch(`http://localhost:7890/api/deleteById/${id}`, { method: 'POST' }).then(response => {
            if (response.ok) {
                alert('user Deleted');
                getUserData(enterpriseId, dispatch);
            }
        })
    }
    return (
        <div className="container mt-4 ">
            <div className="d-flex justify-content-between">
                <h4 className='headingFont'>Corporate Information </h4>
                <Link className="text-danger" onClick={() => { setScreen("modCorporate") }}>Modify Corporate</Link>
            </div>
            <hr />
            <div className="container shadow p-3 mt-2 ">
                <div className="d-grid">
                    <div className='row'>
                        <label className='font-weight-bold col-2' htmlFor="">Corporate Name : </label>
                        <div className='font-weight-bold col-4'>{enterpriseData.name}</div>
                    </div>

                    <div className='row'>
                        <span className='font-weight-bold col-2'>Corporate Number : </span>
                        <div className='font-weight-bold col-4'>{enterpriseData.enterpriseId}</div>
                    </div>
                    <br />
                    <div className="row ">
                        <label className="col-2" htmlFor="">Address : </label>
                        <div className="col-4">{enterpriseData.addrLink1},{enterpriseData.addrLink2}</div>
                        <label className="col-2" htmlFor="">GLN : </label>
                        <div className="col-4">{enterpriseData.gln}</div>
                    </div>
                    <div className="row ">
                        <label className="col-2" htmlFor="">City : </label>
                        <div className="col-4">{enterpriseData.city}</div>
                        <label className="col-2" htmlFor="">Phone : </label>
                        <div className="col-4">{enterpriseData.phone}</div>
                    </div>
                    <div className="row ">
                        <label className="col-2" htmlFor="">State : </label>
                        <div className="col-4">{enterpriseData.state}</div>
                        <label className="col-2" htmlFor="">Email : </label>
                        <div className="col-4">{enterpriseData.email}</div>
                    </div>
                    <div className="row">
                        <label className="col-2" htmlFor=" ">ZipCode : </label>
                        <div className="col-4">{enterpriseData.zipcode}</div>
                    </div>
                </div>
            </div>
            <div className="d-grid mt-3">
                <div className="d-flex justify-content-between">
                    <h4 className='headingFont'>Facilities</h4>
                    <Link className="text-danger" onClick={() => setScreen("addFacility")}><i className="fa-solid fa-plus"></i> Add Facility</Link>
                </div>
                <table id="" className="table table-striped text-center mt-2 ">
                    <thead className="thead">
                        <tr>
                            <th className="">Facility Name</th>
                            <th className="">Facility ID</th>
                            <th className="">Address</th>
                            <th className="">City</th>
                            <th className="">State</th>
                            <th className="">Zip Code</th>
                            <th className="">Edit</th>
                            <th className="">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            facilityData.map((x, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{x.facilityName}</td>
                                        <td>{x.facilityId}</td>
                                        <td>{x.address}</td>
                                        <td>{x.city}</td>
                                        <td>{x.state}</td>
                                        <td>{x.zipcode}</td>
                                        <td><Link onClick={() => {setScreen("editFacility");setFacilityId(x.facilityId)}}><i className="fa-regular fa-pen-to-square link-danger"></i></Link></td>
                                        <td><i className="fa-regular fa-circle-xmark link-danger " onClick={() => deletefacility(x.facilityId)}></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="d-grid mt-3">
                <div className="row">
                    <div className="col-6">
                        {/* <h3 style="font-size:25px;">Users</h3> */}
                    </div>
                    <div className="col-6">
                        {/* <a className="corporateModify" style="float: right;" href="#!addUserSetup"> + Add User</a> */}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className='headingFont'>Users</h4>
                    <Link className="text-danger " onClick={() => setScreen("addUser")}><i className="fa-solid fa-plus"></i> Add User</Link>
                </div>
                <table id="" className="table table-striped text-center mt-2 ">
                    <thead className="thead">
                        <tr>
                            <th className="">Last Name</th>
                            <th className="">First Name</th>
                            <th className="">User Name</th>
                            <th className="">Role</th>
                            <th className="">Phone</th>
                            <th className="">Status</th>
                            <th className="">Edit</th>
                            <th className="">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((x, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{x.lastName}</td>
                                    <td>{x.firstName}</td>
                                    <td>{x.username}</td>
                                    <td>{x.role}</td>
                                    <td>{x.phoneNo}</td>
                                    {x.active === true ? <td>Active</td> : <td>InActive</td>}
                                    <td><Link onClick={()=>{setScreen("editUser");setUserId(x.id)}}><i className="fa-regular fa-pen-to-square link-danger"></i></Link></td>
                                    <td><i className="fa-regular fa-circle-xmark link-danger " onClick={() => deleteUser(x.id)}
                                    ></i></td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        ...state,
        enterpriseData: state.enterpriseData,
        facilitydata: state.facilitydata,
        userData: state.userData
    }
}
export default connect(mapStateToProp)(SetupHome)
