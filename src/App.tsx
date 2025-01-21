import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Newneek from './newneek'; 
import Gradient from './gradient';
import Poket from './poket';
import './index.css';
function App() {
  return (
    <Router>
      <div>
        <table>
          <tbody className='flex flex-column gap-12'>
            <tr className='ml-10'>
              <td><Link to="/newneek">1</Link></td> 
            </tr>
            <tr>
              <td><Link to="/gradient">2</Link></td>
            </tr>
            <tr>
              <td><Link to="/poket">3</Link></td>
            </tr>
          </tbody>
        </table>

        <Routes>
          <Route path="/" element={<h1>Welcome! Click a link above.</h1>} />
          <Route path="/newneek" element={<Newneek />} /> 
          <Route path="/gradient" element={<Gradient />} /> 
          <Route path="/poket" element={<Poket />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
