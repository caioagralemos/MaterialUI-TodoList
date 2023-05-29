import TextField from '@mui/material/TextField';
import { Stack, Slider } from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { Box } from '@mui/material';
import { useState } from 'react';
import Navbar from './Navbar';

export default function FormDemo({ lbl = 'Pizza' }) {
    const [name, setName] = useState('')
    const [volume, setVolume] = useState(5)
    const handleChange = (evt) => {
        setName(evt.target.value)
    }
    const handleVolume = (evt) => {
        setVolume(evt.target.value)
    }
    return (
        <div>
            <Navbar />
            <Box sx={{ border: '1px solid red', p: 2 }}>
                <h1>Nome é: {name}! Volume {volume}, papai!</h1>
                <TextField id="outlined-basic" label={lbl} variant="outlined" value={name} onChange={handleChange} />
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown />
                    <Slider size='small' min={1} max={10} aria-label="Volume" value={volume} onChange={handleVolume} />
                    <VolumeUp />
                </Stack>
            </Box>
        </div>
    )

}