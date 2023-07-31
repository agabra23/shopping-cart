import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App({ itemCount }) {
  return (
    <>
      <Header itemCount={itemCount} />
      <Outlet />
    </>
  );
}

export default App;
