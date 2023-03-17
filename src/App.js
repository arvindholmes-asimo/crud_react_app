import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/pageNotFound';
import Adduser from './components/Adduser';
import EditUser from './components/edit';
import User from './components/Users';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/adduser" element={<Adduser />}></Route>
          <Route exact path="/users/edit/:id" element={<EditUser />}></Route>
          <Route exact path="/users/:id" element={<User />}></Route>
          <Route exact path="*" element={< PageNotFound />}></Route>
        </Routes>



      </div>
    </Router>

    </HashRouter>
  );
}

export default App;
