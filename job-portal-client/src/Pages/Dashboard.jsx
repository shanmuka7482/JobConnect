import { Outlet } from "react-router-dom";
import DashSidebar from "../Components/DashSidebar";
function App() {
  return (
    <div
      // style={{
      //   backgroundImage: `URL(${bg})`,
      //   height: "100%",
      //   width: "100vw",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >
      <DashSidebar />
      <Outlet />
    </div>
  );
}

export default App;
