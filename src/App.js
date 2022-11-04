import "./App.css";
import { Route, Routes, Router } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import MinSide from "./pages/MinSide";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/minside" element={<MinSide />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
//Hey
export default App;
