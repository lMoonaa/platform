import axios from 'axios';
import * as constants from './constants';



export const showLobbyData = (result) => ({
    type: constants.LOBBY_DATA,
    result
});


export const getLobbyData = (num) => {
     if(num===1){
        return (dispatch) => {
            axios.get('http://114.116.77.118:8888/item/listByTime?pageSize=20&currPage=1')
            .then((res) => {
                const result = res.data.data
                dispatch(showLobbyData(result))
                console.log(result)
            }).catch(() => {
                console.log('error')
            })
     }}else{
        return (dispatch) => {
            axios.get('http://114.116.77.118:8888/item/listByTime?pageSize=20&currPage=2')
            .then((res) => {
                const result = res.data.data
                dispatch(showLobbyData(result))
                console.log(result)
            }).catch(() => {
                console.log('error')
            });
      }
    }
}
    
      export const firstClick = (click1) => ({
        type: constants.FIRST_CLICK,
        click1
    })

    export const secClick = (click2) => ({
        type: constants.SEC_CLICK,
        click2
    })

    export const showFirstOption = (result) => ({
        type: constants.FIRST_OPTION,
        result
    });

    export const getFirstFocus = () => {
           return (dispatch) => {
               axios.get('http://114.116.77.118:8888/item/listByCid?cid=1&pageSize=20&currPage=1')
               .then((res) => {
                   const result = res.data.data
                   dispatch(showFirstOption(result))
                   console.log(result)
               }).catch(() => {
                   console.log('error')
               })
            }
        }

    export const showSecOption = (result) => ({
        type: constants.SEC_OPTION,
        result
    });

    export const getSecFocus = () => {
        return (dispatch) => {
            axios.get('http://114.116.77.118:8888/item/listByCid?cid=1&pageSize=20&currPage=2')
            .then((res) => {
                const result = res.data.data
                dispatch(showSecOption(result))
                console.log(result)
             }).catch(() => {
                console.log('error')
            })
            }
        }
    