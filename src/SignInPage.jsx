import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

function SignInPage() {
  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/download (18).jpeg')" }} // 👈 replace with your background image
    >
      {/* Overlay for darker readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Clerk SignIn Form - Glassmorphic */}
      <div className="relative z-10 flex w-full max-w-md items-center justify-center p-6">
        <SignUp

       
         
          appearance={{
            elements: {
              card: "bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-6 w-full",
              headerTitle: "text-white text-2xl font-bold",
              headerSubtitle: "text-gray-200",
              formFieldInput:
                "bg-white/20 text-white placeholder-gray-300 border border-white/40 rounded-md focus:ring-2 focus:ring-[#ff6b1a]",
              formButtonPrimary:
                "bg-[#ff6b1a] hover:bg-[#ff8533] text-white font-semibold py-2 px-4 rounded-lg transition shadow-md",
              socialButtonsBlockButton:
                "bg-white/20 text-white hover:bg-white/30 border border-white/30 rounded-lg",
              footerActionText: "text-gray-200",
              footerActionLink: "text-[#ff6b1a] hover:underline",
            },
          }}
        />
      </div>
    </div>
  );
}

export default SignInPage;    