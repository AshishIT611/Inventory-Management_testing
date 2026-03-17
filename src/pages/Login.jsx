import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaUser,FaEnvelope,FaLock,FaEye,FaEyeSlash} from "react-icons/fa";
import "./login.css";
const Login=()=>{
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState({
        email:"",
        password:""
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
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()){
            newErrors.email="Email is required";
        }
        else if(!emailPattern.test(formData.email)){
            newErrors.email="Enter a valid email";
        }
        if(!formData.password){
            newErrors.password="Password is required";
        }
        else if(formData.password.length<6){
            newErrors.password="Password must be at least 6 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    };
    const handleLogin=()=>{
        if(validate()){
            alert("Login successful!");
        }
    };
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <div className="avatar-circle">
                    <FaUser/>
                </div>
                <h4 className="text-center fw-bold mt-3">
                    Login to your account
                </h4>
                <p className="text-center text-muted small">
                    Enter your details to login.
                </p>
                <hr/>
                <div className="mb-3">
                    <label>Email address</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaEnvelope/>
                        </span>
                        <input type="email" name="email" className="form-control" placeholder="Enter your email" value={formData.email} onChange={handleChange}/>
                    </div>
                    {errors.email && (<small className="text-danger">{errors.email}</small>)}
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <FaLock/>
                        </span>
                        <input type={showPassword ? "text":"password"} className="form-control" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange}/>
                        <span className="input-group-text eye-icon" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/>}
                        </span>
                    </div>
                    {errors.password && (<small className="text-danger">{errors.password}</small>)}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <input type="checkbox" className="form-check-input me-2"/>
                        <label className="small">Keep me logged in</label>
                    </div>
                    <span className="forgot-link" onClick={()=>navigate("/forgot-password")} style={{cursor:"pointer"}}>Forgot password ?</span>
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}
export default Login;