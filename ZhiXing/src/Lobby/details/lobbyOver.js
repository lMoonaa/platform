import React,{PureComponent} from 'react';
import{ 
    PageWrapper
 } from '../style';
 import {connect} from 'react-redux';
 import {actionCreators} from '../store'

 class LobbyOver extends PureComponent{
    
  render(){
      const{getLobbyData}=this.props
return(
   <div>
                <PageWrapper > 
            <span className="iconfont " onClick={()=>getLobbyData(1)}>&#xe660;</span>
             <div className='pageNum' onClick={()=>getLobbyData(1)}>1</div>
             <div className='pageNum' onClick={()=>getLobbyData(2)}>2</div>
             <span className="iconfont " onClick={()=>getLobbyData(2)}>&#xe65f;</span>
             </PageWrapper>
                </div>
            )
                
        }
    }
    
    const mapState=(state)=>({
        lobbylist:state.getIn(['lobby','lobbylist']),
        page:state.getIn(['lobby','page']),
    })
    
    const mapDispatch=(dispatch)=>{
        return{
            getLobbyData(num){
            dispatch(actionCreators.getLobbyData(num))
        },
      
        }
    }

export default connect(mapState,mapDispatch)(LobbyOver);