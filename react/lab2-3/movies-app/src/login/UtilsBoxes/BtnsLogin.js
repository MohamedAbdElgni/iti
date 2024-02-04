import { Button } from "@mui/material";
function Gbtn(props){
return(
    <Button variant={props.variant} color={props.color} size={props.size} onClick={props.onClick} fullWidth={props.fullWidth} disabled={props.disabled}>
        {props.text}
    </Button>
);
}

export default Gbtn;