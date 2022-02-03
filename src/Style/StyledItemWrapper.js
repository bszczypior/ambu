import React from "react";
import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.3em;
  }
  p {
    font-size: 1em;
    margin: 35px 0;
  }
  label {
    position: relative;
    width: 95%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  @media (min-width: 450px) {
    
    h1 {
      font-size: .8em;
    }
    p {
      font-size: 0.6rem;
      margin: 5px 0px;
    }

    label {
      position: relative;
      flex-direction: row;
      position: relative;
      width: 60%;
     height: auto;
     
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }

  @media (min-width:500px) {
     
    }
`;
