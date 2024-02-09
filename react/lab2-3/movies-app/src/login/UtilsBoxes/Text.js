import { TextField } from "@mui/material";



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
                className={props.className}
            />

        </div>
    );
}

export default Text;