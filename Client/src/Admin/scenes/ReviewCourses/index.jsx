import React, {  useEffect, useState } from 'react';
import { Box,  Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
const Courses = () => {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/course/viewF');
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






    // Function to send email using EmailJS
    const sendApprovedEmail = (emailList) => {
      emailList.forEach(({ email, username }) => {
        const templateParams = {
          to_email:email,
          to_name: username, // Use the username as the recipient name
          from_name: 'LEARNHUB', // Your name or the sender's name
          title: 'course approved', // Email title
          date: new Date().toDateString(), // Current date
          description: `Dear ${username},\n\nYour course has been approved. Congratulations! You can now proceed with teaching your course on LearnHub.\n\nBest regards,\nLearnHub Team`

        };
    
  
      // Send email using EmailJS
      emailjs.send('service_3csklbk', 'template_6h0j0a4', templateParams, 'zmODVjugiCFyY9DWt')
        .then((response) => {
          console.log('Email sent successfully to:', email, 'Response:', response);
          const notificationData = {
            date : templateParams.date,
            title : templateParams.title,
            description : templateParams.description,
            receiverName : templateParams.to_name,
            receiverMail : templateParams.to_email

          }
          // console.log(templateParams.description)
          // console.log(templateParams.date)
          // console.log(templateParams.to_name)
          // console.log(templateParams.to_email)
          // console.log(templateParams.from_name)
          // console.log(templateParams.title)
          axios.post('http://localhost:8088/api/notifications/',{notificationData}).then((res)=>{
            if(res.data.error){
              console.log(res.data.error)
            }else{
              console.log(res.data.message)
            }
          }).catch((err)=> console.log(err))
        })
        .catch((error) => {
          console.error('Error sending email to:', email, 'Error:', error);
        });
      })
    };
 






const handleApprove=(courseId)=>{
   
    axios.put(`http://localhost:8082/api/course/${courseId}/status`, { isApproved: true }).then((res)=>{
      if(res.data.error){
        console.log(res.data.error)
      }else{

        console.log(res.data.message.instructor_id.id); // Log the success message from the server
        const ID = res.data.message.instructor_id.id
        const updatedCourses = courses.map(course => {
          if (course._id === courseId) {
            return {
              ...course,
              isApproved: true
            };
          } else {
            return course;
          }
        });
        setCourses(updatedCourses);
        // Display success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Course Approved',
          text: 'The course has been successfully approved!',
        });


        //fetch student email using student ID
        axios.get(`http://localhost:8080/api/admin/student/${ID}`).then((res)=>{
                  if(res.data.error){
                    console.log(res.data.error)
                  }else{
                    const user = res.data.message
                   
                    
                    const emailList = user.map(({ email, username }) => ({ email, username }));
                      
                    console.log(emailList)
                     //send email 
                     sendApprovedEmail(emailList);
                  }
        })


      }
    }).catch((err)=>{
      console.log(err)
    })
}


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
    { field: 'duration', headerName: 'Duration', flex: 1, valueFormatter: (value) => `${value} hrs` },
    { field: 'isApproved', headerName: 'Approved', type: 'boolean', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div >
          {/* <button style={{marginLeft:'2px' , background : 'green' , color:'white' ,border:'none'}} onClick=>Approve</button> */}
          
          <Button  onClick={() => handleApprove(params.row._id)}
            sx={{
              backgroundColor: "green",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >Approve</Button>
          {/* <button style={{marginLeft:'8px', background : 'red' , color:'white' ,border:'none'}} onClick={() => handleDelete(params.row._id)}>Reject</button> */}
          
          <Button  onClick={() => handleDelete(params.row._id)}
            sx={{
              backgroundColor: "red",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >Delete</Button>
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
