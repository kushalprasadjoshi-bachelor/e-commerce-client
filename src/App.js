import logo from "./logo.svg";
import "./App.css";
import "@mantine/core/styles.css";
import Navbar from "./components/partials/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Landing from "./pages/Landing";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route index element={<Landing />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </main>
  );
}

export default App;
