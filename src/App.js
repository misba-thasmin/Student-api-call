import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';
import Home from './components/Home';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes >
        <Route path="/Home" element={<Home />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/View" element={<View />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
