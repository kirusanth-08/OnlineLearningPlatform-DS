import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
import Swal from 'sweetalert2';

const Payment = () => {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/payment/all');
        setPayment(response.data.payment);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchPayment();
  }, []);

  const handleDelete = (payID) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this payment!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8084/api/payment/${payID}`)
          .then(() => {
            setPayment(prevPayment => prevPayment.filter(item => item._id !== payID));
            Swal.fire({
              icon: 'success',
              title: 'Payment Deleted',
              text: 'The payment has been successfully deleted!',
            });
          })
          .catch(error => {
            console.error('Error deleting payment:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Failed to delete payment!',
            });
          });
      }
    });
  };


  const handleComplete = (payID) => {
    axios.put(`http://localhost:8084/api/payment/${payID}`, { status: 'completed' })
      .then(() => {
        setPayment(prevPayment =>
          prevPayment.map(item => item._id === payID ? { ...item, status: 'completed' } : item)
        );
        Swal.fire({
          icon: 'success',
          title: 'Payment Completed',
          text: 'The payment has been successfully completed!',
        });
      })
      .catch(error => {
        console.error('Error completing payment:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to complete payment!',
        });
      });
  };

  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'courseName', headerName: 'Course', flex: 1 },
    { field: 'name', headerName: 'Student', flex: 1 },
    { field: 'amount', headerName: 'Amount', type: 'currency', flex: 1, valueFormatter: (value) => `$${value}` },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div>
          {/* <button style={{ marginLeft: '2px', background: 'green', color: 'white', border: 'none' }} onClick={() => handleComplete(params.row._id)}>complete</button> */}
          {/* <button style={{ marginLeft: '8px', background: 'red', color: 'white', border: 'none' }} onClick={() => handleDelete(params.row._id)}>Delete</button> */}
          
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
      <Header title="PAYMENTS RECEIVED" subtitle="List of Payments Received" />
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid rows={payment} columns={columns} getRowId={getRowId} />
      </Box>
    </Box>
  );
};

export default Payment;
