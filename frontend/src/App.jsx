import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signin from "./Pages/Signin.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Send from "./Pages/Send.jsx";
import {useState} from "react";
function App(){
    return(
<BrowserRouter>
<Routes>
    <Route path={'/signin'} element={<Signin/>}/>
    <Route path={'/signup'} element={<SignUp/>}/>
    <Route path={'/dashboard'} element={<Dashboard/>}/>
    <Route path={'/send'} element={<Send/>}/>
</Routes>
</BrowserRouter>)
}

export  default App;