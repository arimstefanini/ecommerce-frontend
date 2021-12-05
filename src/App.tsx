import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./modules/shop/pages/Home";
import ProductList from "./modules/shop/pages/ProductList";

const App = () => {
  return (
  <Router>
    <Routes>
    <Route path="/">
        <Home/>
      </Route>
      <Route path="/products">
        <ProductList/>
      </Route>
    </Routes>
  </Router>
  );
};

export default App;