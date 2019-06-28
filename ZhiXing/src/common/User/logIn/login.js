import React,{PureComponent} from 'react';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
    LoginTitle,
    InputNumber,
    InputPasw,
    LoginTop,
    LoginBottom
} from'../style';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class Login extends PureComponent{

    render(){
const {loginStatus} = this.props;
if(!loginStatus){
        return (
            <LoginWrapper>
                <LoginBox>
                    <LoginTop>
                    <LoginTitle>
                        <a className='log'>登陆</a>·
                        <a className='insert'>注册</a>
                    </LoginTitle>
                    <InputNumber>
                   <Input placeholder="账号"  ref={(input)=>{this.account=input}}/>
                   <span className="iconfont">&#xe609;</span>
                   </InputNumber>
                   <InputPasw>
                   <Input placeholder="密码" type='password' ref={(input)=>{this.password=input}} />
                   <span className="iconfont">&#xe608;</span>
                   </InputPasw>
                   <Button onClick={()=>this.props.login(this.account,this.password)}>登陆</Button>
                   </LoginTop>
                   <LoginBottom>
                   <span className="iconfont">&#xe606;</span>
                   <span className="iconfont">&#xe607;</span>
                   </LoginBottom>
                </LoginBox>
            </LoginWrapper>
            )
        }else{
            return <Redirect to='/'></Redirect>
        }
        
    }
    componentDidMount(){
}
}

const mapState=(state)=>({
   loginStatus:state.getIn(['login','login'])
})

const mapDispatch=(dispatch) => ({
   login(accountElem,passwordElem){
       dispatch(actionCreators.login(accountElem.value,passwordElem.value))
   }
})
export default connect(mapState,mapDispatch)(Login);