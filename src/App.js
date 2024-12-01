import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home/Home';
import Experience from './component/Experience/Experience'
import Project from './component/Project/Project'
import Tools from './Tool/Tools'
import Thoughts from './component/Thoughts/Thoughts'
import Navbar from './component/Nav/nav-bar';

function App() {
  return (
    <Router>
      <Navbar/>
     {/* <nav>
       
        <Link to="/"><BsHouse className='new' /></Link> | 
        <Link to="/project"><BsFolder className='new'/></Link> | 
        <Link to="/experience"><BsSuitcaseLg className='new'/></Link>
        <Link to="/tools"><BsWrenchAdjustable className='new'/></Link>
        <Link to="/thoughts"><BsPencilSquare className='new'/></Link>
      </nav>  */}

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </Router>
  );
}

export default App;
