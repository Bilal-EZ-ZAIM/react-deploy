import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./compentes/Form";
import Header from "./compentes/Header";
import Home from "./pages/Home";
import Singin from "./pages/Singin";
import Singup from "./pages/Singup";
import Test from "./pages/Test";
import Error10 from "./compentes/Error10";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/login" element={<Singup />} />
        <Route path="/test" element={<Test />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Error10 />} />
        <Route path="404" element={<Error10 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
