import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Booking from "@/pages/Booking";
import AdminBookings from "@/pages/BookingsLists";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/admin" element={<AdminBookings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
