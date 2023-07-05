import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const EditUser = ({ setScreen, userId }) => {
    let [userData, setUserData] = useState([])
    let [userRole, setUserRole] = useState(null)
    let [jobTitile,setJobTitilte]=useState(null)
    let [userStatus,setUserStatus]=useState(null)
    useEffect(() => {
        fetch(`http://localhost:7890/api/getUserById/${userId}`).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    // console.log(result)
                    setUserData(result)
                    setUserRole(result.role)
                    setJobTitilte(result.jobTitile)
                    setUserStatus(result.active)
                })
            }
        })
    }, [userId])
    const handleSubmitForm=(e)=>{
        e.preventDefault()  
        let data={...userData};
        data.firstName=e.target.firstName.value;
        data.lastName=e.target.lastName.value;
        data.role=userRole;
        data.jobTitile=jobTitile;
        data.phoneNo=e.target.phoneNo.value;
        data.password=e.target.password.value;
        data.active=userStatus;
        delete data.authorities;
        updateUser(data);
    }
    const updateUser=(data)=>{
        fetch(`http://localhost:7890/api/editUser`,{
            method:"PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(response=>{
            if(response.ok){
                alert("data added")
                response.json().then(result=>{
                    console.log(result);
                })
            }
        })
    }
    return (
        <div className='container mt-5'>
            <h2 className="text-center headingFont">Edit User</h2>
            <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
            <form className='mt-5 shadow w-75 p-4 m-auto' onSubmit={handleSubmitForm}>
                <div className="row g-3 d-flex justify-content-between">
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">First Name </label>
                        <input type="text" className="text-center w-50" name="firstName" defaultValue={userData.firstName} placeholder='First Name' />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Last Name </label>
                        <input type="text" className="text-center w-50" name="lastName" defaultValue={userData.lastName} placeholder='Last Name' />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Role</label>
                        <select name="role" className="text-center w-50" value={userRole} onChange={(e) => { setUserRole(e.target.value) }} required>
                            <option className='d-none'>Please Choose</option>
                            <option value="ELP">ELP</option>
                            <option value="MLP">MLP</option>
                            <option value="ALP">ALP</option>
                            <option value="CLP">CLP</option>
                        </select>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Job Title</label>
                        <select name="jobTitile" className="text-center w-50" value={jobTitile} onChange={(e) => setJobTitilte(e.target.value)} required>
                            <option value="" className="d-none">Please Choose</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Tech Support All">Tech Support All</option>
                            <option value="Customer Service">Customer Service</option>
                        </select>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Phone</label>
                        <input type="tel" pattern="^\d{10}$" className="w-50 text-center" defaultValue={userData.phoneNo} name="phoneNo" placeholder='Phone Number'
                        />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label>Password </label>
                        <input className="w-50 text-center" type="password" name="password" defaultValue={userData.password} required placeholder="Password" />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Status</label>
                        <select name="status" className="text-center w-50" value={userStatus} onChange={(e)=>setUserStatus(e.target.value)} required>
                            <option value="" className="d-none">Please Choose</option>
                            <option value={"true"}>Active</option>
                            <option value={"false"}>Inactive</option>
                        </select>
                    </div>
                    <div className=" d-flex justify-content-center p-3 ">
                        <button className="btn btn-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditUser
