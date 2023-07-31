import "../styles/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="header-text">
        <h1>Welcome to Finley's Cheese!</h1>
        <h3>Shop for Finley's Cheese Today.</h3>

        <NavLink to="shop" className="home-shop-button">
          <button>Shop</button>
        </NavLink>
      </div>
    </div>
  );
}
