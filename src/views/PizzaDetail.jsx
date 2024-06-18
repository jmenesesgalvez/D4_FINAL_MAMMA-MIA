import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import pizzas from '../assets/data/pizzas.json';

const PizzaDetail = () => {
  const { id } = useParams();
  const pizza = pizzas.find(pizza => pizza.id === id);
  const { addToCart } = useContext(CartContext);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div className="container mt-4">
      <br></br><br></br><br></br>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={pizza.img} alt={pizza.name} className="img-fluid mb-4" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{pizza.name.toUpperCase()}</h1>
          <p className="mb-4">{pizza.desc}</p>
          <div className="mb-4">
            <h5>Ingredientes:</h5>
            <ul className="list-unstyled">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">
                  <i className="bi bi-pizza me-2"></i>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-4">Precio: ${pizza.price}</p>
          <button onClick={() => addToCart(pizza)} className="btn btn-success me-2">Agregar al Carrito</button>
          <Link to="/" className="btn btn-primary">Volver al Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;








