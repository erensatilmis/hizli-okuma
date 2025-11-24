// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Goals from "./pages/Goals";
import Methods from "./pages/Methods";
import TypesOfEducation from "./pages/TypesOfEducation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50/70 via-white to-white text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/egitim-icerigi" element={<Curriculum />} />
          <Route path="/hedeflerimiz" element={<Goals />} />
          <Route path="/yontemlerimiz" element={<Methods />} />
          <Route path="/egitim-turlerimiz" element={<TypesOfEducation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
