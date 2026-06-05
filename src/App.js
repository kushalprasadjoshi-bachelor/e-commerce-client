import logo from "./logo.svg";
import "./App.css";
import "@mantine/core/styles.css";
import Navbar from "./components/partials/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Products from "./pages/Products";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
