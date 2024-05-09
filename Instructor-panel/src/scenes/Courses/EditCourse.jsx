import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Box, Typography, TextField, Button, useTheme } from '@mui/material'
import { tokens } from "../../theme";
import axios from 'axios'

const EditCourse = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const handleReview = async () => {
    try {
      await axios.put(`your-api-url/courses/${id}`, {
        title,
        description,
        price
      })
      // removed history.push(`/courses/${id}`)
    } catch (error) {
      console.error(error)
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
            label="Price" 
            value={price} 
            onChange={e => setPrice(e.target.value)} 
            fullWidth 
            margin="normal"
          />
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
  )
}

export default EditCourse