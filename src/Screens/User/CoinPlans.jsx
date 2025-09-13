import React, { useState, useEffect } from "react";
import axios from "axios";
import contactUsImage from "../../Assets/contact-us.jpg";
import coins_image from "../../Assets/coins_image.png";
import { SecondaryNav } from "../../Components/Common/SecondaryNav";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/AuthContext";
import encryptionModule from "../../Components/Common/localStorageUtils";

const CoinPlans = () => {
  const [coinPlans, setCoinPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingPlanId, setProcessingPlanId] = useState(null);
  const [coinsAmount, setCoinAmount] = useState(null);
  const navigate = useNavigate();
  // const { user } = useAuth();

  const user = encryptionModule.decryptData('userData')


  //   console.log(user)

  // Function to fetch coin plans
  const fetchCoinPlans = async () => {
    try {
      const response = await axios.get(
        "https://hc-api.onrender.com/heart-connect/coin-plan/getcoin-plans"
      );
      setCoinPlans(response?.data);
      // console.log("Coin Plans:", response?.data);
      setLoading(false)
    } catch (error) {
      console.log("Error fetching coin plans:", error);
    }
  };

  // Function to fetch transaction histories
  const fetchTransactionHistories = async (id) => {
    try {
      const response = await axios.get(
        `https://hc-api.onrender.com/heart-connect/transaction-history/get-transaction-histories/${id}`
      );
      // console.log("Transaction Histories:", response?.data);

      const totalCoins = response?.data?.reduce(
        (sum, ele) => sum + (ele?.coinPlan?.coinAmount || 0),
        0
      );
      setCoinAmount(totalCoins);
    } catch (error) {
      console.log("Error fetching transaction histories:", error);
    }
  };

  useEffect(() => {
    fetchCoinPlans()
    fetchTransactionHistories(user?._id)
  }, [user?._id]);


  useEffect(() => {
    // Check if Razorpay script is already loaded
    if (window.Razorpay) return;

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      console.log("Razorpay script loaded successfully.");
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script.");
    };
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBuyCoin = async (coinPlan, index) => {
    setProcessingPlanId(index);
    try {
      const userId = user?._id; // Replace with actual user ID

      // Calculate the discounted price in rupees (₹)
      const discountedPriceInRupees = Math.floor(
        calculateDiscountedPrice(coinPlan?.purchaseAmount, coinPlan?.discount)
      );

      // This is the correct amount in rupees
      const amountInRupees = discountedPriceInRupees;

      // Send this exact amount (in rupees) to the backend, not converted to paise
      const orderResponse = await axios.post(
        "https://hc-api.onrender.com/heart-connect/transaction-history/create-order",
        {
          amount: amountInRupees, // Send amount in rupees
          currency: "INR",
          notes: { defaultNote: "No notes provided" },
        }
      );

      const order = orderResponse.data;

      if (!order || !order.id || !order.amount) {
        throw new Error("Invalid order response");
      }

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      // Convert to paise only for Razorpay
      const amountInPaise = amountInRupees * 100;

      const options = {
        key: "rzp_test_KucxtTmrpo0emT",
        amount: amountInPaise, // Amount is in paise for Razorpay
        currency: "INR",
        name: "Heart Connect",
        description: "Purchase Coins",
        order_id: order.id,
        handler: function (response) {
          handlePaymentSuccess(response, order, coinPlan, userId);
        },
        prefill: {
          email: "saikh@gmail.com",
          contact: "7205190819",
          name: "Saikh Mirsat",
        },
        theme: { color: "#F37254" },
        notes: order?.notes,
        display_currency: "INR", // Ensure display is in rupees
        display_amount: amountInRupees.toFixed(2), // Display amount in rupees
        modal: {
          ondismiss: function () {
            // This function will be triggered when the Razorpay window is closed by the user
            alert("Payment process was canceled.");
            setProcessingPlanId(null);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert(
        "Payment Failed: There was an issue processing your payment. Please try again."
      );
      setProcessingPlanId(null);
    }
  };

  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const handlePaymentSuccess = async (response, order, coinPlan, userId) => {
    try {
      const payment = await axios.post(
        "https://hc-api.onrender.com/heart-connect/transaction-history/create-transaction-histories",
        {
          userID: userId,
          orderId: order.id,
          paymentId: response.razorpay_payment_id,
          amount: order.amount / 100,
          coinPlan: coinPlan,
          paymentGateway: "Razorpay",
          contact: "7205190819", // Replace with actual user contact
          email: "saikh@gmail.com", // Replace with actual user email
          method: "Card", // Or the actual payment method used
          status: "Success",
          currency: "INR",
          coinID: coinPlan._id, // Assuming coinPlan has an id field
          orderID: order.id,
          transactionID: response.razorpay_payment_id,
        }
      );

      console.log("Transaction History Created------->", payment);

      // Redirect to success page with payment data
      navigate("/payment-success", {
        state: {
          paymentId: response.razorpay_payment_id,
          orderId: order.id,
          amount: order.amount / 100, // Convert back to rupees
          coins: coinPlan.coinAmount,
        },
      });
    } catch (error) {
      console.error("Error creating transaction history:", error);
      alert(
        "Payment was successful, but there was an issue creating the transaction history. Please contact support."
      );
    } finally {
      setProcessingPlanId(null);
    }
  };

  return (
    <div>
      <SecondaryNav
        banner={contactUsImage}
        page_name="Coin Plans"
        desc="Explore our flexible coin plans designed to enhance your experience. Whether you're looking to unlock premium features, connect with others, or enjoy exclusive content, our coin plans offer the perfect solution. Choose the plan that suits your needs and start making the most of your interactions today."
      />

      <div className="p-6">
        <div className="text-center py-3 ">
          <h1 className="border-pink-500 border inline-block p-3 rounded-xl outline outline-2 outline-offset-2 outline-pink-500 text-pink-500 text-lg">Your Total Coins : {coinsAmount || 0}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array(6)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-200 rounded-lg shadow-md animate-pulse"
                >
                  <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded"></div>
                </div>
              ))
            : coinPlans.map((plan, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border shadow-lg"
              >
                <div className="relative bg-gradient-to-tr from-pink-400 to-pink-700 rounded-t-xl">
                  <img
                    src={coins_image}
                    alt="Buy Coin"
                    className="w-full h-[170px] object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-2 py-1 rounded-lg">
                    {plan.discount}%
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold">
                    {plan.coinAmount} Coins
                  </h2>
                  <div className="text-lg text-gray-700 mt-2 flex justify-center gap-4">
                    <p>
                      ₹
                      {calculateDiscountedPrice(
                        plan.purchaseAmount,
                        plan.discount
                      )}
                    </p>
                    <p className="line-through text-gray-400">
                      ₹{plan.purchaseAmount}
                    </p>
                  </div>
                  <button
                    onClick={() => handleBuyCoin(plan, index)}
                    className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
                    disabled={processingPlanId === index}
                  >
                    {processingPlanId === index ? "Processing..." : "Buy Now"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoinPlans;
