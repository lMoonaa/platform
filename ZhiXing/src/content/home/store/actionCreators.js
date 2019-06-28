import axios from 'axios';
import * as constants from './constants';

export const NewClick = (click) => ({
    type: constants.NEW_CLICK,
    click
})

export const RecClick = (click) => ({
    type: constants.REC_CLICK,
    click
})


export const FastClick = (click) => ({
    type: constants.FAST_CLICK,
    click
})

export const showRecomData = (result) => ({
    type: constants.RECOM_DATA,
    recomList: result
});

export const getRecomData = () => {
    return (dispatch) => {
        axios.get('http://114.116.77.118:8888/item/getHotItems?size=8').then((res) => {
            const result = res.data.data
            dispatch(showRecomData(result))
        }).catch(() => {
            console.log('error')
        });
    }
}

export const showNewData = (result) => ({
    type: constants.NEW_DATA,
    newList: result
});

export const getNewData = () => {
    return (dispatch) => {
        axios.get('http://114.116.77.118:8888/item/listByTime?pageSize=8&currPage=1').then((res) => {
            const result = res.data.data
            console.log(result)
            dispatch(showNewData(result))
        }).catch(() => {
            console.log('error')
        });
    }
}

export const showFastData = (result) => ({
    type: constants.FAST_DATA,
    fastList: result
});

export const getFastData = () => {
    return (dispatch) => {
        axios.get('http://114.116.77.118:8888/item/getHotItems?size=8').then((res) => {
            const result = res.data.data
            console.log(result)
            dispatch(showFastData(result))
        }).catch(() => {
            console.log('error')
        });
    }
}

export const showOderData = (result) => ({
    type: constants.ODER_DATA,
    oderList: result
});

export const getOderData = () => {
    return (dispatch) => {
        axios.get('http://114.116.77.118:8888/item/getHotItems?size=8').then((res) => {
            const result = res.data.data
            console.log(result)
            dispatch(showOderData(result))
        }).catch(() => {
            console.log('error')
        });
    }
};

export const getMouseEnter=()=>({
    type:constants.ODER_MOUSE_ENTER
});

export const getMouseLeave=()=>({
    type:constants.ODER_MOUSE_LEAVE
})
