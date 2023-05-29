import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoList() {
    const [list, setList] = useState([{'id': 0, 'text': 'clean car'}, {'id': 1, 'text': 'buy show tickets'}, {'id': 2, 'text': 'work late today!'}])
    const [toggledID, toggleID] = useState([0])


  const handleToggle = (value) => {
    const currentIndex = toggledID.indexOf(value.id);
    const newChecked = [...toggledID];

    if (currentIndex === -1) {
      newChecked.push(value.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    toggleID(newChecked);
    console.log(toggledID)
  };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {list.map((value) => {
            const labelId = `checkbox-list-label-${value.text}`;
    
            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
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
                  <ListItemText id={labelId} primary={`Line item ${value.id + 1}: ${value.text}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );

}