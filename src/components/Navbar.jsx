import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 transition hover:scale-110 hover:text-blue-700">
          Example Site
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-500 transition hover:scale-110">Home</Link>
          <Link to="/features" className="hover:text-blue-500 transition hover:scale-110">Features</Link>
          <Link to="/pricing" className="hover:text-blue-500 transition hover:scale-110">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-500 transition hover:scale-110">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;