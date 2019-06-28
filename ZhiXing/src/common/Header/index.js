import React ,{Component} from 'react';
import 
{
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
// import {CSSTransition} from 'react-transition-group';
// import {connect} from 'react-redux';
// import{actionCreator} from './store';
import {Link} from 'react-router-dom';
// import {actionCreators as loginActionCreators} from '../../pages/login/store'


class Header extends Component{
    
    render(){
        const{focused}=this.props;

        return(
            <HeaderWrapper>
         
                     <Nav>
                     <Link to='/'>
                     <Logo/>
                     </Link>
                     <Link to='/'>
                     <NavItem className='left active'>首页</NavItem>
                     </Link>
                     <Link to='/lobby'>
                     <NavItem className='left'>项目大厅</NavItem>
                     </Link>
                     <NavItem className='left'>项目发布</NavItem>
                    <NavItem className='left'>社区</NavItem>
                     
                     
                     <NavItem className='right'>
                     </NavItem>
                     <SearchWrapper>   
                         {/* <CSSTransition
                         in={focused}
                         timeout={300}
                         classNames="slide"
                         > */}
                      <NavSearch
                      className={focused?'focused':''}
                    //   onFocus={()=>handleInputFocus(list)}
                    //   onBlur={handleInputBlur}
                      >
                      </NavSearch>
                      {/* </CSSTransition> */}
                      <span className={focused ?'focused iconfont zoom':'iconfont zoom'}>&#xe604;</span>

                      {/* {this.getListArea()} */}
                 

                     </SearchWrapper>
                     </Nav>
                     <Addition>
     
                        
                            <Link to='/log' >
                            {/* <span className="iconfont">&#xe645;</span> */}
                            <Button className='Write'>
                            登陆
                            </Button>
                            </Link>
                         <Button>注册</Button>
                     </Addition>
                 </HeaderWrapper>
     );
     
    }
}



// const mapStateToProps =(state) =>{

//     return{
      
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//     return{
       
//     }
// }
export default Header;