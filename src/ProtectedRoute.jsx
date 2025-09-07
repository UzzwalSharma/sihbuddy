import React from "react";
import { useUser } from "@clerk/clerk-react";
import SignInPage from "./SignInPage";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!isSignedIn) {
      toast.error("You need to sign in first!");
    return <SignInPage />; 
  }

  return children;
}

export default ProtectedRoute;
