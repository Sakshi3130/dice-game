import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = (props) =>{
    return<Container>
        <div>
            <img src="./images/dices.png" alt="dices"/>
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button onClick={props.toggle}>
                Play Now
            </Button>
        </div>
    </Container>
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display:flex;
    margin:0 auto;
    height:100vh;
    align-items:center;

    .content{
        display:flex;
        flex-direction:column;
        align-items:end;
        h1{
            font-size:96px;
            white-space:nowrap;
        }
    }
`;

