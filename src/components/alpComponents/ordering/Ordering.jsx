import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { cancleOrder, changeOrderStatus, getOdrderedData, viewOrdersInventory } from '../../../redux/action'

const Ordering = ({ ordersData, orderInventoryData }) => {
    let dispatch = useDispatch()
    useEffect(() => {
        getOdrderedData(dispatch)
    }, [dispatch])
    return (
        <div>
            <h1 className='text-center mb-4 headingFont'>Orders</h1>
            <div className="container">
                <div className="container d-flex justify-content-center mt-5">
                    <table className="table table-striped text-center">
                        <thead className="orderingThead">
                            <tr>
                                <th>Date and time</th>
                                <th>Order Id</th>
                                <th>PO Number</th>
                                <th>Ship-to-ID</th>
                                <th>Bill-to Name</th>
                                <th>Status</th>
                                <th className="bg-juniper">ITONE</th>
                                <th className="bg-juniper">FLEXON</th>
                                <th className="bg-juniper">COSEMELITE</th>
                                <th className="bg-juniper">DOSE</th>
                                <th>Process</th>
                                <th>View Inventory</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody className='orderingTbody'>
                            {
                                ordersData.map((x, idx) => {
                                    return (
                                        <tr>
                                            <td>{x.activityDate}</td>
                                            <td>{x.displayId}</td>
                                            <td>{x.poNumber}</td>
                                            <td>{x.shiptoId}</td>
                                            <td>{x.shiptoName}</td>
                                            <td>{x.eventDesc}</td>
                                            <td className='bg-salt'>{x.quantityMap['itone']}</td>
                                            <td className='bg-salt'>{x.quantityMap['flexon']}</td>
                                            <td className='bg-salt'>{x.quantityMap['Cosmelite']}</td>
                                            <td className='bg-salt'>{x.quantityMap['itone'] + x.quantityMap['flexon'] + x.quantityMap['Cosmelite']}</td>
                                            <td><i onClick={() => { changeOrderStatus(dispatch, x.displayId); }} className={x.eventDesc !== 'Submitted' ? 'disabled fa-regular fa-circle-check link-danger' : 'fa-regular fa-circle-check link-danger'}></i></td>
                                            <td><i onClick={() => { viewOrdersInventory(x.productId, x.locationId, dispatch) }} data-bs-toggle="modal" data-bs-target="#orderInventoryData" className="fa-sharp fa-solid fa-box link-danger"></i></td>
                                            <td><i onClick={() => cancleOrder(dispatch, x.displayId)} className={x.eventDesc === 'Cancelled' ? "disabled fa-regular fa-circle-xmark link-danger" : "fa-regular fa-circle-xmark link-danger"}></i></td>
                                        </tr>
                                    )
                                })
                            }
                            {/*
                                <td className="p-3"><a href="" className="btn" ng-className="{'disabled':ordersData.eventDesc!='Submitted'}"><i className="fa-regular fa-circle-check link-danger"
                                    ng-click="changeOrderStatus(x.displayId)"></i></a></td>
                                <td className="p-4"><a data-bs-toggle="modal" data-bs-target="#orderInventoryData"><i className="fa-sharp fa-solid fa-box link-danger"
                                    ng-click="viewInventory(x.productId,x.locationId)"></i></a></td>
                                <td className="p-3"><a href="" className="btn" ng-className="{'disabled':x.eventDesc=='Cancelled'}"><i className="fa-regular fa-circle-xmark link-danger"
                                    ng-click="cancleOrder(x.displayId)"></i></a></td>
                            */}
                        </tbody>
                    </table>
                    <div className="modal fade" id="orderInventoryData" tabindex="-1" aria-labelledby="orderInventoryDataLable" aria-hidden="true">
                        <div className="modal-dialog w-25">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="orderInventoryDataLable">Order Inventory</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <table id="orderInventory" className="table table-striped table-bordered text-center ">
                                        <tr>
                                            <th className="px-3">Product Name</th>
                                            <th className="px-3">On Hand</th>
                                            <th className="px-3">Expired</th>
                                        </tr>
                                        {
                                            orderInventoryData.map((x, idx) => {
                                                return (
                                                    <tr>
                                                        <td>{x.productName}</td>
                                                        <td>{x.onHand}</td>
                                                        <td>{x.expiredQty}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProp = (state) => {
    return {
        ...state,
        ordersData: state.ordersData
    }
}
export default connect(mapStateToProp)(Ordering)
