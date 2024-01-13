import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import RootState from './context/RootState';
import { Topics } from './components/Topic/Topics';

function App() {
  return (
    <Router>
      {/* <UserState> */}
      <RootState>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </RootState>
      {/* </UserState> */}
    </Router>
  );
}

export default App;
