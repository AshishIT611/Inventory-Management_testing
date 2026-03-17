import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {FaShieldAlt,FaLock,FaEye,FaEyeSlash,FaArrowLeft} from "react-icons/fa";
import "./resetpassword.css";
const ResetPassword=()=>{
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirm,setShowConfirm]=useState(false);
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:""
    });
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const validate=()=>{
        let newErrors={};
        if(!formData.password){
            newErrors.password="Password is required";
        }
        else if(formData.password.length<6){
            newErrors.password="Password must be at least 6 characters";
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword="Confirm password is required";
        }
        else if(formData.password!==formData.confirmPassword){
            newErrors.confirmPassword="Passwords do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    }
    const handleReset=()=>{
        if(validate()){
            alert("Password reset successfully");
            navigate("/login");
        }
    };
    return (
        <div className="reset-wrapper">
            <div className="reset-card">
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
                    <label>New Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaLock/>
                        </span>
                        <input type={showPassword ? "text":"password"} name="password" className="form-control" placeholder="Enter new password" value={formData.password} onChange={handleChange}/>
                        <span className="input-group-text eye-icon" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/>}</span>
                    </div>
                    {errors.password && (<small className="text-danger">{errors.password}</small>)}
                </div>
                <div className="mb-3">
                    <label>Retype Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaLock/>
                        </span>
                        <input type={showConfirm ? "text":"password"} className="form-control" placeholder="Retype password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        <span className="input-group-text eye-icon" onClick={()=>setShowConfirm(!showConfirm)}> {showConfirm ? <FaEyeSlash/>:<FaEye/>} </span>
                    </div>
                    {errors.confirmPassword && (<small className="text-danger">{errors.confirmPassword}</small>)}
                </div>
                <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleReset}>
                    Reset Password
                </button>
                <p className="back-link" onClick={()=>navigate("/login")}><FaArrowLeft/> Back</p>
            </div>
        </div>
    );
};
export default ResetPassword;