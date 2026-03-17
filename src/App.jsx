import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import EmailVerification from "./pages/EmailVerification";
import AccountDetails from "./pages/AccountDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
const App=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/account" element={<AccountDetails/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/emailverification" element={<EmailVerification/>}/>
                <Route path="/resetpassword" element={<ResetPassword/>}/>
                <Route path="/" element={<SignupPage/>}/>
            </Routes>
        </Router>
    );
};
export default App;