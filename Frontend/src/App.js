
import './App.css';
import LandingPage from './Components/LandingPage';
import Header from './Components/Header';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import Dashboard from './Components/Dashboard';
import LoadFunds from './Components/LoadFunds';
import SendFunds from './Components/SendFunds';
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getToken } from './services/LocalStorageServices';
// import { getToken } from './services/LocalStorageServices';

function App() {
  const { access_token } = useSelector(state => state.auth)
  const {local_token} = getToken()
  // const {access_token} = getToken().access_token
  return (
    <>
      <BrowserRouter>

        

          {/* <Routes>
            
            <Route exact path="/" element={!access_token  ? <LandingPage /> : <Navigate to="/dashboard" />}/>
              <Route exact path="/login" element={!access_token  ? <Login /> : <Navigate to="/dashboard" />} />
              <Route exact path="/register" element={!access_token  ? <Register /> : <Navigate to="/dashboard" />} />

          
            <Route exact path="/dashboard" element={!access_token  ? <Dashboard /> : <Navigate to="/login" />} />
              <Route exact path="/sendfunds" element={!access_token  ? <SendFunds /> : <Navigate to="/login" />}/>
              <Route exact path="/loadfunds" element={!access_token  ? <LoadFunds /> : <Navigate to="/login" />}/>
            
            
            <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          </Routes> */}
        
    
   
     
    
      <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/loadfunds" element={<LoadFunds/>}/>
          <Route exact path="/sendfunds" element={<SendFunds/>}/>
          
          
      </Routes>
  
      


      </BrowserRouter>




    </>
  );
}

export default App;
