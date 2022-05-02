import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import './PositionedMenu.css'
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function PositionedMenu(props) {
  
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const [buttonName, setButtonName] = React.useState(props.buttonName)
  const [menuItems, setMenuItems] = React.useState(props.menuItems)
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = (index) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {buttonName}
      </Button>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>{menuItems[0]}</MenuItem>

        <Link to='/rankings' style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleClose}>{menuItems[1]}</MenuItem>
        </Link>
        
        <MenuItem onClick={handleClose}>{menuItems[2]}</MenuItem>
      </Menu>
    </div>
  );
}

