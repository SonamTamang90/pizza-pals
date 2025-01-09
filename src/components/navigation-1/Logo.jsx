import { Link } from "react-router-dom";

const Logo = ({ onScrolled }) => {
  return (
    <div>
      <Link to="/" className="flex items-center">
        {onScrolled ? (
          <img src="/images/logo/black-logo.png" alt="Brand dark logo" />
        ) : (
          <img src="/images/logo/white-logo.png" alt="Brand dark logo" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
