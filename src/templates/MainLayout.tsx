import { Outlet } from "react-router-dom";

// import components
import Navbar from "../components/organisms/Navbar";
import LoginModal from "../components/molecules/LoginModal";

// import hooks
import useLoginModal from "../hooks/useLoginModal";
import Footer from "../components/organisms/Footer";

const MainLayout = () => {
  const { closeLoginModal, isLoginModalOpen } = useLoginModal();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* Modals */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default MainLayout;
