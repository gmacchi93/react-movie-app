import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:movieId" element={<MovieDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
