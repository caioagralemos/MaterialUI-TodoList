import TextField from '@mui/material/TextField';

export default function FormDemo({lbl='Pizza'}) {
    return (
        <div>
            <TextField id="outlined-basic" label={lbl}variant="outlined" />
        </div>
    )

}