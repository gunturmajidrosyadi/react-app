import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navbar from "./components/Hero";
import Product from "./components/Product"
import TitleService from "./components/TitleService";
import Service from "./components/Service";
import Quote from "./components/Quote";
import Article from "./components/Article";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route  path="/Blog" component={Blog} />
        <Product />
        <TitleService />
        <Service />
        <Quote />
        <Article />
        <Contact />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
