import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Finley's Cheese</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="checkout">
              <ShoppingCartIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
