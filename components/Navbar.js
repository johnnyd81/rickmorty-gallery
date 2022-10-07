import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/characters">
          <a>Character-gallery</a>
        </Link>
      </nav>
      {/*I used style jsx to custom style the navbar*/}
      <style jsx>
        {`
          .navbar {
            background-color: crimson;
            padding: 20px;
            outline: 1px solid lightgray;
          }
          .navbar a {
            text-decoration: none;
            font-weight: 700;
            color: white;
            font-size: 1.3rem;
            padding-left: 25px;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
