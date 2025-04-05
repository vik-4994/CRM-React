import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      <Link to="/">Dashboard</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
