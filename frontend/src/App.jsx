import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import OrdersPage from './pages/OrdersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import PaymenPage from './pages/PaymenPage';

// Import Components
import Navbar from './components/Navbar';
import Combination from './components/Combination';
import ToyItems from './components/ToyItems';
import AddressPage from './pages/AddressPage';
import SaveAddress from './pages/SaveAddress';
const App = () => {
  return (
    <div>
      {/* Navbar always visible */}

      {/* Toaster for showing notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Main page routing */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<Combination />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/toys" element={<ToyItems />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/address' element={<AddressPage />} />
        <Route path='/save-address' element={<SaveAddress />} />
        <Route path="/payment" element={<PaymenPage />} />
      </Routes>
    </div>
  );
};

export default App;
