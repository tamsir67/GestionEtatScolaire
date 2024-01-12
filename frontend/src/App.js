import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import TableauBord from "./components/TableauBord";
import './components/App.css'
import AddEmployee from "./components/addemployee.js";
import EditEmployee from './components/editemployee.js';
import Employee from "./components/employee.js";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route path='/dashboard' element={<><Navbar /><Dashboard /></>} />
      <Route path='/tb' element={<TableauBord OpenSidebar={OpenSidebar} />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;