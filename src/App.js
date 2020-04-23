import React,{useState} from 'react';
import styled from 'styled-components'
import SignupDialog from './Component/SignupDialog';


const DivLeft=styled.div`


background: #05367b;
width: 50%;
height: 1000px;
float: left;
align-items:center;
justify-content:center;
display:flex;
flex-direction: column;

&:hover{
  opacity: 0.8;
}

div{
  color: white;
  font-size: 25px;
}
`;

const DivRight=styled.div`

background: #910023;

width: 50%;
height: 1000px;

float: right;

align-items:center;
justify-content:center;
display:flex;
flex-direction: column;

&:hover{
  opacity: 0.8;
}
div{
  color: white;
  font-size: 25px;
}

`;




function App() {


  const [visible, setVisible]=useState(false);

  const onClick=()=>{
     setVisible(true);
  };

  return (
    <>
    <DivLeft onClick={onClick}>
      <img src='./yonsei.png' alt="Yonsei"></img>
      <div>연세대 포털 계정</div>
    </DivLeft>
  
    <DivRight onClick={onClick}>
      <img src='./korea.png' alt="Korea"></img>
      <div>고려대 포털 계정</div>
    </DivRight>

      <SignupDialog Visible={visible}/>
    </>
  );
}

export default App;
