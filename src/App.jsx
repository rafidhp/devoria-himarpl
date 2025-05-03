import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { StrukturOrganisasi } from "./pages/StrukturOrganisasi";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="struktur" element={<StrukturOrganisasi />} />
        <Route path="*" element={<h1>Under Construction :D</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
