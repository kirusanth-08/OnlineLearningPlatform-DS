import * as React from "react";
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
import { useState, useContext } from "react";
import { AuthzContext } from "../components/Helper";

import axios from 'axios'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CourseContentCreate() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const { authState } = useContext(AuthzContext);
  const [topic, setTopic] = useState();
  const [video, setVideo] = useState();
  const [lecture, setLecture] = useState();
  const [assigment, setAssignment] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    axios.post(`http://localhost:8082/api/courseContent/create/`, { 
      instructor_id:{
        id:authState.id, 
        username:authState.name
      }, 
      title:topic, 
      video: video, 
      lecture: 'coursePricePer',
      assignment:'coursePriceAll',
    })
      .then(response => {
        console.log(response.data);
        handleClose();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });

    handleClose()
  }

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
          Add Course Content
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
                Create course content
              </Typography>
              <Button autoFocus color="inherit" onClick={handleCreate}>
                Add
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <Box p={5} >
              <ListItemText
                primary="Topic"
                secondary={
                  <TextField label="Enter Topic" fullWidth margin="normal" value={topic} onChange={e => setTopic(e.target.value)} />
                }
                />
              <Divider />
              <ListItemText
                primary="video"
                secondary={
                  <TextField label="Paste video link" fullWidth margin="normal" value={video} onChange={e => setVideo(e.target.value)} />
                }
                />
              <Divider />
              <ListItemText
                primary="Lecture material"
                secondary={
                  <Button variant="contained" component="label">
                    Upload File
                    <input type="file" hidden />
                  </Button>
                }
                />
              <ListItemText
                primary="Assigment"
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
