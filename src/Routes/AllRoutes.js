import React from "react";
import NotFound from "../Screens/Common/NotFound";
import Home from "../Screens/User/Home";
import About from "../Screens/User/About";
import Contact from "../Screens/User/Contact";
import Services from "../Screens/User/Services";
import Blogs from "../Screens/User/Blogs";
import { TermAndCondition } from "../Screens/User/TermAndCondition";
import { RefundAndCancellation } from "../Screens/User/RefundAndCancellation";
import { PrivacyPolicy } from "../Screens/User/PrivacyPolicy";
import Login from "../Screens/NonAuth/Login";
import { Navigate } from "react-router-dom";
import Profile from "../Screens/User/Profile";
import CoinPlans from "../Screens/User/CoinPlans";
import PaymentSuccess from "../Screens/User/PaymentSuccess";
import ChildSafetyStandards from "../Components/ChildSafety/ChildSafetyStandards";
import { ChildSafety } from "../Screens/User/ChildSafety";

const userRoutes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/contact", component: <Contact /> },
  { path: "/services", component: <Services /> },
  { path: "/blogs", component: <Blogs /> },
  { path: "/profile", component: <Profile /> },
  { path: "/coin-plans", component: <CoinPlans /> },
  { path: "/payment-success", component: <PaymentSuccess /> },
  { path: "/privacy-policy", component: <PrivacyPolicy /> },
  { path: "/Child-Safety-Standards", component: <ChildSafetyStandards /> },
  { path: "/refund-and-cancellation", component: <RefundAndCancellation /> },
  { path: "/term-and-condition", component: <TermAndCondition /> },
  { path: "/child-safety", component: <ChildSafety /> },
  { path: "*", component: <NotFound /> },
];

const nonAuthRoutes = [
  {
    path: "/auth/",
    exact: true,
    component: <Navigate to="/auth/login" />,
  },
  { path: "/auth/login", component: <Login /> },
  { path: "/auth/*", component: <NotFound /> },
];

export { userRoutes, nonAuthRoutes };
