import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import Create from '@mui/icons-material/Create'
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('')
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handleAdd = (evt) => {
        evt.preventDefault()
        addTodo(text)
        setText('')
    }
    return (
        <ListItem>
            <form onSubmit={handleAdd}>
                <TextField
                    id="outlined-basic"
                    label='Add todo'
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="create todo"
                                edge="end"
                                type='submit'
                            >
                                <Create />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}