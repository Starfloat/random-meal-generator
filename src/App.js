import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
import RandomMeal from "./pages/RandomMeal";
import MealsByCategory from "./pages/MealsByCategory";
import MealByArea from "./pages/MealByArea";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<RandomMeal />} />
          <Route path="/category/:category" element={<MealsByCategory />} />
          {/* <Route path="/category/:category/" element={<MealsByCategory />} /> */}
          <Route path="/area/:area" element={<MealByArea />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
