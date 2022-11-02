import "./App.css";
import {Route, Routes, Router} from 'react-router-dom';
import {AuthContextProvider} from './context/AuthContext';
import MainNavbar from './components/MainNavbar'
import Home from "./pages/Home";
import Signin from "./pages/Signin"


function App() {
  return (
    <div>
      <AuthContextProvider>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
//Hey
export default App;
