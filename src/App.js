import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcomepage from './pages/welcomepage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Welcomepage />} />
        </Routes>
      </Router>
  );
}

export default App;

