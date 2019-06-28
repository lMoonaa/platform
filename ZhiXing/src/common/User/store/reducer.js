import {fromJS} from 'immutable';
import * as constants from './constants'


const defaultState=fromJS({
 login:false,
fromData:[]
})


export default (state=defaultState,action)=>{
        switch(action.type){
           case constants.CHANGE_LOGIN:
            return state.merge({
                login:action.value,
                fromData:action.result
            });
            case constants.LOG_OUT:
                return state.set('login',action.value)
            default:
            return state ;
        }  
        
    }