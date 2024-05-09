import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Stack from '@mui/material/Stack';
import CourseView from "../../components/CourseView";
import CreateCourse from "../../components/CreateCourse";
import { useState, useEffect } from "react";
import axios from "axios";


const Courses = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/course/viewAll'); // replace with your API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };
    console.log(courses);
    fetchCourses();
  }, []);

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
            {/* {courses.map(course => (
            <CourseView key={course.id} {...course} />
          ))} */}
        </Stack>
      </Box>
    </Box>
  );
};

export default Courses;
