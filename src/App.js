import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Navbar />
      <div className="container main">
        <Pages />
      </div>
      <Footer />
    </>
  );
}

export default App;
