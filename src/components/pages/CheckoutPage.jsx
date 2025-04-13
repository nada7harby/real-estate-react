import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { TextField, Button, Card, Typography, Alert } from '@mui/material';
import paymentInformation from "../../assets/images/Payment Information-rafiki.png";
const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    const response = await fetch('https://apireactjsproject-production.up.railway.app/create-payment-sheets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const { clientSecret } = await response.json();
  
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name, email },
      },
    });
  
    if (error) {
        setError(error.message);
      } else {
        setSuccess(true);
        await fetch('https://apireactjsproject-production.up.railway.app/payment-success', {
          method: 'POST',
        });
      }
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden bg-white">
        <div className="w-1/2 relative hidden md:block">
          <img
            src={paymentInformation}
            alt="Payment"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            
          </div>
        </div>
  
        <div className="w-full md:w-1/2 p-6">
          <div className="mb-6 border-b-2 border-blue-400 pb-2">
            <Typography variant="h6" className="text-blue-400 font-bold" >
              Payment Completion
            </Typography>
          </div>
          {success ? (
            <Alert severity="success" className="mb-4">
              Payment was successful!
            </Alert>
          ) : error ? (
            <Alert severity="error" className="mb-4">
              {error}
            </Alert>
          ) : null}
  
          <form onSubmit={handleSubmit} className="bg-blue-50 p-6 rounded-lg shadow-md">
            <TextField
              fullWidth
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              
              required
            />
            <div className="my-4 p-3 border rounded">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#424770',
                      '::placeholder': {
                        color: '#aab7c4',
                      },
                    },
                  },
                }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!stripe}
              className="mt-4 bg-blue-500 hover:bg-blue-600"
            >
              Confirm Payment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default CheckoutPage;