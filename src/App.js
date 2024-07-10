import "./App.css";
import Caro from "./components/Acarosel/Caro";
import Bcarosel from "./components/Bcarosel/Bcarosel";
import Double from "./components/Double/Double";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NewsA from "./components/NewsA/NewsA";
import Single from "./components/Single/Single";
import Testscroll from "./components/Textscroll/Testscroll";

function App() {
  return (
    <div>
      <Navbar />
      <Caro />
      <Testscroll />
      <Bcarosel />
      <Single />
      <Double />
      <NewsA/>
      <Footer/>
    </div>
  );
}

export default App;
