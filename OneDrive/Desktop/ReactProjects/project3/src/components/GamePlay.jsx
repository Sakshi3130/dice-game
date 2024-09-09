import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const[score,setScore]=useState(0);
    const [currentDice,setCurrentDice] = useState(1);
    const [selectedNumber,setSelectedNumber]=useState();
    const[error,setError] = useState("");
    const [showRules,setShowRules] = useState(false);
    const roleDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }
        const randomnum = Math.floor((Math.random()*6)+1);
        setCurrentDice((prev)=>randomnum);

        if(selectedNumber===randomnum){
            setScore((prev)=>prev+randomnum);
        }
        else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined)
    }
    return <MainContainer>
        <div className="top_section">
            <TotalScore 
            score={score}
            />
            <NumberSelector 
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            />
        </div>
        <RoleDice 
            currentDice={currentDice}
            roleDice={roleDice}
        />
        <div className="btns">
            <OutlineButton onClick={()=>setScore(0)}>Reset Score</OutlineButton>
            <Button onClick={()=>setShowRules(prev=> !prev)}>{showRules?"Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
}
export default GamePlay;

const MainContainer = styled.main`
    height:90vh;
    padding-top:70px;
    .top_section{
        display:flex;
        justify-content:space-around;
        align-items:end;
    }
    .btns{
        margin-top:48px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        gap:10px;
    }
`;