import {fromJS} from 'immutable';
import * as constants from './constants'


const defaultState=fromJS({
lobbylist:[],
page:1,
click1:false,
click2:false,
titlePage:1,
firstList:[],
secList:[],
focus:0
   })
   
   export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.LOBBY_DATA:
              return state.merge({
                  lobbylist:fromJS(action.result)
                })
        case constants.FIRST_CLICK:
                return state.merge({
                  click1:true,
                  titlePage:1
                          })
        case constants.SEC_CLICK:
                return state.merge({
                  click2:true,
                  titlePage:2
                          })
        case constants.FIRST_OPTION:
                return state.merge({
                  lobbylist:action.result,
                  focus:1
                          })
        case constants.SEC_OPTION:
                return state.merge({
                  lobbylist:action.result,
                  focus:2
                          })
              
              
        default:
        return state ;
    }  
    
}