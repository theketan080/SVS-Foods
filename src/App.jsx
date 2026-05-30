import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StoreLocator from "./pages/StoreLocator";
import MenuPage from "./pages/MenuPage";
import TrackingPage from "./pages/TrackingPage";
import KitchenPage from "./pages/KitchenPage";
import AboutPage from "./pages/AboutPage";

function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

function App() {
  return (
    <div className="overflow-hidden bg-[#f8efe8]">

      <Navbar />

      <Routes>

        
        <Route
          path="/"
          element={<HomePage />}
        />

        
        <Route
          path="/menu"
          element={<MenuPage />}
        />

      
        <Route
          path="/tracking"
          element={<TrackingPage />}
        />

       
        <Route
          path="/kitchen"
          element={<KitchenPage />}
        />

       
        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
  path="/store-locator"
  element={<StoreLocator />}
/>
      </Routes>

    </div>
  );
}

export default App;