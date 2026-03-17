import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {FaShieldAlt,FaEnvelope,FaArrowLeft} from "react-icons/fa";
import "./forgotpassword.css";
const ForgotPassword=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const validate=()=>{
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email.trim()){
            setError("Email is required");
            return false;
        }
        if(!emailPattern.test(email)){
            setError("Enter a valid email");
            return false;
        }
        setError("");
        return true;
    };
    const handleSendOTP=()=>{
        if(validate()){
            navigate("/emailverification");
        }
    };
    return (
        <div className="forgot-wrapper">
            <div className="forgot-card">
                <div className="icon-circle">
                    <FaShieldAlt/>
                </div>
                <h4 className="text-center fw-bold mt-3">
                    Forget Password ?
                </h4>
                <p className="text-center text-muted small">
                    Enter your email to reset your password.
                </p>
                <hr/>
                <div className="mb-3">
                    <label>Email Address</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaEnvelope/>
                        </span>
                        <input type="email" className="form-control" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    {error && <small className="text-danger">{error}</small>}
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleSendOTP}>
                    Send OTP
                </button>
                <p className="back-link" onClick={()=>navigate("/login")}>
                    <FaArrowLeft/> Back
                </p>
            </div>
        </div>
    );
};
export default ForgotPassword;