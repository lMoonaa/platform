import axios from 'axios';
import * as constants from './constants';

export const changeLogin=(result)=>({
type:constants.CHANGE_LOGIN,
value:true,
result
})
export const login=(account,password) =>{
    return(dispatch)=>{
        axios.get('http://114.116.77.118:8888/config/getUserList?pageSize=20&currPage=1').then(
           (res)=>{
               const result=res.data.data;
               console.log(result)
            //    if(result){
            //        dispatch(changeLogin())
            //    }else{
            //        alert('登陆失败')
          dispatch(changeLogin(result))
     }).catch(()=>{
        console.log('error');
    })
           
        
    }
}