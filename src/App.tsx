import { useEffect } from "react";
import Navbar from "./components/organisms/Navbar";

const title =
  "OLX - Free classifieds in India, Buy and Sell for free anywhere in India with OLX Online Classified Advertising";

function App() {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      <div className="min-h-screen w-full font-sans">
        <Navbar />
        {/* <ProductSection /> */}
      </div>
    </>
  );
}

export default App;
