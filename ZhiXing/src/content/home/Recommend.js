import React,{PureComponent} from 'react';
import {

    RecTitle,
    RecTitleItem,

} from './style';
import NewPub from './component/NewPub';
import Fast from './component/Fast';
import Recom from './component/Recom';
import {connect} from 'react-redux';
import {actionCreators} from './store'

class Recommend extends PureComponent{

   togglePage(){
       const{page}=this.props
       switch(page){
           case 1:
           return <Recom />;       
           case 2:
           return <NewPub />;
           case 3:
           return <Fast />;
        default:
            return <Recom/>;
        }
   }



    render(){
        const {handleNewClick,handleRecClick,handleFastClick,click}=this.props;
        return (
            <div>
                   <RecTitle>
                       <RecTitleItem  onClick={()=>handleRecClick(click)}  className={this.props.click?"click":""}>首页推荐</RecTitleItem>
                       <RecTitleItem  onClick={()=>handleNewClick(click)} className={this.props.click?"click":""}>最新发布</RecTitleItem>
                       <RecTitleItem  onClick={()=>handleFastClick(click)} className={this.props.click?"click":""}>上升最快</RecTitleItem>
                   </RecTitle>
                   
                   {this.togglePage()}
        
                       
            </div>
        )
    }
   componentDidUpdate(){

   }
}

const mapState = (state) =>({
page:state.getIn(['home','page']),
click:state.getIn(['home','click']),

})

const mapDispatch = (dispatch) => ({
    handleRecClick(click){
       
    dispatch(actionCreators.RecClick(click))

    },
    handleNewClick(click){
   dispatch(actionCreators.NewClick(click))
    },
   
    handleFastClick(click){
        dispatch(actionCreators.FastClick(click))
    }
})

export default connect(mapState,mapDispatch)(Recommend);