const attendanceReducer = (state = { attendances: [], loading: false}, action) => { 
    switch(action.type){
        case "LOADING_ATTENDANCES":
            console.log("loading attendances is called")

            return {...state,
            loading: true
        }

        case "ATTENDANCES_LOADED":
            console.log("Loaded attendances")

            return {
                ...state,
                attendances: action.payload.data,
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