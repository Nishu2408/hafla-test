import './App.css';
import Calc from './Pages/Calculator'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router basename="/">
          <Routes>
            <Route path="/" element={<Calc/>} />   
          </Routes>
      </Router>
  );
}

export default App;


