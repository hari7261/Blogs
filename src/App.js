import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcomepage from './pages/welcomepage';
import Layout from './pages/layout';
import Home from './pages/home';
import Tech from './pages/tech';
import Sports from './pages/sports';
import Cooking from './pages/cooking';
import Health from './pages/health';
import Investments from './pages/investments';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout><Welcomepage /></Layout>} />
      <Route path="/home" element={<Layout><Home /></Layout>} />
      <Route path="/tech" element={<Layout><Tech /></Layout>} />
      <Route path="/sports" element={<Layout><Sports /></Layout>} />
      <Route path="/cooking" element={<Layout><Cooking /></Layout>} />
      <Route path="/health" element={<Layout><Health /></Layout>} />
      <Route path="/investments" element={<Layout><Investments /></Layout>} />
    </Routes>
  </Router>
  );
}

export default App;

