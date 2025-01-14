import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <img
        alt="hola"
        src="https://winaero.com/blog/wp-content/uploads/2021/05/taskmgr-task-manager-fluent-modern-icon.png"
      />
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold hover:text-blue-200">
          TaskManager
        </Link>
      </div>

      {/* Botones de acciones */}
      <div className="flex items-center space-x-4">
        {/* Botón para cambiar la vista */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cambiar Vista
        </button>

        {/* Información del usuario */}
      </div>
    </header>
  );
};

export default Header;
