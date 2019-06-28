import {fromJS} from 'immutable';
import * as constants from './constants'


const defaultState=fromJS({
    page:0,
    click:true,
    itemclick:true,
    recomlist:[],
    newlist:[],
    fastlist:[],
    oderlist:[],
    mouseIn:false,
   })
   
   export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.NEW_CLICK:
        return state.merge({
            page:2,
            click:true
        });
        case constants.REC_CLICK:
        return state.merge({
            page:1,
            click:true
        });
        case constants.FAST_CLICK:
        return state.merge({
            page:3,
            click:true
        });
        case constants.RECOM_DATA:
        return state.set('recomlist',fromJS(action.recomList) );
        case constants.NEW_DATA:
        return state.set('newlist',fromJS(action.newList) );
        case constants.FAST_DATA:
        return state.set('fastlist',fromJS(action.fastList) )
        case constants.ODER_DATA:
        return state.set('oderlist',fromJS(action.oderList) );
        case constants.ODER_MOUSE_ENTER:
            // switch(state.oderList.get('id')){
            // case state.oderList.id:
            // return state.set('mouseIn',true );
            // default:
            // return state
            // }
        return state.set('mouseIn',true );
        case constants.ODER_MOUSE_LEAVE:
        return state.set('mouseIn',false );
        default:
        return state ;
    }  
    
}