import React, { useEffect, useState, useContext } from 'react';
import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
import { AuthzContext } from '../../components/Helper'

const Payment = () => {
  const [payment, setPayment] = useState([]);
  const { authState } = useContext(AuthzContext);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.post('http://localhost:8084/api/payment/myPayments', {
          instructor: authState.id 
        });
        console.log(response.data.payments);
        setPayment(response.data.payments);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchPayment();
  }, []);

  const columns = [
    { field: '_id', headerName: 'ID' },
    { field: 'courseName', headerName: 'Course', flex: 1 },
    { field: 'name', headerName: 'Student', flex: 1 },
    { field: 'amount', headerName: 'Amount', type: 'currency', flex: 1, valueFormatter: (value) => `$${value}` },
    { field: 'date', headerName: 'Date', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
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
