import React from 'react'
import { useDispatch } from 'react-redux';
import { getClinicUsers } from '../../../redux/action';
import Alert from '../../Alert';

const AddClinicUser = ({ setInternalActivePage, successFlag, setSuccessAlertFlag, locationId }) => {
    let dispatch = useDispatch();
    const addClinicUser = (e) => {
        e.preventDefault();
        let data = {};
        data.firstName = e.target.firstName.value;
        data.lastName = e.target.lastName.value;
        data.middleName = e.target.middleName.value;
        data.userLogin = e.target.userLogin.value;
        data.email = e.target.email.value;
        data.jobTitle = e.target.jobTitle.value;
        data.workPhone = e.target.workPhone.value;
        data.mobilePhone = e.target.mobilePhone.value;
        data.password = e.target.password.value;
        data.defaultLocationId = locationId;
        data.gender = e.target.gender.value;
        fetch("http://localhost:7890/api/addUsers", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                // setSuccessAlertFlag(true)
                alert("data added")
                getClinicUsers(locationId, dispatch);
                setInternalActivePage("viewClinic");
            }
        })
    }
    return (
        <>
            {
                successFlag && <><Alert setInternalActivePage={setInternalActivePage} setSuccessAlertFlag={setSuccessAlertFlag} message="User Added" /></>
            }
            <div>
                <button className='btn btn-success mt-5 mx-5' onClick={() => setInternalActivePage("viewClinic")}><i className="fa-solid fa-arrow-left px-1"></i> Back</button>
            </div>
            <h1 className='text-center headingFont'>Add Clinic User</h1>
            <div className='d-grid bg-dark m-5 text-white' >
                <form className="addClinicUser" onSubmit={addClinicUser}>
                    <div>
                        <label htmlFor="firstName"> First Name </label>
                        <input id='firstName' type="text" name="firstName" required />
                    </div>
                    <div>
                        <label htmlFor="lastName"> Last Name </label>
                        <input id='lastName' type="text" name="lastName" required />
                    </div>
                    <div>
                        <label htmlFor="middleName"> Middle Name </label>
                        <input id='middleName' type="text" name="middleName" required />
                    </div>
                    <div>
                        <label htmlFor="userLogin"> User Name </label>
                        <input id='userLogin' type="text" name="userLogin" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="jobTitle">Job Title</label>
                        <input id="jobTitle" type="text" name="jobTitle" required />
                    </div>
                    <div>
                        <label htmlFor="workNumber">Work Number</label>
                        <input id='workNumber' type="text" name="workPhone" required />
                    </div>
                    <div>
                        <label htmlFor="mNumber">Mobile Number</label>
                        <input id='mNumber' type="text" name="mobilePhone" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" required />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input id="gender" type="text" name="gender" required />
                    </div>
                    <div style={{ gridColumn: '3/4' }}>
                        <button className='btn btn-success'>Add User</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddClinicUser
