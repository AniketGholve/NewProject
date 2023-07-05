// import { ADD_CLINIC } from './type'

export const getClinics = (dispatch) => {
    fetch("http://localhost:7890/getAllClinic").then((response) => {
        if (response.ok) {
            response.json().then(result => {
                dispatch({
                    type: 'GET_CLINIC',
                    payload: result
                })
            });
        }
        else {
            alert("Server Error")
        }
    })
}
export const getClinicUsers = (locationId, dispatch) => {
    fetch("http://localhost:7890/api/getUsersByLocationId/" + locationId).then((response) => {
        response.json().then(result => {
            dispatch({
                type: 'GET_CLINIC_USER',
                payload: result
            })
        })
    })
}
export const getInventoryData = (dispatch, locationId) => {
    fetch(`http://localhost:7890/getInventoryByClinic/${locationId}`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch({
                    type: 'GET_CLINIC_INVENTORY',
                    payload: result
                })
            })
        }
    })
}

export const getOnHand = (productId, locationId, dispatch) => {
    fetch(`http://localhost:7890/getSerialNumber/${productId}/${locationId}`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch({
                    type: 'GET_INVENTORY_ONHAND',
                    payload: result
                })
            })
        }
    })
}
export const getOdrderedData = (dispatch) => {
    fetch(`http://localhost:7890/getOrderingScreen`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch({
                    type: 'GET_ORDERS_DATA',
                    payload: result
                })
            })
        }
    })
}
export const changeOrderStatus = (dispatch, displayId) => {
    fetch(`http://localhost:7890/changeStatus/${displayId}`, { method: 'POST' }).then(response => {
        if (response.ok) {
            getOdrderedData(dispatch);
        }
    })
}
export const cancleOrder = (dispatch, displayId) => {
    fetch(`http://localhost:7890/cancelOrder/${displayId}`, { method: 'DELETE' }).then(response => {
        if (response.ok) {
            getOdrderedData(dispatch);
        }
    })
}
export const viewOrdersInventory = (productId, locationId, dispatch) => {
    fetch(`http://localhost:7890/getinventoryByProductId/${productId}/${locationId}`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch({
                    type: 'ORDER_INVENTORY_DATA',
                    payload: result
                })
            })
        }
    })
}
export const getCustomerData = (dispatch) => {

}

export const getEnterpriseData = (enterpriseId, dispatch) => {
    fetch(`http://localhost:7890/getByEnterpriseId/${enterpriseId}`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch(
                    {
                        type: 'GET_ENTERPRISE_DATA',
                        payload: result
                    }
                )
            })
        }
    })
}
export const getFacilityData = (enterpriseId, dispatch) => {
    fetch(`http://localhost:7890/getAllFacilityByEnterpriseId/${enterpriseId}`).then(response => {
        if (response.ok) {
            response.json().then(result => {
                dispatch(
                    {
                        type: 'GET_FACILITY_DATA',
                        payload: result
                    }
                )
            })
        }
    })
}
export const getUserData = (enterpriseId,dispatch) => {
    fetch(`http://localhost:7890/getAllUsersByEnterpriseId/${enterpriseId}`).then(response => {
        if (response.ok) {
            response.json().then(result=>{
                dispatch(
                    {
                        type:'GET_USERS_DATA',
                        payload:result
                    }
                )
            })
        }
    })
}