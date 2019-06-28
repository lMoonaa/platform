import React,{PureComponent} from 'react';
import {
    RecommendWrapper,
    RecContent,
    RecContentItem,
} from '../style'
import "animate.css";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {connect} from 'react-redux';
import {actionCreators} from '../store'
class Recom extends PureComponent{

   
    render(){
        return (
<RecommendWrapper>

                             
                           <RecContent>
                           {
                  this.props.recomlist.map((item)=>{
                      return <RecContentItem key={item.get('id')} 
                       className={this.props.itemClick?"animated jello":""} >
                          <h3 className="title">{item.get('title')}</h3>
                          <p className="money">报酬：<span className="price">{item.get('price')}￥</span></p>
                          <ul className="desc">
                                       <li>发布者：{item.get('author')}</li>
                                       <li>浏览量：{item.get('viewCount')}</li>
                                       <li>发布时间：{item.get('createTime')}</li>
                                   </ul>
                      </RecContentItem>
                      
                  })
              }
                              </RecContent>
                           
                       </RecommendWrapper>
                       
              
        )}
    
    componentDidMount(){
this.props.getRecomData();

    }
}

const mapState=(state)=>({
    
        recomlist:state.getIn(['home','recomlist']),
        itemClick:state.getIn(['home','itemclick'])
    
})

const mapDispatch=(dispatch)=>{
    return{
        getRecomData(){
            dispatch(actionCreators.getRecomData())
        }
    }
}

export default connect(mapState,mapDispatch) (Recom);