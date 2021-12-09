import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Cart from './modules/shop/pages/Cart';
import Home from "./modules/shop/pages/Home";
import Login from './modules/shop/pages/Login';
import ProductList from "./modules/shop/pages/ProductList";
import Register from './modules/shop/pages/Register';

const App = () => {
  const user = true;
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register">
        {user ? <Navigate to="/register"/> : <Login/>}
      </Route>
      <Route path="/login">
        {user ? <Navigate to="/login"/> : <Register/>}
      </Route>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/products/:category" element={<ProductList/>}/>
      <Route path="/products/:id" element={<ProductList/>}/>
      <Route path="/cart/:id" element={<Cart/>}/>
    </Routes>
  </Router>
  );
};

export default App;