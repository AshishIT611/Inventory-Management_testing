import "./Topbar.css";
import {Search,Bell,Moon,Menu} from "lucide-react";
const Topbar=()=>{
    return (
        <div className="topbar d-flex justify-content-between align-items-center px-4">
            <div className="d-flex align-items-center gap-3">
                <button className="btn p-2">
                    <Menu size={20} className="icon-muted"/>
                </button>
                <div className="search-box d-flex align-items-center px-3">
                    <Search size={16} className="me-2 icon-muted"/>
                    <input type="search" placeholder="Search..."/>
                </div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <button className="btn p-2">
                    <Moon size={20} className="icon-muted"/>
                </button>
                <button className="btn position-relative p-2">
                    <Bell size={20} className="icon-muted"/>
                    <span className="badge-dot"></span>
                </button>
                <div className="d-flex align-items-center gap-2 border-start ps-3">
                    <div className="text-end">
                        <div className="fw-semibold small">Robert Brown</div>
                        <div className="text-muted small">Support Engineer</div>
                    </div>
                    <img src="https://ui-avatars.com/api/?name=Robert+Brown" alt="user" className="avatar"/>
                </div>
            </div>
        </div>
    );
};
export default Topbar;