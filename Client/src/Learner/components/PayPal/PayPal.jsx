import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import './paypal.css'
import Swal from 'sweetalert2';
import { AuthContext } from '../helpers/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function PayPal({price , title,userID,courseID}) {
  const navigate = useNavigate()
  const { authState } = useContext(AuthContext)
    const paypal = useRef()

    useEffect(()=>{
        // console.log(price)
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: title,
                      amount: {
                        currency_code: "CAD",
                        value: price,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: 'Thank you for your payment!',
                });
                 InsertPayment('completed');
                navigate('/leanings')
              },
              onError: (err) => {
                // console.log(err);
                // Show error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Error',
                    text: 'An error occurred while processing your payment. Please try again later.',
                });
                  InsertPayment('failed');
              },
              onCancel: () => {
                InsertPayment('pending');
              },       
        }).render(paypal.current)
    },[price,title])

    /////payment 
    const InsertPayment=(status)=>{

      const payments={
        user : localStorage.getItem('id'),
        name : localStorage.getItem('name'),
        course_id:courseID,
        amount:price,
        status : status,
        courseName:title
      }
      const updatePayment={
        status : 'active'
      }
            axios.post('http://localhost:8084/api/payment/create',payments).then((res)=>{
              
              if(res.data.error){
                console.log(res.data.error)
            }else{
              console.log(res.data)
              if(status === 'completed'){
                axios.put(`http://localhost:8085/api/enrollments/enroll/${courseID}/${userID}`,updatePayment).then((res)=>{
                  console.log(res.data.message)
                 

                }).catch((err)=>{  console.log(err)})
              }
            }
            }).catch((err)=>{
              console.log(err)
            })
          
    }
  return (
    <div className="paypal-container">
      <div ref={paypal}></div>
    </div>
  )
}
