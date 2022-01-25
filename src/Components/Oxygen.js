import React, { useEffect, useState } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledInput } from "../Style/StyledInput";
import { StyledTimer } from "../Style/StyledTimer";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledRowInput } from "../Style/StyledRowInput";
import Timer from "./Timer";
import { StyledCyrcle } from "../Style/StyledCyrcle";

export default function Oxygen(props) {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();

  const [newValueA, setNewValueA] = useState();
  const [newValueB, setNewValueB] = useState();

  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();

  const [activeButtonA, setActiveButtonA] = useState(true);
  const [activeButtonB, setActiveButtonB] = useState(false);

  const [visibleTimer, setVisibleTimer] = useState(false);

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
  };

  useEffect(() => {
    setNewValueA((valueA * valueC) / valueB / 60);
  });
  useEffect(() => {
    setNewValueB(
      (valueA * valueC) / (valueD * (valueE / 1000)) / fi.value / 60
    );
  });

  return (
    <StyledItemWrapper>
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
            onClick={() => setActiveButtonB(true) & setActiveButtonA(false)}
          >
            Respirator
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() => setActiveButtonB(true) & setActiveButtonA(false)}
          >
            Respirator
          </StyledButton>
        )}
      </ButtonAreaStyled>
      {activeButtonB ? (
        <ButtonAreaStyled small>
          <label>
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
          </label>

          <label>
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
          </label>
        </ButtonAreaStyled>
      ) : (
        ""
      )}
      <p>Oddechy</p>

      {activeButtonB ? (
        <StyledRowInput>
          <StyledInput
            xsmall
            value={valueD}
            placeholder="ilość"
            onChange={(e) => setValueD(e.target.value)}
          />
          <StyledInput
            xsmall
            value={valueE}
            placeholder="objętość"
            onChange={(e) => setValueE(e.target.value)}
          />
        </StyledRowInput>
      ) : (
        ""
      )}

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
        placeholder="pojemność butli"
        onChange={(e) => setValueC(e.target.value)}
      />

      {visibleTimer ? (
        <Timer
          activeA={activeButtonA}
          newValueA={newValueA}
          newValueB={newValueB}
        />
      ) : (
        ""
      )}

      {visibleTimer ? (
        <StyledCyrcle onClick={unVisibleTimer}>x</StyledCyrcle>
      ) : (
        <StyledCyrcle onClick={changeVisibleTimer}>=</StyledCyrcle>
      )}
    </StyledItemWrapper>
  );
}