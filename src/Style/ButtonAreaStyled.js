import React from "react";
import styled,{css} from "styled-components";

export const ButtonAreaStyled = styled.div`

width:95%;
max-width: 320px;
position: relative;
margin-top: 35px;
margin-bottom: 15px;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
padding-left: 15px;
padding-right: 15px;

label{
    position: relative;
    width: 100%;
height: 50px;
margin-top: 10px;
 display: flex;
 flex-direction: row;
 justify-content: center;
align-items: center;

   
   
   
} 
label p {
    margin-left: 20px;
    margin-right: 20px;
}
${props =>
    props.small &&
    css`
 
    margin:0px;


    `};
@media (min-width:450px) {
     width: 80%;
     font-size: 10px;
     display: flex;
     flex-direction: row;
    
    }

`