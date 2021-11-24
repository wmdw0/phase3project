import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Search from "./Search";
function Header({ isDarkMode, onToggleDarkMode }) {
    return (
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ marginLeft: '-320px', flexGrow: 1 }}>
            To Do
          </Typography>
            <div className="toggle-switch">
                <input 
                type="checkbox"
                id="toggle-dark-mode"
                checked={isDarkMode}
                onChange={(e) => onToggleDarkMode(e.target.checked)}
                />
                <label htmlFor="toggle-dark-mode"></label>
            </div>
            </Toolbar>
      </AppBar>
    </Box>
    );
}

export default Header;