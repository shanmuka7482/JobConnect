import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import bg from "./assets/bg.png";
function App() {
  return (
    <div
      style={{
        backgroundImage: `URL(${bg})`,
        height: "100%",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
