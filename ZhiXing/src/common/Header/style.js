import styled from 'styled-components';
import logopic from '../../static/LOGO.png'
export const HeaderWrapper=styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0;
`;
export const Logo=styled.div`
position:absolute;
top:0;
left:50px;
display:block;
width:70px;
height:56px;
background:url(${logopic});
background-size:contain;
 `;
export const Nav=styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
 ` 
;

export const NavItem=styled.div`
line-height:26px;
font-size:17px;
padding:15px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#CC9900
}
 ` 
;

export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})  `
&.slide-enter{
    transition:all .3s ease-out;
    }
    &.slide-enter-active{
     width:240px;
    }
    &.slide-exit{
        transition:all .3s ease-out;
    }
    
width:160px;
margin-top:9px;
margin-left:20px;
padding:0 30px 0 20px;
box-sizing:border-box;
height:38px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&.focused{
    width:240px;
};

&::placeholder{
    color:#999;
}

`;

export const SearchInfo=styled.div `
position:absolute;
left:0;
top:58px;
width:240px;
padding:0 20px;
border-radius:4px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background-color:white;

`
;
export const SearchInfoSwitch=styled.span `
float:right;
font-size:13px;
.spin{
    font-size:12px;
    margin-right:2px;
    transition:all .3s ease-in;
    transform-origin:center center;
    display:block;
    float:left;
    `;

export const SearchInfoList=styled.div `
overflow:hidden;
`


export const SearchInfoItem=styled.a `
padding:0 5px;
line-height:20px;
font-size:12px;
border:1px solid #ddd; 
color:#787878;
border-radius:3px;

float:left;
margin-right:10px;
margin-bottom:15px;
`
export const SearchInfoTitle=styled.div `
margin-top:20px;
margin-bottom:15px;
line-height:15px;
font-size:14px;
color:#969696;

` 
export const Addition=styled.div `
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button=styled.div `
float:right;
color:#CC9900;
font-size:15px;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #CC9900;
&.Write{
    background:#CC9900;
    color:white;
}
`
export const SearchWrapper=styled.div `
float:left;
position:relative;
.zomm{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
        background:gray;
        color:white;
    }
}
`