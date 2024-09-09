import { useState } from "react";
import styled from "styled-components";

const RoleDice = (props) => {
    
  return (
    <DiceContainer>
        <div className="dice" onClick={props.roleDice}>
            <img src={`./images/dice/dice_${props.currentDice}.png`} alt={`dice ${props.currentDice}`}/>
        </div>
        <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    margin-top:48px;
    display:flex;
    align-items:center;
    flex-direction:column;

    .dice{
        cursor:pointer;
    }

    p{
        font-size:24px;
    }
`