import { createContext } from "react";

type LoginModalContextType = {
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
};

export const LoginModalContext = createContext<
  LoginModalContextType | undefined
>(undefined);
