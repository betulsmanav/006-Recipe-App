import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      
      <AppRouter />
    </div>
  );
}

export default App;
