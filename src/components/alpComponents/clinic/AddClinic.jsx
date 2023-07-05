import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux';
import { getClinics } from '../../../redux/action';
import Alert from '../../Alert';

const AddClinic = ({ setActivePage, activePage }) => {
    let [addFlag, setAddFlag] = useState(false);
    let dispatch = useDispatch();
    const handelFormSubmit = (e) => {
        e.preventDefault();
        let data = {};
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
        data.active = e.target.active.value;
        addClinic(data);
    }

    const addClinic = (data) => {
        fetch("http://localhost:7890/createClinic", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                response.json().then(
                    getClinics(dispatch),
                    setActivePage("")
                )
            }
        })
    }
    return (
        <>
            {
                addFlag && <><Alert setActivePage={setActivePage} setAddFlag={setAddFlag} message="Clinic Added" /></>
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
                            <input name="name" placeholder='AmxxxxxY'></input>
                        </div>
                        <div>
                            <label>Clinic Email : </label>
                            <input name="email" type={'email'} placeholder='anixxxx@gmail.com'></input>
                        </div>
                        <div>
                            <label>Clinic Phone : </label>
                            <input name="phone" placeholder='91XXXXXXX0' maxLength={10} pattern='[0-9]{10}'></input>
                        </div>
                        <div>
                            <label>Address - 1 :</label>
                            <input name="addrLine1" placeholder='Plot no,building name etc'></input>
                        </div>
                        <div>
                            <label>Address - 2 : </label>
                            <input name="addrLine2" placeholder='Landmark'></input>
                        </div>
                        <div>
                            <label>City : </label>
                            <input name="city" placeholder='Eg: Pune'></input>
                        </div>
                        <div>
                            <label>State : </label>
                            <input name="state" placeholder='Eg: Delhi'></input>
                        </div>
                        <div>
                            <label>Country : </label>
                            <input name="country" placeholder='Eg: India'></input>
                        </div>
                        <div>
                            <label>StateCode : </label>
                            <input name="stateCode" placeholder='Eg: MH'></input>
                        </div>
                        <div>
                            <label>Zipcode : </label>
                            <input name="zipcode" placeholder='43xxx1'></input>
                        </div>
                        <div>
                            <label>Active : </label>
                            {/* <input name="active" pattern='[0,1]' placeholder='Invactive-0, Active-1'></input> */}
                            <select name="active">
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div style={{ gridColumnEnd: -2, gridColumnStart: -3 }}>
                            <button className='btn btn-success'>Add Clinic</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
const mapStateToProp = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProp)(AddClinic);
// export default AddClinic
