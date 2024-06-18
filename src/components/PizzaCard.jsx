import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CartContext } from '../context/CartContext';
import '../assets/PizzaCard.css';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
       <h5 className="card-title">{pizza.name.toUpperCase()}</h5>
        <div className="ingredientes-list">
          <p className="ingredientes-title"><b>Ingredientes:</b></p>
          <ul className="ingredientes">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">
                {ingredient}
              </li>
              
            ))}
          </ul>
          <p className="mb-4">Precio: ${pizza.price}</p>
        </div>
        <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">Ver Más</Link>
        <button onClick={() => addToCart(pizza)} className="btn btn-danger">Añadir</button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PizzaCard;



