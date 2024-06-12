import React, { useEffect } from 'react';
import { Header } from './MyComponents/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './MyComponents/Home';
import { Contact } from './MyComponents/Contact';
import { About } from './MyComponents/About';
import { Login } from "./MyComponents/login";
import { Register } from "./MyComponents/Register";
import { Categories } from "./MyComponents/Categories";
import { Error } from './MyComponents/Error';
import { Logout } from './MyComponents/logout';
import { Product } from './MyComponents/Product';
import { Cart } from './MyComponents/Cart';
import { Footer } from './MyComponents/Footer';
import { Success } from './MyComponents/success';
import { Cancel } from './MyComponents/cancel';
import { useCartContext } from './Context/CartContext.jsx';




function App() {
  const { category, setCategory } = useCartContext();
  useEffect(() => {
    setCategory();
  }, [category]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Register' element={<Register />} />
          <Route exact path={'/Product/' + category} element={<Product />} />
          <Route exact path='/Categories' element={<Categories />} />
          <Route exact path='/Logout' element={<Logout />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Success' element={<Success />} />
          <Route exact path='/Cancel' element={<Cancel />} />
          <Route exact path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


export default App;
