import React, { useState, useContext } from "react";
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
  Box,
  TextField
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import axios from "axios";
import { useParams } from "react-router-dom";

// Slide transition component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CourseContentCreate({courseId}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  // const { authState } = useContext(AuthzContext);
  const [topic, setTopic] = useState('dumba');
  const [video, setVideo] = useState('');
  const [lectureFile, setLectureFile] = useState(null);
  const [assignmentFile, setAssignmentFile] = useState(null);

  // console.log(courseId);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleLectureFileChange = (e) => setLectureFile(e.target.files[0]);

  const handleAssignmentFileChange = (e) => setAssignmentFile(e.target.files[0]);

  const createFormData = (fields) => {
    const formData = new FormData();
    Object.entries(fields).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  };

  const handleFileUpload = async () => {
    const formData = createFormData({
      topic: topic,
      video: video,
      lecture: lectureFile,
      assignment: assignmentFile,
    });

console.log(formData.get('topic'));

    try {
      const response = await axios.post(`http://localhost:8082/api/courseContent/create/${courseId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': `Bearer ${authState.token}` // Assuming you have an auth token in authState
        }
      });
      console.log('Course content created:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error creating course content:', error);
    }
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
          Add Course Content
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          maxWidth="md"
          fullWidth
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
                Create Course Content
              </Typography>
              <Button autoFocus color="inherit" onClick={handleFileUpload}>
                Add
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <Box p={5}>
              <ListItemText
                primary="Topic"
                secondary={
                  <TextField
                    label="Enter Topic"
                    fullWidth
                    margin="normal"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                }
              />
              <Divider />
              <ListItemText
                primary="Video"
                secondary={
                  <TextField
                    label="Paste Video Link"
                    fullWidth
                    margin="normal"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                  />
                }
              />
              <Divider />
              <ListItemText
                primary="Lecture Material"
                secondary={
                  <>
                    <Button variant="contained" component="label">
                      Upload File
                      <input
                        type="file"
                        onChange={handleLectureFileChange}
                        hidden
                      />
                    </Button>
                    {lectureFile ? lectureFile.name : 'No file selected'}
                  </>
                }
              />
              <Divider />
              <ListItemText
                primary="Assignment"
                secondary={
                  <>
                    <Button variant="contained" component="label">
                      Upload File
                      <input
                        type="file"
                        onChange={handleAssignmentFileChange}
                        hidden
                      />
                    </Button>
                    {assignmentFile ? assignmentFile.name : 'No file selected'}
                  </>
                }
              />
            </Box>
          </List>
        </Dialog>
      </React.Fragment>
    </Box>
  );
}
