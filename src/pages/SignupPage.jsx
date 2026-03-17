import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./signuppage.css";
import {FaUser,FaBuilding} from "react-icons/fa";
const Signup=()=>{
    const navigate=useNavigate();
    const [name,setName]=useState("");
    const [department,setDepartment]=useState("");
    const [role,setRole]=useState("");
    const handleNext=()=>{
        if(name.trim()==="" || department.trim()==="" || role===""){
            alert("Please fill all fields");
            return;
        }
        navigate("/account");
    };
    return (
        <div className="signup-wrapper">
            <div className="signup-card">
                <div className="text-center mb-3">
                    <div className="avatar-circle">
                        <FaUser/>
                    </div>
                </div>
                <h4 className="text-center fw-bold">Create a new account</h4>
                <p className="text-center text-muted small">
                    Enter your details to Sign up.
                </p>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaUser/>
                            </span>
                            <input type="text" className="form-control" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaBuilding/>
                            </span>
                            <input type="text" className="form-control" placeholder="Enter your department" onChange={(e)=>setDepartment(e.target.value)}/>
                        </div>
                    </div>
                    <label className="form-label">Role</label>
                    <div className="d-flex gap-3 mb-3">
                        <button type="button" className={`role-btn ${role=="Employee" ? "active":""}`} onClick={()=>setRole("Employee")}>Employee</button>
                        <button type="button" className={`role-btn ${role=="Support" ? "active":""}`} onClick={()=>setRole("Support")}>Support engineer</button>
                    </div>
                </form>
                <button type="button" className="btn btn-primary w-100" onClick={handleNext}>Next</button>
                <p className="text-center mt-3 small">
                    Already have an account ?
                    <span className="login-link" onClick={()=>navigate("/login")}> Login</span>
                </p>
            </div>
        </div>
    );
};
export default Signup;