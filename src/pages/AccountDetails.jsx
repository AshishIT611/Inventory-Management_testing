import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {FaUser,FaEnvelope,FaLock,FaArrowLeft,FaEye,FaEyeSlash} from "react-icons/fa";
import "./accountdetails.css";
const AccountDetails=()=>{
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        confirmPassword:""
    });
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirm,setShowConfirm]=useState(false);
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const validate=()=>{
        let newErrors={};
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()){
            newErrors.email="Email is required";
        }
        else if(!emailPattern.test(formData.email)){
            newErrors.email="Enter a valid email address";
        }
        if(!formData.password){
            newErrors.password="Password is required";
        }
        if(formData.password.length<6){
            newErrors.password="Password must be at least 6 characters";
        }
        if(!formData.confirmPassword){
            newErrors.confirmPassword="Confirm password is required";
        }
        if(formData.password && formData.confirmPassword && formData.password!==formData.confirmPassword){
            newErrors.confirmPassword="Password do not match";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    };
    const handleSubmit=(e)=>{
        if(validate()){
            alert("Registered successfully!");
            navigate("/login");
        }
    };
    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <div className="text-center mb-3">
                    <FaUser/>
                </div>
                <h4 className="text-center fw-bold">
                    Register for System Access
                </h4>
                <p className="text-center text-muted small">
                    Enter your details to Sign up.
                </p>
                <hr/>
                <div className="mb-3">
                    <label>Email Address</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaEnvelope/>
                        </span>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    </div>
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaLock/>
                        </span>
                        <input type={showPassword ? "text":"password"} name="password" className="form-control" value={formData.password} onChange={handleChange}/>
                        <span className="input-group-text eye-icon" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/>}</span>
                    </div>
                    {errors.password && <small className="text-danger">{errors.password}</small>}
                </div>
                <div className="mb-3">
                    <label>Confirm Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaLock/>
                        </span>
                        <input type={showConfirm ? "text":"password"} name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange}/>
                        <span className="input-group-text eye-icon" onClick={()=>setShowConfirm(!showConfirm)}>{showConfirm ? <FaEyeSlash/>:<FaEye/>}</span>
                    </div>
                    {errors.confirmPassword && (<small className="text-danger">{errors.confirmPassword}</small>)}
                </div>
                <button className="btn btn-primary w-100 mb-3" onClick={handleSubmit}>Register</button>
                <p style={{cursor:"pointer"}} onClick={()=>navigate("/")}>
                    <FaArrowLeft/> Back
                </p>
            </div>
        </div>
    );
}
export default AccountDetails;