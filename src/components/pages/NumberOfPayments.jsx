import React, { useEffect, useState } from 'react';

const NumberOfPayments = () => {
  const [count, setCount] = useState(0);

  const fetchPaymentCount = async () => {
    const res = await fetch('https://apireactjsproject-production.up.railway.app/payment-count');
    const data = await res.json();
    setCount(data.count);
  };

  useEffect(() => {
    fetchPaymentCount();

    
    const interval = setInterval(fetchPaymentCount, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        
        <p className="text-lg">Number of successful payments :</p>
        <p className="text-4xl font-bold text-blue-500 mt-2">{count}</p>
      </div>
    </div>
  );
};

export default NumberOfPayments;
