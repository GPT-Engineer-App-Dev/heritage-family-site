import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Slektstreff2019 from "./pages/Slektstreff2019.jsx";
import TidigereSlektstreffer from "./pages/TidigereSlektstreffer.jsx";
import Historie from "./pages/Historie.jsx";
import Kontakt from "./pages/Kontakt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/slektstreff2019" element={<Slektstreff2019 />} />
        <Route exact path="/tidigereslektstreffer" element={<TidigereSlektstreffer />} />
        <Route exact path="/historie" element={<Historie />} />
        <Route exact path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;