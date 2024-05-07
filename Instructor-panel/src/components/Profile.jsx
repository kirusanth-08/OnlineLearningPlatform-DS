import * as React from 'react';
import Popover from '@mui/material/Popover';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { IconButton } from "@mui/material";
import Swal from 'sweetalert2'
import LogoutIcon from "@mui/icons-material/Logout";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You have to login again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout operation here
        console.log('User logged out');
        Swal.fire({
          title: "Logged out!",
          // text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div>
    <IconButton>
      <PersonOutlinedIcon aria-describedby={id} variant="contained" onClick={handleClick}/>
    </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary=" Logout"/>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

      </Popover>
    </div>
  );
}
