import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/nav-bar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import './styles/main.css';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Project from './pages/Project';
import ScrollToTop from './utils/scrollToTop';

function App() {
      return (
            <div className="App">
                  <BrowserRouter>
                        <ScrollToTop></ScrollToTop>
                        <Navbar></Navbar>
                        <Routes>
                              <Route path="/" element={<Home></Home>}></Route>
                              <Route path="/project/:id" element={<Project></Project>}></Route>
                              <Route path="/projects" element={<Projects></Projects>}></Route>
                              <Route path="/contacts" element={<Contacts></Contacts>}></Route>
                        </Routes>
                        <Footer></Footer>
                  </BrowserRouter>
            </div>
      );
}

export default App;
