import Image from "next/image";
import navlinks from "../data/navlinks";
import Link from "next/link";
import metadata from "../data/metadata";

const Nav = () => {
  return (
    <header
      className={`w-full max-w-6xl flex flex-row justify-between items-center bg-white h-16`}
    >
      <div className={`flex flex-row items-center`}>
        <Image
          src={`/logo.jpg`}
          alt="로고"
          width={40}
          height={40}
          objectFit={`cover`}
          className={``}
        />
        <span className={`mx-2 font-extrabold text-lg`}>
          {metadata.title}
        </span>
      </div>
      <nav>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            <a className={`mr-3`}>{nav.title}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;