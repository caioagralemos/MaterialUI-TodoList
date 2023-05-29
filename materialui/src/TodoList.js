import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoForm from "./TodoForm";
import Typography from "@mui/material/Typography";

const getInitialTodos = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) {
        return []
    } else {
        return data
    }
}

export default function TodoList() {
    const [list, setList] = useState(getInitialTodos)
    const [toggledID, toggleID] = useState([])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(list)) // jogando a lista de todos no armazenamento do usuário
    }, [list])

    const handleAdd = (text) => {
        var newList = [...list, { 'id': list.length, 'text': text }]
        setList(newList)

    };

    const handleToggle = (value) => {
        const currentIndex = toggledID.indexOf(value.id);
        const newChecked = [...toggledID];
        if (currentIndex === -1) {
            newChecked.push(value.id);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        toggleID(newChecked);
    };

    const handleDelete = (value) => {
        const currentIndex = toggledID.indexOf(value.id);
        const newChecked = [...toggledID];
        if (currentIndex !== -1) {
            newChecked.splice(currentIndex, 1);
        }
        var newList = [...list];
        newList = newList.filter((l) => l !== value)
        setList(newList)
        toggleID(newChecked)
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', m: 3 }} >
            <Typography variant='h2' component='h1' sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.map((value) => {
                    const labelId = `checkbox-list-label-${value.text}`;

                    return (
                        <ListItem
                            key={value.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments" onClick={() => handleDelete(value)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={() => handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={toggledID.includes(value.id)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.text}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
                <TodoForm addTodo={handleAdd} />
            </List>
        </Box>
    );
}