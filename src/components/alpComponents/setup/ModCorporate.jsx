import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getEnterpriseData } from '../../../redux/action'
import { Link } from 'react-router-dom'

const ModCorporate = ({ enterpriseId, enterpriseData, setScreen }) => {
    let dispatch = useDispatch()
    useEffect(() => {
        getEnterpriseData(enterpriseId, dispatch)
    }, [dispatch, enterpriseId])
    const handelSubmitData = (e) => {
        e.preventDefault()
        let data = {};
        data.name = e.target.name.value;
        data.zipcode = e.target.zipcode.value;
        data.enterpriseId = e.target.enterpriseId.value;
        data.gln = e.target.gln.value;
        data.city = e.target.city.value;
        data.phone = e.target.phone.value;
        data.state = e.target.state.value;
        data.email = e.target.email.value;
        data.addrLink1 = e.target.addrLink1.value;
        data.addrLink2 = e.target.addrLink2.value;
        fetch(`http://localhost:7890/updateEnterprise`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                alert('data added')
                setScreen("")
            }
        })
    }
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center headingFont">Modify Corporate</h2>
                <Link className="text-danger" onClick={() => { setScreen("") }}><i className="fa-solid fa-arrow-left px-2"></i>Back to Corporate</Link>
                <form onSubmit={handelSubmitData}>
                    <div className=" d-grid m-auto w-75 mt-5 shadow p-3">
                        <div className="row p-2">
                            <label htmlFor="" className='col-3'>Corporate Name</label>
                            <input type="text" className="col-3 inputBox" name='name' defaultValue={enterpriseData.name} />
                            <label htmlFor="" className='col-3'>Zipcode</label>
                            <input type="text" className="col-3 inputBox" name='zipcode' defaultValue={enterpriseData.zipcode} />
                        </div>
                        <div className="row p-2">
                            <label htmlFor="" className='col-3'>Corporate Number</label>
                            <input type="text" className="col-3 inputBox" name='enterpriseId' defaultValue={enterpriseData.enterpriseId} />
                            <label htmlFor="" className='col-3'>GLN</label>
                            <input type="text" className="col-3 inputBox" name='gln' defaultValue={enterpriseData.gln} />
                        </div>
                        <div className="row p-2">
                            <label htmlFor="" className='col-3'>City</label>
                            <input type="text" className="col-3 inputBox" name='city' defaultValue={enterpriseData.city} />
                            <label htmlFor="" className='col-3'>Phone</label>
                            <input type="text" className="col-3 inputBox" name='phone' defaultValue={enterpriseData.phone} />
                        </div>
                        <div className="row p-2">
                            <label htmlFor="" className='col-3'>State</label>
                            <input type="Text" className="col-3 inputBox" name='state' defaultValue={enterpriseData.state} />
                            <label htmlFor="" className='col-3'>Email</label>
                            <input type="email" className="col-3 inputBox" name='email' defaultValue={enterpriseData.email} />
                        </div>
                        <div className="row p-2">
                            <label htmlFor="" className='col-3'>Address Line 1</label>
                            <input className="col-3 inputBox" type="text" name='addrLink1' defaultValue={enterpriseData.addrLink1} />
                            <label htmlFor="" className='col-3'>Address Line 2</label>
                            <input className="col-3 inputBox" type="text" name='addrLink2' defaultValue={enterpriseData.addrLink2} />
                        </div>
                        <div className=" d-flex justify-content-center mt-5 mb-3 ">
                            <button className="btn btn-success">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        ...state,
        enterpriseData: state.enterpriseData,
    }
}
export default connect(mapStateToProps)(ModCorporate);
