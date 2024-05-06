import React, { useEffect, useRef } from 'react'
import { useContext } from 'react';
import './paypal.css'
import Swal from 'sweetalert2';
import { AuthContext } from '../helpers/AuthContext';
import axios from 'axios';

export default function PayPal({price , title}) {
  const { authState } = useContext(AuthContext)
    const paypal = useRef()

    useEffect(()=>{
        console.log(price)
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
        amount:price,
        status : status
      }
            axios.post('http://localhost:8084/api/payment/create',payments).then((res)=>{
              console.log(res.data.payment)
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
