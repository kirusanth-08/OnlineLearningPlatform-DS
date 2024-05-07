import React from 'react'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom'
import Header from "../../components/Header";

const ViewCourse = () => {
  const { id } = useParams()

  return (
    <Box m="20px">
        <Header title="COURSE MATERIALS" subtitle="Manage Your Course Content" />
         Course ID: {id}
    </Box>
  )
}

export default ViewCourse