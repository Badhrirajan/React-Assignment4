import './App.css';
import Cart from './Components/Pages/Cart';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/Pages/Header';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Header} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;
