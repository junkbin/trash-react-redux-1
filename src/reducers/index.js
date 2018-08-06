import {combineReducers} from 'redux';

import TweetsReducer from './TweetsReducer';
import UserReducer from './UserReducer';

const refCombineReducers = combineReducers({"tweets": TweetsReducer, "user": UserReducer});

export default refCombineReducers;