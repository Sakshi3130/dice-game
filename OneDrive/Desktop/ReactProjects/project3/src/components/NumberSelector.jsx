
import styled from "styled-components";


const NumberSelector = (props)=> {
    const arr = [1,2,3,4,5,6];
    const NumberSelector=(value)=>{
        props.setSelectedNumber(value);
        props.setError("");
    }
  return (
    <NumberSelectorContainer>
    <p className="error">{props.error}</p>
        <div className="flex">
        {
            arr.map((value,i)=>{
                return <Box
                isSelected={value ===props.selectedNumber}
                key={i}
                onClick={()=>NumberSelector(value)}
                >{value}</Box>
            })
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    .flex{
        display:flex;
        gap:24px;
    }
    p{
        font-size:24px;
        font-weight:500;
    }
    .error{
        color:red;
    }
`

const Box = styled.div`
    height:72px;
    width:72px;
    border:1px solid black;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
    font-weight:700;
    background-color:${(props)=>{
        return (props.isSelected?"black":"white");
    }};
    color:${(props)=>{
        return (!props.isSelected?"black":"white");
    }};
`