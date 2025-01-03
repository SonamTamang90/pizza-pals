import Logo from "./Logo";
import NavLinks from "./NavLinks";
import RightNav from "./RightNav";

const Navigation = () => {
  return (
    <nav className="h-16">
      <div className="max-w-6xl mx-auto px-11 md:px-20 flex items-center justify-between h-full">
        <Logo />
        <NavLinks />
        <RightNav />
      </div>
    </nav>
  );
};

export default Navigation;
