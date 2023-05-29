import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Icon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ChecklistIcon />
          </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}