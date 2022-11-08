import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:movieId" element={<MovieDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
