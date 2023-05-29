import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Buttons() {
    const content = <>
        <Stack spacing={2} direction="row">
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <Button variant="text">Text</Button>
            <Button size='large' variant="contained" onClick={() => alert('oi')}>Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    </>

    return <div>{content}</div>
}

export default Buttons