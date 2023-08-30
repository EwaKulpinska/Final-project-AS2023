import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Pages />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
