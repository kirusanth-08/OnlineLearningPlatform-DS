import React, { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/course/viewAll');
        const coursesData = response.data.course.map(course => ({
          ...course,
          instructor_id: course.instructor_id.username // Replace instructor_id with username
        }));
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);


const handleDelete = (courseId) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this course!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://localhost:8082/api/course/delete/${courseId}`)
        .then(() => {
          // Update the courses state to remove the deleted course without refreshing the page
          const updatedCourses = courses.filter(course => course._id !== courseId);
          setCourses(updatedCourses);
          // Display success message using SweetAlert
          Swal.fire(
            'Deleted!',
            'Your course has been deleted.',
            'success'
          );
        })
        .catch((error) => {
          console.error('Error deleting course:', error);
           
        });
    }
  });
};


  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'instructor_id', headerName: 'Instructor', flex: 1 },
    { field: 'priceAll', headerName: 'Price', type: 'currency', flex: 1, valueFormatter: (value) => `$${value}` },
    { field: 'duration', headerName: 'Duration', flex: 1,valueFormatter: (value) => `${value} hrs` },
    { field: 'isApproved', headerName: 'Approved', type: 'boolean', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div >
        
          <button style={{marginLeft:'8px', background : 'red' , color:'white' ,border:'none'}} onClick={() => handleDelete(params.row._id)}>Delete</button>
        </div>
      ),
    },
  ];

  const getRowId = (row) => row._id; // Assuming _id is the unique identifier for each row

  return (
    <Box m="20px">
      <Header title="COURSES" subtitle="Manage Courses" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid  rows={courses} columns={columns} getRowId={getRowId} />
      </Box>
    </Box>
  );
};

export default Courses;
