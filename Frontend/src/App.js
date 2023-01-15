
import './App.css';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import { Login } from './Components/Login';
import {Register} from './Components/Register';
import Dashboard from './Components/Dashboard';
import {Route , Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
      
    
    </BrowserRouter>
    
    
    

    </>
    );
}

export default App;
