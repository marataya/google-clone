import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './SearchPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/' element = {<Home/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
