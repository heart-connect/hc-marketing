import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { nonAuthRoutes, userRoutes } from './Routes/AllRoutes';
import NonAuthLayout from './Routes/middleware/NonAuthLayout';
import { AuthProvider } from './Components/Context/AuthContext';

const App = () => {
  const renderRoute = (route, idx, isProtected = false) => (
    <Route
      key={idx}
      path={route.path}
      element={
        isProtected
          ?
          <NonAuthLayout>
            {route.component}
          </NonAuthLayout>
          :
          route.component
      }
    />
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {userRoutes.map((route, idx) => renderRoute(route, idx, true))}
          {nonAuthRoutes.map((route, idx) => renderRoute(route, idx))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;