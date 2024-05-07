import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Stack from '@mui/material/Stack';
import CourseView from "../../components/CourseView";


const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="YOUR COURSES" subtitle="Manage Your Courses" />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <Stack spacing={2}>
            <CourseView 
              id="1"
              title="Course 1"
              description="Course Description"
              status="Active"
            />
            <CourseView 
              id="1"
              title="Course 1"
              description="Course Description"
              status="Active"
            />
            <CourseView 
              id="1"
              title="Course 1"
              description="Course Description"
              status="Active"
            />
            <CourseView 
              id="1"
              title="Course 1"
              description="Course Description"
              status="Active"
            />
        </Stack>
      </Box>
    </Box>
  );
};

export default Courses;
