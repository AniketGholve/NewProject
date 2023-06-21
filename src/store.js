import {legacy_createStore as createStore} from 'redux'
import {inventoryReducer} from './redux/reducer'
const store=createStore(inventoryReducer);
export default store