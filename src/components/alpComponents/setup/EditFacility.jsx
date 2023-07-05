import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const EditFacility = ({ setScreen, facilityId }) => {
    let [facilityData, setFacilityData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:7890/getFacilityById/${facilityId}`).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    setFacilityData(result)
                })
            }
        })
    }, [facilityId])
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        let data={};
        data.facilityName=e.target.facilityName.value;
        data.facilityId=e.target.facilityId.value;
        data.address=e.target.address.value;
        data.city=e.target.city.value;
        data.state=e.target.state.value;
        data.zipcode=e.target.zipcode.value;
        updateFacility(data);
    }
    const updateFacility=(data)=>{
        fetch(`http://localhost:7890/editFacility`,{
            method:"PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
    }).then(response=>{
        if(response.ok)
        {
            alert("data Updated");
            setScreen("");
        }
    })
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center headingFont">Edit Facilitiy</h2>
            <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
            <form onSubmit={handleFormSubmit}>
                <div className="row g-3 shadow mt-5 d-flex justify-content-between w-75 addfacility m-auto">
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Facility Name </label>
                        <input type="text" name="facilityName" defaultValue={facilityData.facilityName} />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Facility ID</label>
                        <input type="number" name="facilityId" disabled defaultValue={facilityData.facilityId} />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Address </label>
                        <input type="text" name="address" defaultValue={facilityData.address} />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">City:</label>
                        <input type="text" name="city" defaultValue={facilityData.city} />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">State:</label>
                        <input type="text" name="state" defaultValue={facilityData.state} />
                    </div>
                    <div className="col-auto d-flex justify-content-between w-50">
                        <label htmlFor="">Zipcode:</label>
                        <input type="text" name="zipcode" defaultValue={facilityData.zipcode} />
                    </div>
                    <div className=" d-flex justify-content-center p-3 ">
                        <button className="btn btn-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditFacility
