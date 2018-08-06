
const defaultState = {
    "name" : "Affixus Systems Pvt Ltd.",
    "type" : "Unknown"
};

const UserReducer = (state = defaultState, action)=>{
    switch (action.type) {
        case "CREATE" : {
            state = {...state, "desc": "Create User"};
            break;
        }

        case "UPDATE" : {
            state = {...state, "desc": "Update User", "name": action.payload.name};
            break;
        }

        case "DELETE" : {
            state = {...state, "desc": "Delete User"};
            break;
        }
    }

    return state;
};


export default UserReducer;