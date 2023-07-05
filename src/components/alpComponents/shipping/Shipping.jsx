import React, { useEffect, useRef, useState } from 'react'

const Shipping = () => {
    let [clinicDropdownName, setClinicDropdownName] = useState([])
    let [name, setName] = useState("")
    let [address, setAddress] = useState("")
    let [otherDetails, setOtherDetails] = useState("")
    let [locationId, setLocationId] = useState(null)
    let [orderEventData, setOrderEventData] = useState([])
    let [orderId, setOrderId] = useState(null)
    let [serialData, setSerialData] = useState([])
    let [serialId, setSerialId] = useState(null)
    let [productId, setProductId] = useState(null)
    let [commitionedData, setCommitionedData] = useState([])
    let [commitionFlag, setCommitionFlag] = useState(false)
    let orderNumber=useRef()
    // let [orderEventId, setOrderEventId] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:7890/getAllShipToId`).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    setClinicDropdownName(result)
                })
            }
        })
        if (locationId !== null) {
            fetch(`http://localhost:7890/getprocessedorderEvents/${locationId}`).then(response => {
                response.json().then(result => {
                    setOrderEventData(result)
                })
            })
        }
        if (orderId !== null && orderId !== "") {
            fetch(`http://localhost:7890/getserialbyproductId/${orderId}`).then(response => {
                if (response.ok) {
                    response.json().then(result => {
                        setSerialData(result)
                    })
                }
            })
        }
    }, [locationId, orderId])

    const orderIdFunction = (e) => {
        let value = e.target.value;
        if (value === " " || value === "") value = null;
        fetch(`http://localhost:7890/getShippingDataByShippingId/${value}`).then(response => {
            if (response.status === 200) {
                response.json().then(result => {
                    console.log(result)
                    setName(result.name)
                    setAddress(result.addrLine1 + " " + result.addrLine2)
                    setOtherDetails(result.city + ' ' + result.state + ' ' + result.zipcode)
                    setLocationId(result.locationId);
                })
            }
            else {
                setName("")
                setAddress("")
                setOtherDetails("")
                setLocationId(null)
                setOrderEventData([])
                setOrderId(null)
                setSerialId(null)
                setProductId(null)
                setCommitionFlag(false)
                setCommitionedData([])
            }
        })
    }
    const getSerialData = (e) => {
        let data = e.target.value;
        data = data.split(",");
        setSerialId(data[0]);
        setProductId(data[1]);
    }
    const changeStatusToCommition = () => {
        fetch(`http://localhost:7890/scannedShipmentDetails/${serialId}/${productId}/${orderId}`).then(response => {
            if (response.ok) {
                response.json().then(result => {
                    setCommitionedData(result)
                })
            }
        })
    }
    const shipSerial = () => {
        fetch(`http://localhost:7890/changeSerialAndOrderStatusToShipped/${orderId}`).then(response => {
            if (response.ok) {
                alert("Ordered Shipped");
                setLocationId(null)
                orderNumber.current=null
                setOrderEventData([])
                setOrderId(null)
                setSerialId(null)
                setProductId(null)
                setCommitionFlag(false)
                setCommitionedData([])
            }
        })
    }
    return (
        <>
            {
                (orderId !== null && orderId !== "") &&
                <div className="p-5 theadGreen">
                    <div className="container">
                        <div className="d-flex flex-column">
                            <label htmlFor="" className="h5 text-center">Please enter kit information</label>
                            <select className='text-center w-50 m-auto' onChange={getSerialData} id='kitNumber'>
                                {serialData.map((x, idx) => {
                                    return (
                                        <option className="text-center" key={idx} value={x.serialId + "," + x.productId}>{x.serialId}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <button onClick={() => { changeStatusToCommition(); setCommitionFlag(true) }} className="btn btn-danger">Continue</button>
                    </div>
                </div>
            }
            <div className="container mt-3">
                <div className="d-flex ">
                    <div className='w-50'>
                        <h4 className='mb-5'>Enter Details</h4>
                        <div className=" d-flex flex-column w-50 ">
                            <input onChange={orderIdFunction} list="clinicList"
                                className="inputBox mb-2" placeholder='Ship to Customer'></input>
                            <datalist id="clinicList">
                                {clinicDropdownName.map((x, idx) => {
                                    return (
                                        <option key={idx} value={x.shipToName}>{x.shipToName}</option>
                                    )
                                })}
                            </datalist>
                            <label htmlFor="" className="h5 m-0 mt-2"></label>
                            <input type="number" className='inputBox' onChange={(e) => { setOrderId(e.target.value) }} list="clinicOrderId" placeholder='Order Id' ref={orderNumber}/>
                            <datalist id="clinicOrderId">
                                {
                                    orderEventData.map((x, idx) => {
                                        return (
                                            <option key={idx}>{x.orderId}</option>
                                        )
                                    })
                                }
                            </datalist>
                        </div>
                    </div>
                    <div className="w-50">
                        <h4 className='mb-5'>Ship-To</h4>
                        <div className="form-control d-flex flex-column shipInfo">
                            <div className="d-flex justify-content-between ">
                                <label>Name</label>
                                <input type="text" className="w-75 inputBox" disabled value={name} />
                            </div>
                            <div className="d-flex justify-content-between ">
                                <label>Address</label>
                                <input type="text" className="w-75 inputBox" disabled
                                    value={address} />
                            </div>
                            <div className="d-flex justify-content-between ">
                                <label>City | State | Zip</label>
                                <input type="text" className="w-75 inputBox" disabled
                                    value={otherDetails} />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    commitionFlag !== false &&
                    <div>
                        <div>
                            <h3 className='headingFont text-center my-4'>Scanned Shipment Details</h3>
                        </div>
                        <table className='table table-striped text-center'>
                            <thead>
                                <tr>
                                    <th className="w-25">Dose</th>
                                    <th className="w-25">Quantity</th>
                                    <th className="w-25">Status</th>
                                    <th className="w-25">Batch</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    commitionedData.map((x, idx) => {
                                        return (
                                            <tr className="text-center" key={idx}>
                                                <td>{x.dose}</td>
                                                <td>{x.quantity}</td>
                                                <td>{x.status}</td>
                                                <td>{x.batch}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <div className='d-flex justify-content-end my-4'>
                            <button className='btn btn-danger px-4' onClick={() => shipSerial()}>Ship</button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Shipping
