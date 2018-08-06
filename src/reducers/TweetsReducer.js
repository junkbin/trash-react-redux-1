
const defaultState = {

};

const TweetsReducer = (state = defaultState, action)=>{
    switch(action.type){
        case "GET" : {
            state = {...state, 'method': "GET"};
            break;
        }

        case "POST" : {
            state = {...state, 'method': "POST"};
            break;
        }

        case "DELETE" : {
            state = {...state, 'method': "DELETE"};
            break;
        }
    }

    return state;
};


export default TweetsReducer;