import React from 'react'
import { Link } from 'react-router-dom'

const AddUser = ({ setScreen }) => {
    const handleSubmitData=(e)=>{
        e.preventDefault();
        let data={};
        data.firstName=e.target.firstName.value;
        data.lastName=e.target.lastName.value;
        data.username=e.target.username.value;
        data.role=e.target.role.value;
        data.jobTitle=e.target.jobTitle.value;
        data.phoneNo=e.target.phoneNo.value;
        data.password=e.target.password.value;
        data.status=e.target.status.value;
        console.log(data)
        adduserData(data);
    }
    const adduserData =(data)=>{
        fetch(`http://localhost:7890/api/addUser`,{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then(response=>{
            if(response.ok)
            {
                alert('data added')
            }
        })
    }
    return (
        <div className='container mt-5'>
            <h2 className="text-center headingFont">Add User</h2>
            <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
            <form className='mt-5 shadow w-75 p-4 m-auto' onSubmit={handleSubmitData}>
                <div className="row g-3 d-flex justify-content-between">
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">First Name </label>
                        <input type="text" className="text-center w-50" name="firstName" placeholder='First Name'/>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Last Name </label>
                        <input type="text" className="text-center w-50" name="lastName" placeholder='Last Name'/>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">User Name</label>
                        <input type="email" className="text-center w-50" name="username" placeholder='User Name' />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Role</label>
                        <select name="role" className="text-center w-50" required>
                            <option value="" className="d-none">Please Choose</option>
                            <option value="ELP">ELP</option>
                            <option value="MLP">MLP</option>
                            <option value="ALP">ALP</option>
                            <option value="CLP">CLP</option>
                        </select>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Job Title</label>
                        <select name="jobTitile" className="text-center w-50" required>
                            <option value="" className="d-none">Please Choose</option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Tech Support All">Tech Support All</option>
                            <option value="Customer Service">Customer Service</option>
                        </select>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Phone</label>
                        <input type="tel" pattern="^\d{10}$" className="text-center w-50" name="phoneNo" placeholder='Phone Number'/>
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label >Password  </label>
                        <input className="text-center w-50" type="password" name="password" required placeholder="Password" />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Status</label>
                        <select name="status" className="text-center w-50" required>
                            <option value="" className="d-none">Please Choose</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className=" d-flex justify-content-center p-3 ">
                        <button className="btn btn-success" type="submit">Add User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddUser
