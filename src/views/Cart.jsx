/* import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calcular el total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Manejar decremento de cantidad
  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };

  // Manejar incremento de cantidad
  const handleIncrease = (id) => {
    increaseQuantity(id);
  };

  // Manejar eliminación del carrito
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="container">
      <br></br><br></br><br></br>
      <h1>Carrito</h1>
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name} - {item.quantity} x ${item.price}
            <div className="btn-group">
              <button onClick={() => handleDecrease(item.id)} className="btn btn-secondary">-</button>
              <button onClick={() => handleIncrease(item.id)} className="btn btn-secondary">+</button>
              <button onClick={() => handleRemove(item.id)} className="btn btn-danger">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default Cart;
 */
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Calcular el total sin decimales
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Manejar decremento de cantidad
  const handleDecrease = (id) => {
    decreaseQuantity(id);
  };

  // Manejar incremento de cantidad
  const handleIncrease = (id) => {
    increaseQuantity(id);
  };

  // Manejar eliminación del carrito
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="container mt-4">
      <br></br><br></br><br></br>
      <h1>Carrito</h1>
      <ul className="list-group mb-4">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - {item.quantity} x ${item.price}
            <div className="btn-group">
              <button onClick={() => handleDecrease(item.id)} className="btn btn-secondary">-</button>
              <button onClick={() => handleIncrease(item.id)} className="btn btn-secondary">+</button>
              <button onClick={() => handleRemove(item.id)} className="btn btn-danger">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${Math.floor(total)}</h3>
      <Link to="/gracias" className="btn btn-success">Comprar</Link>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  removeFromCart: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default Cart;
