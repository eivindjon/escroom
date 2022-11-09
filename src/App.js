import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import MinSide from "./pages/MinSide";
import EscapeRooms from "./pages/EscapeRooms";
import ActiveRoom from "./pages/ActiveRoom.jsx";
import LagRom from "./pages/LagRom.jsx";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/minside" element={<MinSide />} />
          <Route path="/lagRom" element={<LagRom />} />
          <Route path="/escaperooms" element={<EscapeRooms />} />
          <Route path="/escaperooms/:id" element={<ActiveRoom />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
//Hey
export default App;
