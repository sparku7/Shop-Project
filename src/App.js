
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>       
      </BrowserRouter>

    </div>
  );
}

export default App;
