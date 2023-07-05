const initialState={
    clinicData:[],
    clinicUserData:[],
    clinicInventoryData:[],
    inventoryOnHand:[],
    ordersData:[],
    orderInventoryData:[],
    enterpriseData:[],
    facilityData:[],
    userData:[]
}
export const inventoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_CLINIC':return{
            ...state,
            clinicData:action.payload
        }
        case 'GET_CLINIC_USER':return{
            ...state,
            clinicUserData:action.payload
        }
        case 'GET_CLINIC_INVENTORY':{
            return {
                ...state,
                clinicInventoryData:action.payload
            }
        }
        case 'GET_INVENTORY_ONHAND':{
            return{
                ...state,
                inventoryOnHand:action.payload
            }
        }
        case 'GET_ORDERS_DATA':{
            return{
                ...state,
                ordersData:action.payload
            }
        }
        case 'ORDER_INVENTORY_DATA':{
            return{
                ...state,
                orderInventoryData:action.payload
            }
        }
        case 'GET_ENTERPRISE_DATA':{
            return{
                ...state,
                enterpriseData:action.payload
            }
        }
        case 'GET_FACILITY_DATA':{
            return{
                ...state,
                facilityData:action.payload
            }
        }
        case 'GET_USERS_DATA':{
            return{
                ...state,
                userData:action.payload
            }
        }
        default : return state
    }
}