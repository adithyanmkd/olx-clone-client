import React from "react";
import { X, Phone } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 pt-12">
          {/* Guitar icon */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center mb-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full relative">
                <div className="absolute top-2 left-2 w-6 h-6 bg-yellow-700 rounded-full"></div>
                <div className="absolute top-1 right-1 w-2 h-6 bg-yellow-800 rounded"></div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h2 className="text-xl font-medium text-gray-800 text-center mb-8 leading-relaxed">
            Help us become one of the safest places
            <br />
            to buy and sell
          </h2>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>

          {/* Continue with phone button */}
          <button className="w-full cursor-pointer bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors mb-4 flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Continue with phone
          </button>

          {/* Continue as user option */}
          <div className="bg-gray-50 cursor-pointer hover:bg-gray-100 border border-gray-200 rounded-lg p-3 mb-4 flex items-center">
            {/* <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">A</span>
            </div> */}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                Continue with google
              </p>
            </div>
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>
          </div>

          {/* OR divider */}
          <div className="text-center text-gray-400 font-medium mb-4">OR</div>

          {/* Login with Email link */}
          <div className="text-center">
            <button className="text-gray-800 font-medium hover:text-blue-600 transition-colors underline">
              Login with Email
            </button>
          </div>

          {/* Footer text */}
          <div className="mt-8 text-center text-xs text-gray-400 leading-relaxed">
            <p className="mb-2">All your personal details are safe with us.</p>
            <p>
              If you continue, you are accepting
              <a href="#" className="text-blue-500 hover:underline">
                OLX Terms and Conditions
              </a>
              and
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
