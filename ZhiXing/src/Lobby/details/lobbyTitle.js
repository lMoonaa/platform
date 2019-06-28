import React,{PureComponent} from 'react';
import{ 
  
    LobbyTitle,
    LobbyTitleItem,
    LobbySelect,

 } from '../style';
 import {connect} from 'react-redux';
 import {actionCreators} from '../store';
import LobbyContents from'./lobbyContent';
import LobbyOver from'./lobbyOver';


 class LobbyTitles extends PureComponent{
    toggleShow(page){
switch (page){
    case 1:
    return <LobbyContents/>;
    case 2:
    return <LobbyOver/>;
    default:
    return <LobbyContents/>
}
    }
    // optionShow(focus){
    //     switch (focus){
    //         case 1:
    //         return <LobbyContents/>;
    //         case 2:
    //         return <LobbyContents/>;
    //         default:
    //         return <LobbyContents/>
    //     }
    //         }

componentDidMount(){
    this.toggleShow(this.props.titlePage);
// this.optionShow(this.props.focus)
}
  
    render(){
        const {handleFirstClick,click1,click2,handleSecClick,handleFocus}=this.props

        return (

            <div>
                <LobbyTitle>
                    <LobbyTitleItem onClick={()=>handleFirstClick(click1)}  className={click1?"click":""}>正在竞选</LobbyTitleItem>
                    <LobbyTitleItem onClick={()=>handleSecClick(click2)}  className={click2?"click":""}>已经完成</LobbyTitleItem>
                
                <LobbySelect>
               <select className='selected'>
                   <option >全部</option>
                   <option value='1'>分类1</option>
                   <option value='2'>分类2</option>
               </select>
                 </LobbySelect>
                 </LobbyTitle>
{ this.toggleShow(this.props.titlePage)}
            </div>
            
        )
            }
            componentDidUpdate(){
              
                }
            
            
    }

const mapState=(state)=>({
    lobbylist:state.getIn(['lobby','lobbylist']),
    titlePage:state.getIn(['lobby','titlePage']),
    click1:state.getIn(['lobby','click1']),
    click2:state.getIn(['lobby','click2']),
    // firstList:state.getIn(['lobby','firstList']),
    // focus:state.getIn(['lobby','focus'])
})

const mapDispatch=(dispatch)=>{
    return{
      
    handleFirstClick(click1){
        
        dispatch(actionCreators.firstClick(click1))
    },
    handleSecClick(click2){
        dispatch(actionCreators.secClick(click2))
    },
    // handleFocus(){
    //  dispatch(actionCreators.getFirstFocus())
    // }
    }
}

export default connect(mapState,mapDispatch)(LobbyTitles);