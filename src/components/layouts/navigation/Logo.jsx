import { Link } from "react-router-dom";

const Logo = ({ onScrolled }) => {
  return (
    <Link to="/">
      {onScrolled ? (
        <img src="/images/logo/black-logo.png" alt="brand logo" />
      ) : (
        <img src="/images/logo/white-logo.png" alt="brand logo" />
      )}
    </Link>
  );
};

export default Logo;
