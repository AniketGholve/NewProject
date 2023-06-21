import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ViewClinicUsers from './ViewClinicUsers';
import AddClinicUser from './AddClinicUser';
import EditClinicUser from './EditClinicUser';
import { connect, useDispatch } from 'react-redux';
import { getClinicUsers } from '../../redux/action';
const ViewClinic = ({ locationId, setActivePage, activePage, setSuccessAlertFlag, successFlag ,clinicUserData}) => {
  let [clinicDetails, setClinicData] = useState([]);
  let [userId, setUserId] = useState([]);
  let [internalActivePage, setInternalActivePage] = useState("viewClinic");
  let dispatch=useDispatch();
  useEffect(() => {
    fetch("http://localhost:7890/getByClinicId/" + locationId).then((response) => {
      response.json().then(result => {
        setClinicData(result);
      })
    })
    getClinicUsers(locationId,dispatch)
  }, [locationId,dispatch])
  const removeUser=(userId)=>{
    fetch("http://localhost:7890/api/deleteUsers/" + userId,{method:'delete'}).then((response) => {
      getClinicUsers(locationId,dispatch)
    })
  }
  return (
    <>
      {
        internalActivePage === "viewClinic" && <>
          <div>
            <button className='btn btn-success mt-5 mx-5' onClick={() => setActivePage("")}><i className="fa-solid fa-arrow-left px-1"></i> Back</button>
          </div>
          <div className="d-flex m-5 clinicDetailsContainer bg-dark">
            <div className="w-25 clinicImage">
              <img width="100%" height="100%" alt='...' src='https://th.bing.com/th/id/R.de600f6e48c6434daa895b3b1eb7073e?rik=M3SKWMPhDoFK0w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1551601651-2a8555f1a136%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=M%2f6wbFwaYvhjPpnUdzVHk%2fj%2bfrAt6QIgwbBnXc8jet0%3d&risl=&pid=ImgRaw&r=0'></img>
            </div>
            <div className="w-75 clinicDetails" style={{ color: "white" }}>
              <div>
                <p>Clinic Name : </p>
                <p>{clinicDetails.name}</p>
              </div>
              <div>
                <p>Clinic Email : </p>
                <p>{clinicDetails.email}</p>
              </div>
              <div>
                <p>Clinic Phone : </p>
                <p>{clinicDetails.phone}</p>
              </div>
              <div>
                <p>Address - 1 :</p>
                <p>{clinicDetails.addrLine1}</p>
              </div>
              <div>
                <p>Address - 2 : </p>
                <p>{clinicDetails.addrLine2}</p>
              </div>
              <div>
                <p>City : </p>
                <p>{clinicDetails.city}</p>
              </div>
              <div>
                <p>State : </p>
                <p>{clinicDetails.state}</p>
              </div>
              <div>
                <p>Country : </p>
                <p>{clinicDetails.country}</p>
              </div>
              <div>
                <p>StateCode : </p>
                <p>{clinicDetails.stateCode}</p>
              </div>
              <div>
                <p>Zipcode : </p>
                <p>{clinicDetails.zipcode}</p>
              </div>
              <div>
                <p>Location Id : </p>
                <p>{clinicDetails.locationId}</p>
              </div>
              <div>
                <p>Enterprise Id : </p>
                <p>{clinicDetails.enterpriseId}</p>
              </div>
            </div>
          </div>
          <div>
            <div className='d-flex'>
              <div className='w-100'>
                <h1 className='headingFont text-center underline'>Clinic Users</h1>
              </div>
              <div style={{ width: '10%' }} className="d-flex align-items-center">
                <button className='btn btn-success' onClick={() => setInternalActivePage("addClinicUser")}>Add User</button>
              </div>
            </div>
            <div className='m-5 clinicUsers'>
              <table className="table table-striped text-center table-success">
                <thead className="">
                  <tr>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Middle Name</th>
                    <th>User Login</th>
                    <th>Email</th>
                    <th>Job Title</th>
                    <th>Work Phone</th>
                    <th>Mobile Phone</th>
                    <th>Location Id</th>
                    <th>Enterprise Id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    clinicUserData.map((item, idx) => (
                      <tr key={idx}>
                        <td className="p-3">{item.userId}</td>
                        <td className="p-3">{item.firstName}</td>
                        <td className="p-3">{item.lastName}</td>
                        <td className="p-3">{item.middleName}</td>
                        <td className="p-3">{item.userLogin}</td>
                        <td className="p-3">{item.email}</td>
                        <td className="p-3">{item.jobTitle}</td>
                        <td className="p-3">{item.workPhone}</td>
                        <td className="p-3">{item.mobilePhone}</td>
                        <td className="p-3">{item.defaultLocationId}</td>
                        <td className="p-3">{item.enterpriseId}</td>
                        <td className="p-3"><NavLink onClick={() => { setInternalActivePage("editClinicUser"); setUserId(item.userId) }}>Edit</NavLink>&nbsp;<NavLink onClick={()=>removeUser(item.userId)}>Remove</NavLink>&nbsp;<NavLink onClick={() => { setInternalActivePage("viewClinicUser"); setUserId(item.userId) }}>View</NavLink>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </>
      }
      {
        internalActivePage === "viewClinicUser" && <ViewClinicUsers setInternalActivePage={setInternalActivePage} userId={userId} />
      }
      {
        internalActivePage === "addClinicUser" && <AddClinicUser setInternalActivePage={setInternalActivePage} setSuccessAlertFlag={setSuccessAlertFlag} successFlag={successFlag} locationId={locationId} />
      }
      {
        internalActivePage === "editClinicUser" && <EditClinicUser setInternalActivePage={setInternalActivePage} setSuccessAlertFlag={setSuccessAlertFlag} successFlag={successFlag} locationId={locationId} userId={userId} />
      }
    </>
  )
}
const mapstateToProp=(state)=>{
  return{
    clinicUserData:state.clinicUserData
  }
}
export default connect(mapstateToProp)(ViewClinic)
