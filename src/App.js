import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
import RandomMeal from "./pages/RandomMeal";
import Category from "./components/Layout/Category";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Layout>
          <Routes>
            <Route path="/" element={<RandomMeal />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
