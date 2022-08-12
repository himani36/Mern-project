
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Loginadmin from './Pages/Loginadmin';

function App() {
  return (
    <div >
     <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Loginadmin' element={<Loginadmin />} />
          <Route path='/Register' element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
