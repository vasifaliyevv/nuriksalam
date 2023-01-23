import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Index'
import Footer from './Components/Footer/Index'
import Home from './Pages/Home/Index'
import AddCustomer from './Pages/AddCustomer/Index'
import CostumerDetail from './Pages/Home/CostumerDetail'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/addcustomer" element={<AddCustomer/>} />
    <Route path="/detail/:id" element={<CostumerDetail/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
