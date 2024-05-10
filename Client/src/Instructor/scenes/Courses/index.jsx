import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Stack from '@mui/material/Stack';
import CourseView from "../../components/CourseView";
import CreateCourse from "../../components/CreateCourse";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthzContext } from '../../components/Helper'


const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [courses, setCourses] = useState([]);
  const { authState } = useContext(AuthzContext);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.post('http://localhost:8082/api/course/myCourses/', {
          instructor_id: authState.id
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };
    fetchCourses();
  }, []);
  console.log(courses)

  return (
    <Box m="20px"
      sx={{
        position: "relative",
      }}
    >
      <Header title="YOUR COURSES" subtitle="Manage Your Courses" />
      
      <CreateCourse />  
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <Stack spacing={0}>
            {courses.map(course => (
            <CourseView key={course._id} {...course} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Courses;
