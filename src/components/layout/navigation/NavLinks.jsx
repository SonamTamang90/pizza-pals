import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    label: "Menu",
    href: "/menu",
  },
  {
    id: 2,
    label: "Our Locations",
    href: "/locations",
  },

  {
    id: 3,
    label: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {links.map(({ id, label, href }) => {
        return (
          <NavLink
            key={id}
            to={href}
            className="text-lg font-semibold text-zinc-100 tracking-wide hover:text-secondary-500 transition-colors duration-300"
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
