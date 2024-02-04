import { TextField } from "@mui/material";

// this will return text boxex can edit the text and the validation will be done by the parent component
//like for email and password and date of birth and names 

function Text(props) {

    return (
        <div className="mb">
        <TextField
            id={props.id}
            label={props.label}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            error={props.error}
            helperText={props.helperText}
            name={props.name}
            fullWidth={true}
        />
        
        </div>
    );
}

export default Text;