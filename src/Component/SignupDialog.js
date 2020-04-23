import React from 'react';
import styled from 'styled-components'

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

const DialogBlock=styled.div`

  width: 30%;
  height: 25%;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;

  position:fixed;
 

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  input{
      width: 100%;
      height: 20%;
      font-size: 25px;
      margin-top: 4%;
      border-radius: 3px;
  }

`;


const SignupDialog=({Visible, ...rest})=>{



    if(!Visible){
        return null;
    }

    return(
        <DarkBackground>
        <DialogBlock>

            <h3>포털 계정 입력</h3>
            <form action="">
           <input type="email" name="id" placeholder="ID:"></input>
           <input type='password' name="pwd" placeholder="PWD:"></input>
           <input type='submit' value="입력"/>
           </form>
        </DialogBlock>
        </DarkBackground>
    )
};


export default SignupDialog;
