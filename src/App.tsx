import Home from "./pages/Home";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import  { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Router>
      <div className='container'>
      <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
