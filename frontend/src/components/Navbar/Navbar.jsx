import { Link } from 'react-router-dom';
import Logo from '../../assets/Marjane.png';
import '../../index.css';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-sky-300     p-4 text-white shadow-md">
      <div className="flex items-center">
        <div className="w-32 h-auto">
          <Link to="/">
            <img src={Logo} alt="Marjane logo" className="max-w-full h-auto" />
          </Link>
        </div>
      </div>

      <div className="flex w-auto items-center justify-end flex-grow">
        <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded-lg text-black bg-white border-gray-400 hover:border-transparent hover:text-white  hover:bg-black transition-colors duration-300 ease-in-out">
          Se Connecter 
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;