import { Route, Routes } from "react-router-dom";
import Message from './Components/Message';
import Market from './Components/Market';
import Apply from './Components/Apply';
import Scroll from './Components/Scroll';
import About from './Components/About';
import AddProductModal from './Components/AddProductModal.js';
import Acard from './Components/Acard';
import Scard from './Components/Scard';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Settings from "./Components/Settings";
import Profile from "./Components/profile";

import React,{useState} from "react";

export default function Router() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here and set isLoggedIn to true
    setIsLoggedIn(true);
  };

    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/message" element={<Message />} />
            <Route path="/market"  element={<Market />} />
            <Route path="//market/add"  element={<AddProductModal />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/acard" element={<Acard />} />
            <Route path="/scroll" element={<Scroll />} />
            <Route path="/scard" element={<Scard/>} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}