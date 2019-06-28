import React,{PureComponent} from 'react';
import{ 
    OderWrapper,
    OderTitle,
    OderContent,
    OderContentItem
 } from './style'
 import {connect} from 'react-redux';
 import {actionCreators} from './store';

class Oder extends PureComponent{

    render(){
        const{handleMouseEnter,handleMouseLeave,mouseIn}=this.props;
        return (
            <div>
                <OderTitle>
                    最近订单
                </OderTitle>

            <OderWrapper>
            <OderContent >
            {
                
                
                  this.props.oderlist.map((item)=>{
                      return <OderContentItem key={item.get('id')} 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="click animated">
                          <img alt='' ></img>
                          <h3 className="title">{item.get('title')}</h3>
                          <ul className="desc">
                                       <li>发布者：{item.get('author')}</li>
                                       <li>接受者：{item.get('user')}</li>
                                       <li>交易金额：
                                           <span className="price">{item.get('price')}￥</span>
                                       </li>
                                       <li>创建时间：{item.get('createTime')}</li>
                                   </ul>

                      </OderContentItem>
                      
                  })
              }
                       </OderContent>
            </OderWrapper>
            </div>
        )
        
    }

componentDidMount(){
    this.props.getOderData();
    
        }
// componentDidUpdate(){
//     console.log(this.props.oderlist)
// }
    }


const mapState=(state)=>{
return{
oderlist:state.getIn(['home','oderlist']),
mouseIn:state.getIn(['home','mouseIn'])
}
}

const mapDispatch=(dispatch)=>{
return{
    getOderData(){
        dispatch(actionCreators.getOderData())
    },
    handleMouseEnter(){
        dispatch(actionCreators.getMouseEnter())
    },
    handleMouseLeave(){
        dispatch(actionCreators.getMouseLeave())
    }
}
}

export default connect(mapState,mapDispatch) (Oder);