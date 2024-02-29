import { Link } from "react-router-dom";

interface buttonStr {
  label: string;
  onClick: () => void;
}
const Header: React.FC<buttonStr> = ({ label, onClick }) => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between">
        <a
          href="#"
          className="text-gray-900 font-bold text-xl no-underline hover:no-underline focus:no-underline"
        >
          Medium
        </a>
        <button onClick={onClick}>
          <Link
            className="text-gray-900 font-semibold text-lg no-underline hover:underline focus:no-underline "
            to={label == "Publish" ? "/blog " : "/blog/edit"}
          >
            {label}
          </Link>
        </button>
      </nav>
    </header>
  );
};

export default Header;
