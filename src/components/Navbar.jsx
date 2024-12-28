import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          MyLogo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 hover:text-gray-300 transition duration-200'
                  : 'hover:text-gray-300 transition duration-200'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 hover:text-gray-300 transition duration-200'
                  : 'hover:text-gray-300 transition duration-200'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-500 hover:text-gray-300 transition duration-200'
                  : 'hover:text-gray-300 transition duration-200'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
