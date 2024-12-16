import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MangeEmp from "./pages/NewAdd";







export default function App() {
  return (
    <BrowserRouter>

      <Routes>


       
        <Route path="/" element={<MangeEmp />} />
       
       
  
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
