import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './data/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Más rutas próximamente: /login, /registro, /producto/:id */}
      </Routes>
    </Router>
  );
}

export default App;
