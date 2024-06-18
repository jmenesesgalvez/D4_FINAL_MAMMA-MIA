import { Link } from 'react-router-dom';

const Gracias = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Gracias por preferir nuestros productos</h1>
      <img src="http://imgfz.com/i/f1j0GBs.jpeg" alt="Imagen Corporativa" className="img-fluid mb-4" style={{ maxWidth: '600px' }} />
      <Link to="/" className="btn btn-primary">Volver al Home</Link>
    </div>
  );
};

export default Gracias;

