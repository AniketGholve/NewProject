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
export const getClinicUsers = (locationId,dispatch) => {
    fetch("http://localhost:7890/api/getUsersByLocationId/" + locationId).then((response) => {
        response.json().then(result => {
            dispatch({
                type:'GET_CLINIC_USER',
                payload:result
            })
        })
    })
}