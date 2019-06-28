import styled from 'styled-components';


export const LobbyWrapper=styled.div`

margin:20px auto 25px auto;


overflow:hidden;
`; 

export const LobbyContent = styled.div `
border-radius:10px;
display:flex;
box-shadow:2px 0px 10px 10px #E8E8E8;
width:750px;
padding:0px 20px 20px 20px;
margin:20px auto;
.lobbyItem{
    width:700px;
}

`;

export const LobbyItemLeft = styled.div `
float:left;
.userImg{
    background:#FFCCCC;
    border-radius:50% 0;
    width:120px;
    height:120px;
    margin:40px 40px 20px 40px;
   
}
.userName{
    margin:23px 40px;
    text-align:center;
}
`;

export const LobbyItemRight = styled.div `

line-height:20px;
text-align:center;
.proDesc{
padding-bottom:10px;
    margin-top:30px;
    text-align:left; 

}
.time{
    float:right;
    color:#989898;
    font-size:13px;
    width:300px;
    margin-top:40px;
    line-height:40px;
}
.read{
    float:right;
    height:40px;
    color:#989898;
    font-size:13px;
    line-height:40px;
    margin-top:40px;
}

`;

export const LobbyItemCenter = styled.div `

margin:40px auto;
display:flex;
font-family:微软雅黑；
.reward{
text-align:right;
display:inline-block;
    line-height:20px;
    width:120px;
    height:20px;
    font-size:18px;
    font-family:Ink Free;

}
.proName{
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:400px;
    font-size:25px;
    font-family:微软雅黑；
}


`;

export const LobbyTitle = styled.div `

margin-top:20px;
margin-left:520px;
`;

export const LobbyTitleItem = styled.div `
display:inline-block;
margin: 20px;
font-size:30px;
padding-bottom:20px;
border-bottom:1px solid #989898;
cursor:pointer;
&.click:visited{
    background:yellow;
  
}
&.click:hover{
    border-bottom:1.5px solid #888888;
    text-shadow:rgb(77, 74, 72) 5px 5px 40px;
    }
&.click:active{
    font-size:40px;
  
}


`;

export const LobbySelect = styled.div `
overflow:hidden;
display:inline-block;
margin-bottom:-70px;

.selected{
    width:120px;
    height:30px;
    border-radius:5px;
    font-family:隶书;
}
`;

export const PageWrapper = styled.div `
height:100px;
margin-top:-10px;
left:0;
right:0;
text-align:center;
line-height:50px;
.pageNum{
    cursor:pointer;
    display:inline-block;
    width:30px;
    height:30px;
    line-height:30px;
    border-radius:50%;
    background:#D0D0D0;
    margin:0 5px;
}
.iconfont{
    cursor:pointer;
    width:20px;
    heigth:20px;
    margin:10px;
    padding:10px;
}

`;