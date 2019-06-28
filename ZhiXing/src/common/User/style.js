import styled from'styled-components';

export const LoginWrapper =styled.div `
position:absolute;
left:0;
right:0;
bottom:0px;
top:56px;
z-index:0;
background:#eee;
font-family: Georgia,Times New Roman,Times,Songti SC,serif; 
input,textarea{
     -webkit-tap-highlight-color:rgba(0,0,0,0); 
    }


`;

export const LoginBox =styled.div `
width:400px;
height:500px;
margin:40px auto;
background:#fff;
padding-top:20px;
box-shadow:0 0 8px rgba(0,0,0,.1);
`;

export const LoginTop =styled.div `
width:400px;
height:320px;
margin:20px 0 40px 0;
border-bottom:1px dotted #D0D0D0;
padding-top:20px;
`;

export const LoginBottom =styled.div `
width:400px;
height:220px;
text-align:center;
border-bottom:1px dotted #D0D0D0;
.iconfont{
font-size:35px;
padding:0 10px;
cursor:pointer;

}
`;

export const LoginTitle=styled.div `
box-sizing: border-box;
text-align:center;
margin-bottom:20px;
line-height:60px;
font-size:20px;
word-spacing:50px;

.log,.insert{
    cursor:pointer;
    height:50px;
    display:inline-block;
    margin:0 20px;
    padding-top: 15px;
    letter-spacing:5px;
}
a:hover{
    border-bottom:2px solid #CC9900
}
`
export const InputNumber=styled.div `
width:240px;
margin:0 auto;
overflow:hidden;
position:relative;
.iconfont{
position:absolute;
width:30px;
line-height:30px;
left:22px;
top:14px;

z-index:2;
}
`;

export const InputPasw=styled.div `
width:240px;
margin:0 auto;
overflow:hidden;
position:relative;
.iconfont{
position:absolute;
width:30px;
line-height:30px;
left:22px;
top:14px;

z-index:2;
`;

export const Input =styled.input `
box-sizing: border-box;
width:210px;
display:block;
height:40px;
line-height:30px;
padding:0 25px;
margin:10px auto;
border-radius:4px;

`;

export const Button =styled.div `
width:220px;
display:block;
height:40px;
line-height:40px;
color:#fff;
background:#3194d0;
border-radius:25px;
margin:20px auto;
text-align:center;
letter-spacing:5px;
cursor:pointer;
`;