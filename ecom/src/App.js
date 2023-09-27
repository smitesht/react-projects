import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import { BsCart } from "react-icons/bs";

function App() {
  return (
    <div className="app-container">
      <header className="header-container">
        <NavLink to="/" className="brand">
          <h1>eStore</h1>
        </NavLink>
        <NavLink className="cart">
          <BsCart />
        </NavLink>
      </header>
      <main className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </main>
      <footer className="footer-container">
        <p>Developed By: Smitesh Tamboli</p>
      </footer>
    </div>
  );
}

export default App;
