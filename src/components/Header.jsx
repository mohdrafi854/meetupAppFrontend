import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <Link className="logo col-auto" to="/">
            <img
              src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg"
              alt=""
              width={100}
              height={80}
            />
          </Link>
          <div className="col-3">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
