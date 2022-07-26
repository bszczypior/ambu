import React from "react";
import styled,{css} from "styled-components";

export const StyledButton= styled.button`
/* margin-top: 3vh; */
font-size: 12px;
min-width: 140px;
padding: 10px 40px;

box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
background-color: #E9E9E9;
border:none;
border-radius: 15px;
color:#3E3E3E;
font-weight: bold;


${props =>
    props.primary &&
    css`
      background: #7899D4;
      color: white;
    `};
    ${props =>
    props.close &&
    css`
     width: 40%;
background-color: red;
opacity: .8;
color: white;
display: flex;
border: none;
justify-content: center;
align-items:center;
border-radius: 10px;
margin-bottom:10px;
    `};
    @media (min-width:450px) {
      font-size: 10px;
      padding: 2%;
      width: 140px;
height: 30px;

   
}

`

