import React, { useEffect, useRef } from 'react'
import './paypal.css'
import Swal from 'sweetalert2';
export default function PayPal({price , title}) {
    const paypal = useRef()

    useEffect(()=>{
        console.log(price)
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: {title},
                      amount: {
                        currency_code: "CAD",
                        value:{price},
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log("successful order" + order);
                Swal.fire({
                    icon: 'success',
                    title: 'Payment Successful',
                    text: 'Thank you for your payment!',
                });
              },
              onError: (err) => {
                console.log(err);
                // Show error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Payment Error',
                    text: 'An error occurred while processing your payment. Please try again later.',
                });
              },        
        }).render(paypal.current)
    },[price,title])
  return (
    <div className="paypal-container">
      <div ref={paypal}></div>
    </div>
  )
}
