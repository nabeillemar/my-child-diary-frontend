const attendanceReducer = (state = { attendances: [], loading: false}, action) => { // this takes in the current state and the action which is the case 
    switch(action.type){
        case "LOADING_ATTENDANCES":
            console.log("loading attendances is called")
           //debugger
            return {...state,
            loading: true
        }

        case "ATTENDANCES_LOADED":
            console.log("Loaded attendances")
            //debugger
            return {
                ...state,
                attendances: action.payload.data, // the payload is an array here 
                loading: false 
            }


        case "ADDING_ATTENDANCES":
            debugger
                return {
                    ...state,
                    loading: true
    
            }
    
        case "ATTENDANCES_ADDED":
            debugger
                return {
                    ...state,
                    attendances: [...state.attendances, action.payload.data],
                    loading: false 
    
    
            }
            case "DELETING_CHILDREN":
                return {
                     ...state,
                     loading: true
        
                }
        
            case "ATTENDANCES_DELETED":
                //debugger
                return {
                    ...state,
                    attendances: [...state.attendances.filter(attendance => `${attendance.id}` !== action.payload)],
                    loading: false 
        
        
                }



        default:
            return state
    }
}

export default attendanceReducer