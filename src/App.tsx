import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Newneek from './newneek'; 
import Gradient from './gradient';
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
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <Routes>
          <Route path="/" element={<h1>Welcome! Click a link above.</h1>} />
          <Route path="/newneek" element={<Newneek />} /> 
          <Route path="/gradient" element={<Gradient />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
