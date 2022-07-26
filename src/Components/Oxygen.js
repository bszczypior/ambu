import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledInput } from "../Style/StyledInput";
import { StyledTimer } from "../Style/StyledTimer";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledRowInput } from "../Style/StyledRowInput";
import Timer from "./Timer";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import Alert from "./Alert";
import { ColumnStyle } from "../Style/ColumnStyle";
import { CheckStyled } from "../Style/CheckStyled";

const ColumnInputArea = styled.div`
width: 100%;
margin: 5% auto;

display: flex;
/* background-color: black; */
gap:40px;
flex-direction: column;
justify-content: space-around;


@media (orientation: landscape){
  padd-top:40px;
flex-direction: row;
height: 10vh;
}
`
const RowInputArea = styled.div`
width: 100%;

display: flex;
gap:15px;
flex-direction: row;
justify-content: space-around;


@media (orientation: landscape){
flex-direction: row;
}
`

export default function Oxygen(props) {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [valueC, setValueC] = useState('');

  const [newValueA, setNewValueA] = useState();
  const [newValueB, setNewValueB] = useState();

  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();

  const [activeButtonA, setActiveButtonA] = useState(true);
  const [activeButtonB, setActiveButtonB] = useState(false);

  const [visibleTimer, setVisibleTimer] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);

  const [fi, setFi] = useState({
    value: 1,
    checked: true,
  });
  const changeVisibleTimer = () => {
    setVisibleTimer(true);
   
  };
  const unVisibleTimer = () => {
    setVisibleTimer(false);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
  };

  const changeButtonA = () => {
    setActiveButtonA(true);
    setActiveButtonB(false);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
    setVisibleTimer(false)
    setNewValueA(0)
    setNewValueB(0)
  };
  const changeButtonB = () => {
    setActiveButtonA(false);
    setActiveButtonB(true);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
    setVisibleTimer(false)
    setNewValueA(0)
    setNewValueB(0)
  };
  const openAlert = ()=>{
    setVisibleAlert(true)
  }

  useEffect(() => {
    setNewValueA((valueA * valueC) / valueB);
  });
  useEffect(() => {
    setNewValueB(
      (valueA * valueC) / (valueD * (valueE / 1000)) / fi.value
    );
  });

  return (
    <>
   
      {visibleAlert ?
        <Alert close={()=>setVisibleAlert(false)}/> : ''
      }
    <StyledItemWrapper>
    <h1>Tlen</h1>
      
      <ButtonAreaStyled>
        {activeButtonA ? (
          <StyledButton primary onClick={changeButtonA}>
            Tlenoterapia Bierna
          </StyledButton>
        ) : (
          <StyledButton onClick={changeButtonA}>
            Tlenoterapia Bierna
          </StyledButton>
        )}
        {activeButtonB ? (
          <StyledButton
            primary
            onClick={changeButtonB}
          >
            Respirator
          </StyledButton>
        ) : (
          <StyledButton
            onClick={changeButtonB}
          >
            Respirator
          </StyledButton>
        )}
      </ButtonAreaStyled>
      {activeButtonB ? (
        <ButtonAreaStyled small>
          <CheckStyled>
           
          <StyledSelect
              type="checkbox"
              checked={fi.checked}
              onChange={() =>
                setFi({
                  value: 1,
                  checked: true,
                })
              }
            />
            <p>FiO2=1</p>
         

        
            <StyledSelect
              type="checkbox"
              checked={!fi.checked}
              onChange={() =>
                setFi({
                  value: 0.5,
                  checked: false,
                })
              }
            />
            <p>FiO2=0.5</p>
          
          </CheckStyled>
           
        </ButtonAreaStyled>
      ) : (
        ""
      )}
      
     

      {activeButtonB ? (
        
        <RowInputArea>
          
          <StyledInput
            xsmall
            type="number"
            value={valueD}
            placeholder="oddechy"
            onChange={(e) => setValueD(e.target.value)}
          />
          <StyledInput
          type="number"
            xsmall
            value={valueE}
            placeholder="objętość"
            onChange={(e) => setValueE(e.target.value)}
          />
        </RowInputArea>
      ) : (
        ""
      )}
<ColumnInputArea>
<StyledInput
        small
        type="number"
        value={valueA}
        placeholder="ciśnienie w butli bar/atm"
        onChange={(e) => setValueA(e.target.value)}
      />
      {activeButtonA ? (
        <StyledInput
          small
          value={valueB}
          type="number"
          placeholder="przepływ tlenu"
          onChange={(e) => setValueB(e.target.value)}
        />
      ) : (
        ""
      )}

      <StyledInput
        small
        value={valueC}
        type="number"
        placeholder="pojemność butli"
        onChange={(e) => setValueC(e.target.value)}
      />
      { visibleTimer ? '':<>
     { ( newValueA || newValueB) > 0 ?  <StyledCyrcle onClick={changeVisibleTimer}>Licz</StyledCyrcle> :  <StyledCyrcle unvisible>Licz</StyledCyrcle>}
      </>
      
      }
     
</ColumnInputArea>
      

      {visibleTimer && newValueA >0 || visibleTimer && newValueB>0 ? (
        <Timer 
          activeA={activeButtonA}
          newValueA={newValueA}
          newValueB={newValueB}
          unvisible={unVisibleTimer}
        />
      ) : (
        ""
      )}

   
    </StyledItemWrapper>
    </>
  );
}
