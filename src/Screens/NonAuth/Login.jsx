import React, { useState } from "react";
import LoginForm from "../../Components/Login/LoginForm";
import OtpForm from "../../Components/Login/OtpForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/AuthContext";
import encryptionModule from "../../Components/Common/localStorageUtils";

const Login = () => {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState()
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();


  const handleSubmit = async (phone, code) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_URI}/users/get-user-by-phone/91${phone}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.success > 0) {
          handlePhoneNumberSubmit(phone, code)
        }
        else {
          setError("This number does not exit");
          return response?.data?.success
        }


      })
      .catch((error) => {
        console.log(error);
      });
  }


  const handlePhoneNumberSubmit = async (phone, code) => {
    setLoading(true)
    setPhoneNumber(phone)
    if (!code) {
      setError("Please select a country code.");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be 10 digits long.");
      return;
    }
    setError("");
    setLoading(true)

    let data = JSON.stringify({
      phoneNumber: `91${phone}`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.REACT_APP_API_URI}/sms/send-otp`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("i am here now ", response?.data)
        console.log(response?.data?.success);
        if (response?.data?.success) {
          setShowOtpForm(true);
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Something Went Wrong!");
        setLoading(false)
      });
  };

  const handleOtpSubmit = (otp) => {
    // console.log("Submitting OTP:", otp);
    setLoading(true);
    setError('')
    const VerifyOtp = otp;

    // Check if the OTP length is exactly 4 digits
    if (VerifyOtp.length !== 4) {
      setError('Please enter the complete 4-digit OTP.');
      setLoading(false);
      return;
    }

    let data = JSON.stringify({
      phoneNumber: `91${phoneNumber}`,
      otp: VerifyOtp,
    });

    let config = {
      method: 'post',
      url: `${process.env.REACT_APP_API_URI}/sms/verify-otp`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        if (response?.data?.success) {
          encryptionModule.encryptData('authToken', response?.data?.token)
          encryptionModule.encryptData('userData', response?.data?.userData)
          setLoading(false)
          setIsAuthenticated(true)
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Something Went Wrong!");
        setLoading(false)
      });
  };

  return (
    <React.Fragment>
      {!showOtpForm ? (
        <LoginForm handleSubmit={handleSubmit} error={error} loading={loading} />
      ) : (
        <OtpForm handleOtpSubmit={handleOtpSubmit} error={error} loading={loading} />
      )}
    </React.Fragment>
  );
};

export default Login;
