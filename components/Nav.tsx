import navlinks from "../data/navlinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link className={`mr-5`} href={nav.link} key={nav.title}>{nav.title}</Link>
      ))}
    </nav>
  );
};

export default Nav;