import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Admin from './pages/Admin.js';
import Finance from './pages/Finance.js';
import Inventory from './pages/Inventory.js';
import Sales from './pages/Sales.js';
import Summary from './pages/Summary.js';
import Navbar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/admin' element={<Admin />} />
     <Route path='/finance' element={<Finance />} />
     <Route path='/inventory' element={<Inventory />} />
     <Route path='/sales' element={<Sales />} />
     <Route path='/summary' element={<Summary />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
