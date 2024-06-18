import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import PizzaDetail from './views/PizzaDetail';
import Cart from './views/Cart';
import CartProvider from './context/CartContext';
import Gracias from './components/Gracias';

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<PizzaDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </Router>
  </CartProvider>
);

export default App;


