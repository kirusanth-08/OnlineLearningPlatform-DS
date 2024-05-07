import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
// import Swal from 'sweetalert2';

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/admin/instructor');
        setInstructor(response.data.message);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchInstructor();
  }, []);

 
 
  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'username', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Mail', flex: 1 },
    { field: 'date', headerName: 'Date', flex: 1 },
  ];

  const getRowId = (row) => row._id; // Assuming _id is the unique identifier for each row

  return (
    <Box m="20px">
      <Header title="INSTRUCTORS" subtitle="View list of instructors" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={instructor} columns={columns} getRowId={getRowId} />
      </Box>
    </Box>
  );
};

export default Instructor;
