import Header from "./components/Header";
import Footer from "./components/Footer";
import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SignUp from "./screens/auth/SignUp";
import DashboardForm from "./screens/dashboard";

import Login from "./screens/auth/Login";
import { UserContextProvider } from './contexts/userContext';

function App() {
  return (
    <>    
    <UserContextProvider>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      </UserContextProvider>
    </>
  );
}

export default App;
