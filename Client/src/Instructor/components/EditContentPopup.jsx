import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  ListItemText,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  useTheme,
  Box,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { tokens } from "../theme";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditContentPopup({ id, titleProp, descriptionProp }) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(titleProp);
  const [description, setDescription] = useState(descriptionProp);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleUpdate = () => {
    axios.put(`your-api-url/${id}`, { title, description })
      .then(response => {
        console.log(response.data);
        handleClose();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
      
    handleClose();
  };

  return (
    <Box m={5}>
      <React.Fragment>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            backgroundColor: colors.primary[400],
            color: colors.grey[100],
            position: "relative",
            ":hover": {
              color: "white",
              backgroundColor: colors.primary[500],
            },
          }}
        >
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          PaperProps={{ style: { width: '80%' } }} 
          maxWidth="md"
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Edit Course Content
              </Typography>
              <Button autoFocus color="inherit" onClick={handleUpdate}>
                update
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <Box p={5} >
              <ListItemText
                primary="Topic"
                secondary={
                  <TextField label="Enter Topic" fullWidth margin="normal" value={title} onChange={e => setTitle(e.target.value)} />
                }
                />
              <Divider />
              <ListItemText
                primary="Description"
                secondary={
                  <TextField label="Enter Description" fullWidth margin="normal" value={description} onChange={e => setDescription(e.target.value)} />
                }
                />
              <Divider />
              <ListItemText
                primary="Content"
                secondary={
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden />
                  </Button>
                }
                />
            </Box>
          </List>
        </Dialog>
      </React.Fragment>
    </Box>
  );
}
