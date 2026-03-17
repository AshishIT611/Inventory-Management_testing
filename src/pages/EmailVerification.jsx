import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {FaEnvelopeOpen} from "react-icons/fa";
import "./emailverification.css";
const EmailVerification=()=>{
    const inputs=useRef([]);
    const navigate=useNavigate();
    const handleChange=(e,index)=>{
        const value=e.target.value;
        if(!/^[0-9]$/.test(value)){
            e.target.value="";
            return;
        }
        if(value.length===1 && index<3){
            inputs.current[index+1].focus();
        }
    };
    const handleKeyDown=(e,index)=>{
        if(e.key==="Backspace" && !e.target.value && index>0){
            inputs.current[index-1].focus();
        }
    };
    const handleSubmit=()=>{
        const otp=inputs.current.map(input=>input.value).join("");
        if(otp.length<4){
            alert("Please enter complete OTP");
            return;
        }
        navigate("/resetpassword");
    }
    return (
        <div className="verify-wrapper">
            <div className="verify-card">
                <div className="icon-circle">
                    <FaEnvelopeOpen/>
                </div>
                <h4 className="text-center fw-bold mt-3">
                    Email verification Code
                </h4>
                <p className="text-center text-muted small">
                    We've sent a code at user@gmail.com
                </p>
                <hr/>
                <div className="otp-container">
                    {[0,1,2,3].map((item,index)=>(
                        <input key={index} type="text" maxLength="1" className="otp-input" ref={(el)=>inputs.current[index]=el} onChange={(e)=>handleChange(e,index)} onKeyDown={(e)=>handleKeyDown(e,index)}/>
                    ))}
                </div>
                <button className="btn btn-primary w-100 mt-4" onClick={handleSubmit}>
                    Submit Code
                </button>
                <p className="text-center small text-muted mt-3">
                    Experiencing issues receiving the code ?
                </p>
                <p className="text-center resend-link">
                    Resend
                </p>
            </div>
        </div>
    );
};
export default EmailVerification;