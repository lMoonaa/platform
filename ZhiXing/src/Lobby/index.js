import React,{PureComponent} from 'react';
// import{ 
//     LobbyWrapper,
//     LobbyContent,
//     LobbyItemLeft,
//     LobbyItemCenter,
//     LobbyItemRight,
//     LobbyTitle,
//     LobbyTitleItem,
//     LobbySelect,
//     PageWrapper
//  } from './style';
//  import {connect} from 'react-redux';
//  import {actionCreators} from './store'
 import LobbyTitles from './details/lobbyTitle';





class Lobby extends PureComponent{
    


  
    render(){
        return(
        <div>
<LobbyTitles/>
</div>
        )
        // const {getLobbyData,getChangePage,handleFirstClick,click}=this.props

        // return (

        //     <div>
        //     <LobbyWrapper>
        //         <LobbyTitle>
        //             <LobbyTitleItem onClick={()=>handleFirstClick(click)}  className={click?"click":""}>正在竞选</LobbyTitleItem>
        //             <LobbyTitleItem>已经完成</LobbyTitleItem>
        //         </LobbyTitle>
        //         <LobbySelect>
        //        <select className='selected'>
        //            <option>全部</option>
        //            <option>分类1</option>
        //            <option>分类2</option>
        //        </select>
        //          </LobbySelect>
                
        //             { 
        //                 this.props.lobbylist.map((item)=>{
        //               return <LobbyContent key={item.get('id')}>
        //                   <div className='lobbyItem'>
        //                   <LobbyItemLeft >                   
        //              <img className='userImg' src={item.get('avatar')}></img>
        //              <p className='userName'>{item.get('author')}</p>
        //             </LobbyItemLeft>
        //             <LobbyItemCenter>
        //                 <span className='proName'>{item.get('title')}</span>
        //                 <span className='reward'>报酬:{item.get('price')}</span>
        //                 </LobbyItemCenter>
        //                 <LobbyItemRight>
        //                 <p className='proDesc'>{item.get('description')}</p>
        //                     <span className='read'>浏览量：{item.get('viewCount')}</span>
        //                     <span className='time'>发布时间：{item.get('createTime')}</span>
        //                 </LobbyItemRight>  
        //                 </div>  
        //                 </LobbyContent>                 
        //             })                 
        //         }
                
        //     </LobbyWrapper>
        //     <PageWrapper > 
        // <span className="iconfont " onClick={()=>getLobbyData(1)}>&#xe660;</span>
        //  <div className='pageNum' onClick={()=>getLobbyData(1)}>1</div>
        //  <div className='pageNum' onClick={()=>getLobbyData(2)}>2</div>
        //  <span className="iconfont " onClick={()=>getLobbyData(2)}>&#xe65f;</span>
        //  </PageWrapper>
        //     </div>
        
            }
    }

// const mapState=(state)=>({
//     lobbylist:state.getIn(['lobby','lobbylist']),
//     page:state.getIn(['lobby','page']),
//     click:state.getIn(['lobby','click'])
// })

// const mapDispatch=(dispatch)=>{
//     return{
//         getLobbyData(num){
//         dispatch(actionCreators.getLobbyData(num))
//     },
//     handleFirstClick(click){
//         dispatch(actionCreators.firstClick(click))
//     }

//     }
// }

export default Lobby;