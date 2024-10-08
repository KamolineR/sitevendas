import { BrowserRouter as Router, Routes, Rout } from "react-router-dom";
import Header from './components/Header';

import Home from './pages/Home';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';

function App() {
   return (
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/cadastrar-produto" element={<AddProduct
/>} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
    </Router>
  );
}

  export default App;