import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/partials/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
