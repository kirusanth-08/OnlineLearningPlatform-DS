import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
const EditCourse = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams(); // Get the id parameter from the URL
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priceAll, setPriceAll] = useState('');
  const [pricePer, setPricePer] = useState('');
  const [duration, setDuration] = useState('');
  const [error, setError] = useState('');

  const handleReview = async () => {
    try {
      // Basic validation
      if (!title || !description || !priceAll || !pricePer || !duration) {
        setError('Please fill in all fields');
        return;
      }

      // Send data to the server
      await axios.put(`http://localhost:8082/api/course/${id}/update`, {
        title,
        description,
        priceAll,
        pricePer,
        duration,
        instructor_id: { id: localStorage.getItem('id'), username: localStorage.getItem('name')}
      }).then((res)=>{
        if(res.data.error){
          console.log(res.data.error)
        }else{
          console.log(res.data.message)
           // Show SweetAlert for successful update
           Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'course successfully updated'
          });
          navigate('/instructor/courses')
        }
      }).catch((err)=>console.log(err))

      // Provide feedback to the user
      console.log('Course updated successfully');
      // You can also reset the form or redirect the user here
    } catch (error) {
      // Handle server errors
      console.error('Error updating course:', error);
      setError('Internal server error. Please try again later.');
    }
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Course
        </Typography>
        <form noValidate autoComplete="off">
          <TextField 
            label="Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Description" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Course Price per Month" 
            value={priceAll} 
            onChange={e => setPriceAll(e.target.value)} 
            fullWidth 
            margin="normal"
          />
           <TextField 
            label="Course Price per Day" 
            value={pricePer} 
            onChange={e => setPricePer(e.target.value)} 
            fullWidth 
            margin="normal"
          />
          <TextField 
            label="Duration" 
            value={duration} 
            onChange={e => setDuration(e.target.value)} 
            fullWidth 
            margin="normal"
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button 
            variant="contained" 
            onClick={handleReview}
            fullWidth
            sx={{
                backgroundColor: colors.primary[400],
                color: colors.grey[100],
                ":hover": {
                    backgroundColor: colors.primary[500],
                },
            }}
          >
            Review
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default EditCourse;
