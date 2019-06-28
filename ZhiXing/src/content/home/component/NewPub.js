import React,{PureComponent} from 'react';
import {
    NewPubWrapper,
    NewContent,
    NewContentItem
} from '../style';
import "animate.css";
import {connect} from 'react-redux';
import {actionCreators} from '../store'

class NewPub extends PureComponent{

    render(){

        return (
            <div>
                 <NewPubWrapper>
                   <NewContent  >
                       
                       {
                  this.props.newlist.map((item)=>{
                      return <NewContentItem key={item.get('id')} className={this.props.itemClick?"animated jello":""}
                        >
                          <h3 className="title">{item.get('title')}</h3>
                          <p className="money">报酬：<span className="price">{item.get('price')}￥</span></p>
                          <ul className="desc">
                                       <li>发布者：{item.get('author')}</li>
                                       <li>浏览量：{item.get('viewCount')}</li>
                                       <li>发布时间：{item.get('createTime')}</li>
                                   </ul>
                      </NewContentItem>
                      
                  })
              }
                   </NewContent>
                   </NewPubWrapper>
            </div>
        )
    }
   
    componentDidMount(){
        this.props.getNewData();
        
            }
        }


const mapState=(state)=>{
    return{
    newlist:state.getIn(['home','newlist']),
    itemClick:state.getIn(['home','itemclick'])
    }
}

const mapDispatch=(dispatch)=>{
    return{
        getNewData(){
            dispatch(actionCreators.getNewData())
        },
       
    }
}

export default connect(mapState,mapDispatch) (NewPub);