import React, { useEffect, useState } from 'react'
import Alert from '../../Alert';

const EditClinic = ({ successFlag, setSuccessAlertFlag, locationId, setActivePage }) => {
  let [clinicDetails, setClinicData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7890/getByClinicId/" + locationId).then(response => {
      response.json().then(result => {
        console.log(result)
        setClinicData(result);
      })
    })
  }, [locationId])

  const handelFormSubmit = (e) => {
    e.preventDefault();
    let data = { ...clinicDetails };
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.phone = e.target.phone.value;
    data.addrLine1 = e.target.addrLine1.value;
    data.addrLine2 = e.target.addrLine2.value;
    data.city = e.target.city.value;
    data.state = e.target.state.value;
    data.country = e.target.country.value;
    data.stateCode = e.target.stateCode.value;
    data.zipcode = e.target.zipcode.value;
    data.locationId = e.target.locationId.value;
    data.enterpriseId = e.target.enterpriseId.value;
    fetch("http://localhost:7890/updateClinic", {
      method: "put",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        setSuccessAlertFlag(true)
      }
    })
  }
  return (
    <>
      {
        successFlag && <><Alert setActivePage={setActivePage} setSuccessAlertFlag={setSuccessAlertFlag} message="Clinic Edited" /></>
      }
      <div>
        <button className='btn btn-success mt-5 mx-5' onClick={() => setActivePage("")}><i className="fa-solid fa-arrow-left px-1"></i> Back</button>
      </div>
      <div className="bg-dark m-5 d-flex">
        <div className='w-25'>
          <img width="100%" height="100%" alt='...' src='https://th.bing.com/th/id/R.de600f6e48c6434daa895b3b1eb7073e?rik=M3SKWMPhDoFK0w&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1551601651-2a8555f1a136%3fixlib%3drb-1.2.1%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9&ehk=M%2f6wbFwaYvhjPpnUdzVHk%2fj%2bfrAt6QIgwbBnXc8jet0%3d&risl=&pid=ImgRaw&r=0'></img>
        </div>
        <div className="w-75" style={{ color: "white" }}>
          <form onSubmit={handelFormSubmit} className={'editClinicDetails'}>
            <div>
              <label>Clinic Name : </label>
              <input defaultValue={clinicDetails.name} name="name"></input>
            </div>
            <div>
              <label>Clinic Email : </label>
              <input defaultValue={clinicDetails.email} name="email"></input>
            </div>
            <div>
              <label>Clinic Phone : </label>
              <input defaultValue={clinicDetails.phone} name="phone"></input>
            </div>
            <div>
              <label>Address - 1 :</label>
              <input defaultValue={clinicDetails.addrLine1} name="addrLine1"></input>
            </div>
            <div>
              <label>Address - 2 : </label>
              <input defaultValue={clinicDetails.addrLine2} name="addrLine2"></input>
            </div>
            <div>
              <label>City : </label>
              <input defaultValue={clinicDetails.city} name="city"></input>
            </div>
            <div>
              <label>State : </label>
              <input defaultValue={clinicDetails.state} name="state"></input>
            </div>
            <div>
              <label>Country : </label>
              <input defaultValue={clinicDetails.country} name="country"></input>
            </div>
            <div>
              <label>StateCode : </label>
              <input defaultValue={clinicDetails.stateCode} name="stateCode"></input>
            </div>
            <div>
              <label>Zipcode : </label>
              <input defaultValue={clinicDetails.zipcode} name="zipcode"></input>
            </div>
            <div>
              <label>Location Id : </label>
              <input defaultValue={clinicDetails.locationId} name="locationId"></input>
            </div>
            <div>
              <label>Enterprise Id : </label>
              <input defaultValue={clinicDetails.enterpriseId} name="enterpriseId"></input>
            </div>
            <div style={{ gridColumnEnd: -2, gridColumnStart: -3 }}>
              <button className='btn btn-success'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditClinic
