import Navigation from "./components/Layout/Navigation";
import RandomMeal from "./pages/RandomMeal";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <RandomMeal />
      </Layout>
    </>
  );
}

export default App;
