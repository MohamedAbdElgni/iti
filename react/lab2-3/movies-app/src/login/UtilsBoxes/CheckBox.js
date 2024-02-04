
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
function CheckBox(props){
    return(
        <div>
            <FormControlLabel
            control={<Switch checked={props.checked} onChange={props.onChange} name={props.name} color={props.color} />}
            label={props.label}
            />
         </div>
    );
}

export default CheckBox;