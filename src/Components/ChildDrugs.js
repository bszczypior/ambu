import React, { useState,useEffect } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { CheckStyled } from "../Style/CheckStyled";
import { StyledButton } from "../Style/StyledButton";
import { StyledDrugArea } from "../Style/StyledDrugArea";
import { StyledDrugItem } from "../Style/StyledDrugItem";
import { StyledInput } from "../Style/StyledInput";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledRowInput } from "../Style/StyledRowInput";

export default function ChildDrugs() {
  const [weightMode, setWeightMode] = useState(true);
  const [ageMode, setAgeMode] = useState(false);

  const [adrenalinaOpen, setAdrenalinaOpen] = useState(false);
  const [atropinaOpen, setAtropinaOpen] = useState(false);
  const [amiodaronOpen, setAmiodaronOpen] = useState(false);
  const [adenozynaOpen, setAdenozynaOpen] = useState(false);
  const [hydrocortyzonOpen, setHydrocortyzonOpen] =useState(false);
  const [morfinaOpen, setMorfinaOpen] =useState(false);
  const [fentanylOpen, setFentanylOpen] =useState(false);
  const [ketaminaOpen, setKetaminaOpen] =useState(false);
  const [relaniumOpen, setRelaniumOpen] =useState(false);


  const [weighValue, setWeightValue] = useState('');
  const [ageValue, setAgeValue] = useState('')
  const [adrenalinaA, setAdrenalinaA] = useState(true);
  const [adrenalinaB, setAdrenalinaB] = useState(false);
  const [adrenalinaC, setAdrenalinaC] = useState(false);
  const [adrenalinaD, setAdrenalinaD] = useState(false);

  const [final,setFinal] = useState('')

  useEffect(() => {
  setFinal((parseInt(ageValue)*3)+7)
  });

  const changeWeightMode = (e) => {
    setWeightMode(true);
    setAgeMode(false);
    setWeightValue('');
    setAgeValue('');
  };
  const changeAgeMode = (e) => {
    setWeightMode(false);
    setAgeMode(true);
    setWeightValue('');
    setAgeValue('');
  };

  const openAdrenalina = () => {
    setAdrenalinaOpen(true);
  };
  const openAtropina = () => {
    setAtropinaOpen(true);
  };
  const openAmiodaron = () => {
    setAmiodaronOpen(true);
  };
  const openAdenozyna = () => {
    setAdenozynaOpen(true);
  };
  const openHydrocortyzon = () => {
    setHydrocortyzonOpen(true);
  };

  const openMorfina = () => {
    setMorfinaOpen(true);
  };
  const openKetamina = () => {
    setKetaminaOpen(true);
  };

  const openFentanyl = () => {
    setFentanylOpen(true);
  };
  const openRelanium = () => {
    setRelaniumOpen(true);
  };
  const changeAdrenalinaA = () => {
    setAdrenalinaA(true);
    setAdrenalinaB(false);
    setAdrenalinaC(false);
    setAdrenalinaD(false);
  };

  const changeAdrenalinaB = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(true);
    setAdrenalinaC(false);
    setAdrenalinaD(false);
  };
  const changeAdrenalinaC = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(false);
    setAdrenalinaC(true);
    setAdrenalinaD(false);
  };
  const changeAdrenalinaD = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(false);
    setAdrenalinaC(false);
    setAdrenalinaD(true);
  };

  return (
    <StyledItemWrapper>
      <h1>Dawki leków dla dzieci</h1>
      <ButtonAreaStyled>
        {weightMode ? (
          <StyledButton primary onClick={changeWeightMode}>
            Waga
          </StyledButton>
        ) : (
          <StyledButton onClick={changeWeightMode}>Waga</StyledButton>
        )}
        {ageMode ? (
          <StyledButton primary onClick={changeAgeMode}>
            Wiek
          </StyledButton>
        ) : (
          <StyledButton onClick={changeAgeMode}>Wiek</StyledButton>
        )}
      </ButtonAreaStyled>
      {weightMode ? (
        <StyledInput
        value={weighValue}
          placeholder="waga dziecka"
          onChange={(e) => setWeightValue(e.target.value)}
        />
      ) : (
        <StyledInput  type="number" value={ageValue} placeholder="wiek dziecka w latach" onChange={(e) => setAgeValue(e.target.value)} />
      )}

      <StyledDrugItem yellow onClick={openAdrenalina}>
        Adrenalina
      </StyledDrugItem>
      {adrenalinaOpen ? (
        <StyledDrugItem full>
          <ButtonAreaStyled>
            {adrenalinaA ? (
              <StyledButton primary onClick={changeAdrenalinaA}>
                NZK
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaA}>NZK</StyledButton>
            )}
            {adrenalinaB ? (
              <StyledButton primary onClick={changeAdrenalinaB}>
                Anafilaksja
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaB}>
                Anafilaksja
              </StyledButton>
            )}
            {adrenalinaC ? (
              <StyledButton primary onClick={changeAdrenalinaC}>
                Zapalenie krtani
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaC}>
                Zapalenie krtani
              </StyledButton>
            )}
            {adrenalinaD ? (
              <StyledButton primary onClick={changeAdrenalinaD}>
                Astma
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaD}>Astma</StyledButton>
            )}
          </ButtonAreaStyled>
{ weighValue ||ageValue >0 && ageValue<18 ?
          <StyledDrugArea>
            {adrenalinaA ? (
              <>
                <h1>Zatrzymanie krążenia</h1>
                <p>Dawka: {weightMode ? (weighValue * 0.01).toFixed(2) :  (final*0.01).toFixed(2)} mg</p>
                <p>
                  1 mg Adrenaliny rozcieńcz w 10 ml 0.9% NaCl. Podaj{" "}
                  {weightMode? (weighValue/10) : final/10 } ml roztworu iv/io
                </p>
              </>
            ) : (
              " "
            )}
            {adrenalinaB ? (
              <>
                <h1>Anafilaksja</h1>
                {ageMode ? <p>
                 Dawka: {ageValue<=6 ? 150 : ageValue>6 && ageValue<12 ? 300 : 500} mcg im/iv
                </p>:<p>Podaj wiek dziecka by wyliczyć dawkę</p>}
              </>
            ) : (
              " "
            )}

            {adrenalinaC ? (
              <>
                <h1>Zapalenie krtani</h1>
                <p>
                  {" "}
                  W nebulizacj podaj 1 mg Adrenaliny. Jeśli brak efektu można
                  powtarzać do całkowitej dawki 5 mg.
                </p>
              </>
            ) : (
              " "
            )}
            {adrenalinaD ? (
              <>
                <h1>Astma</h1>
                <p>
                  Dawka {weightMode ? weighValue*0.01>0.5 ? 0.5 :( weighValue*0.01).toFixed(2): final*0.01>0.5 ? 0.5 : (final*0.01).toFixed(2)} mg sc. Można powtórzyć po 20 min.
                  
                </p>
              </>
            ) : (
              " "
            )}
          </StyledDrugArea> : <h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>
}
          <StyledButton close onClick={() => setAdrenalinaOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      
      <StyledDrugItem blue onClick={openAtropina}>
        Atropina
      </StyledDrugItem>
      {atropinaOpen ? (
        <StyledDrugItem full>
          { weighValue ||  ageValue >0 && ageValue<18?
            <StyledDrugArea>
                <h1>Atropina w bradykardii</h1>
                <p>Dawka: {weightMode ? (weighValue*0.02)<=0.1 ? 0.1 :  weighValue*0.02 > 0.5 ? 0.5 :  weighValue*0.02: (final*0.02)<=0.1 ? 0.1 : (final*0.02)>0.5 ? 0.5 : final*0.02} mg</p>
                <p>2 mg atropiny rozcieńcz w 10 ml 0.9% NaCl podaj {weightMode? weighValue*0.02<=0.1 ?   0.5: weighValue*0.02>0.5? 2.5: weighValue/10 : final*0.02<=0.1 ? 0.5: final*0.02>0.5 ? 2.5: final/10} ml</p>
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setAtropinaOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      <StyledDrugItem red onClick={openAmiodaron}>
        Amiodaron
      </StyledDrugItem>
      {amiodaronOpen ? (
        <StyledDrugItem full>
            { weighValue>0 || ageValue >0 && ageValue<18 ?
            <StyledDrugArea>
                <h1>Amiodaron</h1>
                <p>Dawka: {weightMode ?( weighValue*5)>300 ? 300 : weighValue*5: (final*5)>300? 300 :final*5} mg. </p>
                <p>Rozcieńcz {weightMode? weighValue <=20 ? 100 : weighValue>20 && weighValue<=40 ? 200 : 300:final <=20 ? 100 : final>20 && final<=40 ? 200 : 300}mg w 20 ml 5% glukozie i podaj {weightMode ? (weighValue*5)>300 ? 20: weighValue <=20 ? weighValue :  weighValue>20 && weighValue<=40 ? weighValue/2: Math.round((weighValue*5)/15) :( final*5)>300? 20: final <=20 ? final :  final>20 && final<=40 ?final/2: Math.round((final*5)/15)} ml iv/io.</p>

                <p>Po 5 defibrylacji dawka {weightMode ?( weighValue*5)>150 ? 150 : weighValue*5: (final*5)>150? 150 :final*5} mg. rozcieńcz {weightMode? weighValue <=20 ? 100 : weighValue>20 && weighValue<=40 ? 200 : 150:final <=20 ? 100 : final>20 && final<=40 ? 200 : 150}mg w 20 ml 5% glukozie podaj {weightMode ? (weighValue*5)>150 ? 20: weighValue <=20 ? weighValue :  weighValue>20 && weighValue<=40 ? weighValue/2: Math.round((weighValue*5)/15) :( final*5)>150? 20: final <=20 ? final :  final>20 && final<=40 ?final/2: Math.round((final*5)/15)} ml iv/io.</p>
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setAmiodaronOpen(false)}>
          Zamknij
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      <StyledDrugItem green onClick={openAdenozyna}>Adenozyna</StyledDrugItem>
     { adenozynaOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Adenozyna</h1>
                <p>I Dawka: {weightMode ? weighValue*0.1<=6 ? (weighValue*0.1).toFixed(1) : 6 : final*0.1<=6 ? (final*0.1).toFixed() : 6} mg. iv </p>
                <p>II Dawka: {weightMode ? weighValue*0.2<=12 ? (weighValue*0.2).toFixed(1) : 12 : final*0.1<=12 ? (final*0.2).toFixed() : 12} mg. iv </p>
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setAdenozynaOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}

      {/* <StyledDrugItem grey>Dexaven</StyledDrugItem> */}

      <StyledDrugItem purple onClick={openHydrocortyzon}>Hydrokortyzon</StyledDrugItem>
      { hydrocortyzonOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Hydrocortyzon</h1>
                <p>Dawka: {weightMode ? weighValue>20 ? 100 : weighValue*5: final>20?100: final*5} mg</p>
                <p>Rozcieńcz 100 mg w 20 ml 0.9% NaCl i podaj {weightMode ? weighValue >20? 20 :weighValue: final> 20? 20 : final} ml iv/io.</p>
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setHydrocortyzonOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}

      <StyledDrugItem pink onClick={openMorfina}>Morfina</StyledDrugItem>
      { morfinaOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Morfina</h1>
                <p>Dawka: {weightMode ?( weighValue*0.1).toFixed(1): (final*0.1).toFixed(1)} mg iv/io</p>
               
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setMorfinaOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}
        <StyledDrugItem grey  onClick={openKetamina}>Ketamina</StyledDrugItem>
      { ketaminaOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Ketamina</h1>
                <p>Dawka iv/io: {weightMode ? weighValue*1: final*1} mg iv/io</p>
                <p>Dawka im: {weightMode ? weighValue*2: final*2} - {weightMode ? weighValue*4: final*4} mg im</p>
               
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setKetaminaOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}

      <StyledDrugItem electricBlue onClick={openFentanyl}>Fentanyl</StyledDrugItem>

      { fentanylOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Fentanyl</h1>
                <p>Dawka: {weightMode ? weighValue*1: final*1} mcg iv/io</p>
               
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setFentanylOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}

     
      <StyledDrugItem forest onClick={openRelanium}>Relanium</StyledDrugItem>
      { relaniumOpen ?
      <StyledDrugItem full>
         { weighValue || ageValue >0 && ageValue <18  ?
            <StyledDrugArea>
                <h1>Relanium</h1>
                <p>Dawka iv/io: {weightMode ? (weighValue*0.1).toFixed(2):(final*0.1).toFixed(2)} - {weightMode ? (weighValue*0.3).toFixed(2):(final*0.3).toFixed(2)} mg iv/io</p>
                <p>Wlewka: {weightMode ? weighValue<=10 ? ( weighValue*0.5).toFixed(2): weighValue>15 ? 10 : 5: final<=10 ? ( final*0.5).toFixed(2): final>15 ? 10 : 5} mg pr</p>
               
            </StyledDrugArea> :<h1>{ageValue>=18 ?"Osoba dorosła" :"Wpisz wagę albo wiek diecka "} </h1>}
          <StyledButton close onClick={() => setRelaniumOpen(false)}>
            Zamknij
          </StyledButton>
        </StyledDrugItem>: ''}
    </StyledItemWrapper>
  );
}
