import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para añadir al carrito
  const addToCart = (pizza) => {
    const existingItem = cart.find(item => item.id === pizza.id);

    if (existingItem) {
      // Si la pizza ya está en el carrito, incrementar su cantidad
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si la pizza no está en el carrito, agregarla con cantidad inicial 1
      setCart(prevCart => [...prevCart, { ...pizza, quantity: 1 }]);
    }
  };

  // Función para eliminar del carrito por ID
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  // Función para aumentar la cantidad de un item en el carrito por ID
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Función para disminuir la cantidad de un item en el carrito por ID
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  // Calcular la cantidad total de items en el carrito
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalItemsInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;


