import React, { useEffect, useState } from 'react'

const ViewClinicUsers = ({ setInternalActivePage, userId }) => {
    let [clinicUserData, setClinicUserData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:7890/api/getUserByUserId/${userId}`).then((response) => {
            response.json().then(result => {
                setClinicUserData(result);
            })
        })
    }, [userId])
    return (
        <>
            <div>
                <button className='btn btn-success mt-5 mx-5' onClick={() => setInternalActivePage("viewClinic")}><i className="fa-solid fa-arrow-left px-1"></i> Back</button>
            </div>
            <div className="bg-dark m-5 d-flex">
                <div className='w-25'>

                    {clinicUserData.gender === 'M' ? <img src="https://static.vecteezy.com/system/resources/previews/004/492/559/original/real-people-portraits-hand-drawn-flat-style-design-concept-illustration-of-men-male-faces-and-shoulders-avatars-flat-style-icons-set-modern-beautiful-avatar-of-man-vector.jpg" alt="" className="w-100" />
                        : <img className="w-100" src='https://static.vecteezy.com/system/resources/previews/004/899/833/original/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg' alt=''></img>}
                </div>
                <div className="w-75 clinicDetails" style={{ color: "white" }}>
                    <div>
                        <p>Name : </p>
                        <p>{clinicUserData.firstName + " " + clinicUserData.lastName}</p>
                    </div>
                    <div>
                        <p>Email : </p>
                        <p>{clinicUserData.email}</p>
                    </div>
                    <div>
                        <p>Phone Number : </p>
                        <p>{clinicUserData.mobilePhone}</p>
                    </div>
                    <div>
                        <p> Job Title : </p>
                        <p>{clinicUserData.jobTitle}</p>
                    </div>
                    <div>
                        <p>Role : </p>
                        <p>{clinicUserData.role}</p>
                    </div>
                    <div>
                        <p>User Name : </p>
                        <p>{clinicUserData.userLogin}</p>
                    </div>
                    <div>
                        <p>Work Number : </p>
                        <p>{clinicUserData.workPhone}</p>
                    </div>
                    <div>
                        <p>User Id : </p>
                        <p>{clinicUserData.userId}</p>
                    </div>
                    <div>
                        <p>External Id : </p>
                        <p>{clinicUserData.externalId}</p>
                    </div>
                    <div>
                        <p>Location Id : </p>
                        <p>{clinicUserData.defaultLocationId}</p>
                    </div>
                    <div>
                        <p>Enterprise Id : </p>
                        <p>{clinicUserData.enterpriseId}</p>
                    </div>
                    <div>
                        <p>Gender</p>
                        <p>{clinicUserData.gender}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewClinicUsers
