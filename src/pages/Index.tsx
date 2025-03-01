
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthPage from "./AuthPage";

const Index = () => {
  const navigate = useNavigate();
  
  // For our MVP, we'll just render the AuthPage directly
  // In a real app, this might check auth state and redirect accordingly
  
  return <AuthPage />;
};

export default Index;
