import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const paymentData = location.state;

  if (!paymentData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something Went Wrong</h1>
          <p className="mb-4">We couldn't retrieve the payment details. Please try again later.</p>
          <Link to="/coin-plans" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back to Coin Plans
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-40 bg-gradient-to-l from-pink-400 via-pink-300 to-pink-500">
      <div className="p-10 bg-white rounded-lg shadow-xl text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Payment Successful!</h1>
        <p className="mb-4 text-lg"><strong>Payment ID:</strong> {paymentData.paymentId}</p>
        <p className="mb-4 text-lg"><strong>Order ID:</strong> {paymentData.orderId}</p>
        <p className="mb-4 text-lg"><strong>Amount Paid:</strong> ₹{paymentData.amount}</p>
        <p className="mb-6 text-lg"><strong>Coins Purchased:</strong> {paymentData.coins}</p>
        <Link to="/coin-plans" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
          Back to Coin Plans
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
