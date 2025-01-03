const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 overflow-hidden">
        <img src="/logo.png" alt="logo" className="w-full" />
      </div>
      <span className="font-grotesk font-bold uppercase tracking-wide">
        Pizza Pals
      </span>
    </div>
  );
};

export default Logo;
