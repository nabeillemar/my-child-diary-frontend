// where you combine your reducers 
import { combineReducers } from "redux";
import childReducer from './childReducer'
import attendanceReducer from './attendanceReducer'



const rootReducer = combineReducers({
    childReducer,
    attendanceReducer

})

export default rootReducer
