import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header({ itemCount }) {
  return (
    <header style={{ position: "relative" }}>
      <h1>Finley's Cheese</h1>
      <nav style={{ position: "relative" }}>
        <ul style={{ position: "relative" }}>
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
          <li style={{ position: "relative" }}>
            <NavLink to="checkout" className="link cart-link">
              <ShoppingCartIcon className="cart-icon" />
            </NavLink>
          </li>
          {itemCount > 0 && <div className="item-counter">{itemCount}</div>}
        </ul>
      </nav>
    </header>
  );
}
