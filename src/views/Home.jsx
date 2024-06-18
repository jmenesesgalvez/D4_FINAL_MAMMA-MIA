/* import pizzas from '../assets/data/pizzas.json';
import PizzaCard from '../components/PizzaCard';
import '../assets/Home.css';

const Home = () => (
  <div className="container">
    <br></br><br></br><br></br>
    <img className="banner" src="http://imgfz.com/i/f1j0GBs.jpeg" alt="Banner-Mamma_Mia" />
    <div className="row">
      {pizzas.map(pizza => (
        <div className="col-md-4" key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </div>
      ))}
    </div>
  </div>
);

export default Home; */
import pizzas from '../assets/data/pizzas.json';
import PizzaCard from '../components/PizzaCard';
import '../assets/Home.css';

const Home = () => (
  <div className="container">
    <div className="text-center my-5">
      <img className="img-fluid" src="http://imgfz.com/i/f1j0GBs.jpeg" alt="Banner-Mamma_Mia" />
    </div>
    <div className="row">
      {pizzas.map(pizza => (
        <div className="col-md-4 mb-4" key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </div>
      ))}
    </div>
  </div>
);

export default Home;

