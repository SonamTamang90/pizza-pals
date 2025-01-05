import { Link } from "react-router-dom";

const Logo = ({ onScrolled }) => {
  return (
    <div>
      <Link to="/" className="flex items-center">
        <span
          className={`font-grotesk text-xl md:text-2xl tracking-wider uppercase font-bold ${
            onScrolled ? "text-zinc-950" : "text-white"
          }`}
        >
          Pizza Pals
        </span>
      </Link>
    </div>
  );
};

export default Logo;
