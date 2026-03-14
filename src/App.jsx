import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.jsx";
import InsurancePage from "./pages/InsurancePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Contacts from "./pages/Contacts.jsx";
import Home from "./pages/Home.jsx";
import Available from "./pages/Available.jsx";
import Catalog from "./pages/Catalog.jsx";
import About from "./pages/About.jsx";
import Car from "./pages/Car.jsx";
import ShortCar from "./pages/ShortCar.jsx";
import CarsFL from "./pages/ClientPath/carsFL.jsx";
import CarsUL from "./pages/ClientPath/carsUL.jsx";
import NotFound from "./pages/NotFound.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/cars/fl" element={<CarsFL />} />
            <Route path="/cars/ul" element={<CarsUL />} />
            <Route path="/available" element={<Available />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/car/:id" element={<Car />} />
            <Route path="/shortcar" element={<ShortCar />} />
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
