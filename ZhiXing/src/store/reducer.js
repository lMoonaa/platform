import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer}  from '../content/home/store';
import {reducer as lobbyReducer}  from '../Lobby/store'
import {reducer as logReducer}  from '../common/User/store'

const reducer= combineReducers({
    home:homeReducer,
    lobby:lobbyReducer,
    log:logReducer
});
export default reducer;