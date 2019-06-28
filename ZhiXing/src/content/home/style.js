import styled from 'styled-components';
import bannerPic from '../../static/3.jpg';
import 'animate.css';

export const BannerImg=styled.div`
position:relative;
height:500px;
width:100%;
margin:30px auto;
border-bottom:1px solid #f0f0f0;
background:url(${bannerPic});
background-size:cover;
`;

export const RecommendWrapper=styled.div `
margin:5px auto;
overflow:hidden;
background:#F0F0F0;
&.click{
    
}
`;

export const RecTitle=styled.div `
height:50px;
width:500px
margin:0 auto;
text-align:center;
`;
export const RecTitleItem=styled.div `
display:inline-block;
width:80px;
font-size:20px
height:30px;
line-height:30px;
padding:10px;
cursor:pointer;
&.click:hover{
border-bottom:1.5px solid #888888;
text-shadow:rgb(77, 74, 72) 5px 5px 40px;
}

`;

export const RecContent=styled.div `
margin:20px auto;
width:1200px;
overflow:hidden;
`;

export const RecContentItem=styled.div `
float:left;
width:280px;
height:300px;
margin:20px 10px;
background:white;
border-radius:4px;

.title{
    font-size:22px;
    font-family:微软雅黑;
    font-weight:180;
    height:40px;
    margin:10px;
    padding:10px;
}
.money{
    font-size:15px;
    color:#989898;
    height:20px;
    margin:20px 10px;
    padding-top:20px;
    padding-bottom:30px;
    border-bottom:1px solid #C0C0C0;
}
.desc{
    font-size:15px;
    color:#989898;
    margin:10px;
    padding-top:5px;
    line-height:30px;
}
.price{
    color:black;
    font-size:25px;
    font-family:MV Boli;
 
 }
`;

export const OderWrapper = styled.div `
margin-top:20px;
background：white;


`;

export const OderTitle = styled.div `
font-size:30px;
font-family:微软雅黑;
text-align:center;
`;

export const OderContent = styled.div `
margin:20px auto;
width:1200px;
overflow:hidden;

`;

export const OderContentItem = styled.div `
float:left;
width:280px;
height:320px;
margin:20px 10px;
background:white;
border-radius:50px;
box-shadow:2px 2px 5px 5px #D0D0D0;
.title{
    font-size:23px;
    font-family:微软雅黑;
    font-weight:180;
    height:40px;
    margin-bottom:40px;
    padding:20px;
    text-align:center;

}

.desc{
    font-size:15px;
    color:#989898;
    margin:10px;
    padding:10px;
    line-height:40px;
}
.price{
   color:red;
   font-size:25px;
   font-family:BRUX;

}
&.click:hover{
    animation-name:tada;
}
`;

export const FooterWrapper = styled.div `
background:#CC9900;
margin:80px auto;
width:100%;
height:200px;
overflow:hidden;
`;

export const NewPubWrapper=styled.div `
margin:5px auto;
overflow:hidden;
background:#F0F0F0;
`;




export const NewContent=styled.div `
margin:20px auto;
width:1200px;
overflow:hidden;
`;

export const NewContentItem=styled.div `
float:left;
width:280px;
height:300px;
margin:20px 10px;
background:white;
border-radius:4px;

.title{
    font-size:22px;
    font-family:微软雅黑;
    font-weight:180;
    height:40px;
    margin:10px;
    padding:10px;
}
.money{
    font-size:15px;
    color:#989898;
    height:20px;
    margin:20px 10px;
    padding-top:20px;
    padding-bottom:30px;
    border-bottom:1px solid #C0C0C0;
}
.desc{
    font-size:15px;
    color:#989898;
    margin:10px;
    padding-top:5px;
    line-height:30px;
}
.price{
    color:black;
    font-size:25px;
    font-family:MV Boli;
 
 }
`;

export const FastWrapper=styled.div `
margin:5px auto;
overflow:hidden;
background:#F0F0F0;
`;

export const FastContentItem=styled.div `
float:left;
width:280px;
height:300px;
margin:20px 10px;
background:white;
border-radius:4px;

.title{
    font-size:22px;
    font-family:微软雅黑;
    font-weight:180;
    height:40px;
    margin:10px;
    padding:10px;
}
.money{
    font-size:15px;
    color:#989898;
    height:20px;
    margin:20px 10px;
    padding-top:20px;
    padding-bottom:30px;
    border-bottom:1px solid #C0C0C0;
}
.desc{
    font-size:15px;
    color:#989898;
    margin:10px;
    padding-top:5px;
    line-height:30px;
}
.price{
    color:black;
    font-size:25px;
    font-family:MV Boli;
 
 }
`;

export const FastContent=styled.div `
margin:20px auto;
width:1200px;
overflow:hidden;
`;