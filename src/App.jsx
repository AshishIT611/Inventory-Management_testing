import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
const App=()=>{
  return (
    <Router>
        <div className="app-container d-flex">
            <Sidebar/>
            <div className="main-section w-100">
                <Topbar/>
                <div className="content p-3">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </Router>
  );
};
export default App;