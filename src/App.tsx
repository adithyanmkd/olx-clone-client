import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import MainLayout from "./templates/MainLayout";

// import provider
import LoginModalProvider from "./context/LoginModalProvider";

const title =
  "OLX - Free classifieds in India, Buy and Sell for free anywhere in India with OLX Online Classified Advertising";

function App() {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginModalProvider>
                <MainLayout />
              </LoginModalProvider>
            }
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
