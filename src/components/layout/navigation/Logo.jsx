import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Link
        to="/"
        className="font-grotesk text-xl text-zinc-100 font-bold uppercase tracking-wide"
      >
        Pizza Pals
      </Link>
    </div>
  );
};

export default Logo;
