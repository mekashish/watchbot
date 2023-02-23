import React from "react";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import WebFont from "webfontloader";
import BusinessPage from "./Components/AdminPage/businessPage";
import Home from "./Components/HomePage/home";
import Registration from "./Components/RegistrationPage/Registration";
import Setting from "./Components/setting/setting";
import Blocklist from "./Components/Blocklist/Blocklist"
import Management from "./Components/ManagementPage/Management";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import Client from "./Components/Client Page/client";
import Login from "./Components/LoginPage/login"
// import Loader from "./Components/layout/Loader/loader";

function App() {
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Baloo Bhai"],
      }
    })
  },[]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Registration/>}/>,
        <Route path="/login" element={<Login/>}/>,
        {/* <Route path="/registerpage" element={<Registration/>}/> */}
        <Route path="/register" element={<Client/>}/>
        <Route path="/registerpage/main" element={<BusinessPage/>}/>
        <Route path="/registerpage/setting" element={<Setting/>}/>
        <Route path="/registerpage/setting" element={<Setting/>}/>
        <Route path="/todolist" element={<Blocklist/>}/>
        <Route path="/premise" element={<BusinessPage/>}>
          <Route index element={<Management/>}/>
          {/* <Route path="settings" element={<SettingsPage/>}/> */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
