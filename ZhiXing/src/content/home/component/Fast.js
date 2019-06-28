import React,{PureComponent} from 'react';
import {
    FastWrapper,
    FastContent,
    FastContentItem,
} from '../style'
import "animate.css";
import {connect} from 'react-redux';
import {actionCreators} from '../store'

class Fast extends PureComponent{

    render(){

        return (
            <div>
                 <FastWrapper>
                   <FastContent>
                       
                       {
                  this.props.newlist.map((item)=>{
                      return <FastContentItem key={item.get('id')} className={this.props.itemClick?"animated jello":""}
                       >
                          <h3 className="title">{item.get('title')}</h3>
                          <p className="money">报酬：<span className="price">{item.get('price')}￥</span></p>
                          <ul className="desc">
                                       <li>发布者：{item.get('author')}</li>
                                       <li>浏览量：{item.get('viewCount')}</li>
                                       <li>发布时间：{item.get('createTime')}</li>
                                   </ul>
                      </FastContentItem>
                      
                  })
              }
                   </FastContent>
                   </FastWrapper>
            </div>
        )
    }
   
    componentDidMount(){
        this.props.getFastData();
        
            }
        }


const mapState=(state)=>{
    return{
    newlist:state.getIn(['home','fastlist']),
    itemClick:state.getIn(['home','itemclick']),
    }
}

const mapDispatch=(dispatch)=>{
    return{
        getFastData(){
            dispatch(actionCreators.getFastData())
        },
    }
}

export default connect(mapState,mapDispatch) (Fast);