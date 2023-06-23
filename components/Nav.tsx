import Image from "next/image";
import navlinks from "../data/navlinks";
import Link from "next/link";
import metadata from "../data/metadata";

const Nav = () => {
  return (
    <header
      className={`w-full max-w-7xl flex flex-row justify-between items-center my-1 bg-white`}
    >
      <div className={`flex flex-row items-center ml-5`}>
        <Image
          src={`/logo.jpg`}
          alt="로고"
          width={40}
          height={40}
          objectFit={`cover`}
          className={`rounded-full`}
        />
        <span className={`mx-2 font-extrabold text-lg`}>
          {metadata.title}
        </span>
      </div>
      <nav>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            <a className={`mr-5`}>{nav.title}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Nav;