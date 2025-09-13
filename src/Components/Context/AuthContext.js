import React, { createContext, useContext, useState, useEffect } from 'react';
import encryptionModule from '../Common/localStorageUtils';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook for easy access to the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // State to store user data
  const navigate=useNavigate()

  // Simulating a login check, you can replace this with an API call
  useEffect(() => {
    const checkLoginStatus = async () => {
      // Replace this with your actual login check logic
      const userToken = encryptionModule.decryptData('authToken');
      const userData = encryptionModule.decryptData('userData'); // Decrypt and retrieve user data
      
      if (userToken) {
        setIsAuthenticated(true);
        setUser(userData); // Set user data if available
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }

      setLoading(false);
    };

    checkLoginStatus();
  }, []);

  console.log('Login ---',isAuthenticated)

  // Function to handle login
  const login = (userData, token) => {
    encryptionModule.encryptData('authToken', token);
    encryptionModule.encryptData('userData', userData); // Encrypt and save user data
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData'); // Remove user data
    setIsAuthenticated(false);
    setUser(null);
    navigate('/auth/login')
  };

  if(loading){
      <div>Loading</div>
      return
  }

  // Provide the value to the children
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setIsAuthenticated, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
