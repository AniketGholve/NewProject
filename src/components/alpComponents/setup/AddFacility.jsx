import React from 'react'
import { Link } from 'react-router-dom'

const AddFacility = ({ setScreen }) => {
    const handleSubmitForm = (e)=>{
        e.preventDefault();
       let data={};
       data.facilityName=e.target.facilityName.value;
       data.address=e.target.address.value;
       data.city=e.target.city.value;
       data.state=e.target.state.value;
       data.zipcode=e.target.zipcode.value;
       addFacility(data);
    }
    const addFacility=(data)=>{
        fetch(`http://localhost:7890/addFacility/2`,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response=>{
            if(response.ok)
            {
                alert("data Added");
                setScreen("")
            }
        })
    }
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center headingFont">Add Facility</h2>
                <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
                <form onSubmit={handleSubmitForm}>
                    <div className="row g-3 mt-5 shadow d-flex w-75 m-auto">
                        <div className="col-auto d-flex justify-content-between w-50">
                            <label htmlFor="">Facility Name </label>
                            <input type="text" className="inputeditCorporate" name="facilityName" />
                        </div>
                        <div className="col-auto d-flex justify-content-between w-50">
                            <label htmlFor="">Address </label>
                            <input type="text" className="inputeditCorporate" name="address" />
                        </div>
                        <div className="col-auto d-flex justify-content-between w-50">
                            <label htmlFor="">City</label>
                            <input type="text" className="inputeditCorporate" name="city" />
                        </div>
                        <div className="col-auto d-flex justify-content-between w-50">
                            <label htmlFor="">State</label>
                            <input type="text" className="inputeditCorporate" name="state" />
                        </div>
                        <div className="col-auto d-flex justify-content-between w-50">
                            <label htmlFor="">Zipcode</label>
                            <input type="text" className="inputeditCorporate" name="zipcode" />
                        </div>
                        <div className=" d-flex justify-content-center p-3 ">
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddFacility
