import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
import RandomMeal from "./pages/RandomMeal";
import MealsByCategory from "./pages/MealsByCategory";
import MealByArea from "./pages/MealByArea";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<RandomMeal />} />
            <Route path="/category/:category" element={<MealsByCategory />} />
            <Route path="/area/:area" element={<MealByArea />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
