import React from 'react'
import { useDispatch } from 'react-redux';
import { getClinics } from '../redux/action';

const Alert = ({setActivePage,setSuccessAlertFlag,message}) => {
    let dispatch=useDispatch()
    function closeAlert()
    {
        setSuccessAlertFlag(false);
        getClinics(dispatch);
        setActivePage("")
    }
    return (
        <div>
            <div className="wrapper text-center bg-white w-50 successAlert" style={{ height: '500px', position: 'absolute', left: '25%' ,borderRadius:'20px' }}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: '90%', flexDirection: 'column' }}>
                    <i className="fa-solid fa-circle-check" style={{ color: '#21b02b', fontSize: '150px' }}></i>
                    <h1 className='mt-5' style={{textShadow:'3px 3px 5px #5cb85c'}}>{message} Successfully</h1>
                </div>
                <div className='d-flex justify-content-end mx-3'>
                    <button className='btn btn-success' onClick={closeAlert}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Alert
