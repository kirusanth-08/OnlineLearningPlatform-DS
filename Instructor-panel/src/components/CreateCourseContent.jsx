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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CourseContentCreate() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <Button autoFocus color="inherit" onClick={handleClose}>
                Add
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <Box p={5} >
              <ListItemText
                primary="Topic"
                secondary={
                  <TextField label="Enter Topic" fullWidth margin="normal" value={"Heythere"}/>
                }
                />
              <Divider />
              <ListItemText
                primary="Description"
                secondary={
                  <TextField label="Enter Description" fullWidth margin="normal" />
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
