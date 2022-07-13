import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Pastboxes } from "./Pages/Pastboxes/Pastboxes";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="pastboxes" element={<Pastboxes />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
