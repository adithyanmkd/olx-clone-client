import { useContext } from "react";

// import context
import { LoginModalContext } from "../context/LoginModalContext";

const useLoginModal = () => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error("useLoginModal must be used within LoginModalProvider");
  }

  return context;
};

export default useLoginModal;
