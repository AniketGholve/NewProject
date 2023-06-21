const initialState={
    clinicData:[],
    clinicUserData:[]
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
        default : return state
    }
}