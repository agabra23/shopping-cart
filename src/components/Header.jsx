import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Finley's Cheese</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="shop" className="link">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="checkout" className="link">
              <ShoppingCartIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
