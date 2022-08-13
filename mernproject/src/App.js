
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Loginadmin from './Pages/Loginadmin';
import Dashbaord1 from './Pages/Dashboardadmin';
function App() {
  return (
    <div >
     <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Loginadmin' element={<Loginadmin />} />
          <Route path='/Register' element={<Register />} />
          <Route path='Dashboardadmin' element={<Dashbaord1 />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
