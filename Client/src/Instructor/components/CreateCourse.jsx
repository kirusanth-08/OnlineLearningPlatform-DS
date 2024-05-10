import * as React from "react";
import { useState, useEffect, useContext } from "react";
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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AuthzContext } from "../components/Helper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateCourse() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { authState } = useContext(AuthzContext);
  const [open, setOpen] = React.useState(false);
  const [coursePriceAll, setCoursePriceAll] = useState();
  const [coursePricePer, setCoursePricePer] = useState();
  const [courseTitle, setTitle] = useState();
  const [courseDuration, setDuration] = useState();
  const [courseDesc, setDescription] = useState();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(authState)
  const handleRequest = () => {
    axios.post(`http://localhost:8082/api/course/create/`, { 
      instructor_id:{
        id:authState.id, 
        username:authState.name
      }, 
      title:courseTitle, 
      description: courseDesc, 
      priceAll:coursePriceAll, 
      pricePer: coursePricePer, 
      duration: courseDuration 
    })
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
            backgroundColor: colors.greenAccent[400],
            color: colors.grey[100],
            position: "absolute",
            top: 50,
            right: 0,
          }}
        >
          <AddCircleOutlineIcon />
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
                Enter Course Details
              </Typography>
              <Button autoFocus color="inherit" onClick={handleRequest}>
                Request
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <Box p={5} >
              <ListItemText
                primary="Topic"
                secondary={
                  <TextField label="Enter Topic" fullWidth margin="normal" value={courseTitle} onChange={e => setTitle(e.target.value)} />
                }
                />
              <Divider />
              <ListItemText
                primary="Description"
                secondary={
                  <TextField label="Enter Description" fullWidth margin="normal" value={courseDesc} onChange={e => setDescription(e.target.value)} />
                }
                />
              <Divider />
              {/* <ListItemText
                primary="Description"
                secondary={
                  <TextField label="Enter Description" fullWidth margin="normal" value={description} onChange={e => setDescription(e.target.value)} />
                }
                /> */}

              <Divider />
                <ListItemText
                  primary="Course Price "
                  secondary={
                    <TextField 
                    type="number"
                    label="Enter Course price per month" 
                    // fullWidth 
                    margin="normal" 
                    value={coursePriceAll} 
                    onChange={e => setCoursePriceAll(e.target.value)}
                    />
                  }
                />
                  <Divider />
                <ListItemText
                  primary="Course Price"
                  secondary={
                    <TextField 
                      type="number"
                      label="Enter Course Price per class" 
                      // fullWidth 
                      margin="normal" 
                      value={coursePricePer} 
                      onChange={e => setCoursePricePer(e.target.value)}
                    />
                  }
                />
                <Divider />
                <ListItemText
                  primary="Course Duration(hours)"
                  secondary={
                    <TextField 
                      type="number"
                      label="Enter course duration in hour" 
                      // fullWidth 
                      margin="normal" 
                      value={courseDuration} 
                      onChange={e => setDuration(e.target.value)}
                    />
                  }
                />
            </Box>
          </List>
        </Dialog>
      </React.Fragment>
    </Box>
  );
}
