import "./Sidebar.css";
import {NavLink} from "react-router-dom";
import {LayoutDashboard,Package,Ticket,Users,FileText,Settings,Zap} from "lucide-react";
const Sidebar=()=>{
    const navItems=[
        {path:"/dashboard",name:"Dashboard",icon:LayoutDashboard},
        {path:"/inventory",name:"Inventory",icon:Package},
        {path:"/tickets",name:"Tickets",icon:Ticket},
        {path:"/client-assets",name:"Client Assets",icon:Users},
        {path:"/reports",name:"Reports",icon:FileText},
        {path:"/settings",name:"Settings",icon:Settings}
    ];
    return (
        <div className="sidebar d-flex flex-column p-3">
            <div className="d-flex justify-content-center mb-4">
                <div className="logo-box">
                    <Zap size={24} color="#fff"/>
                </div>
            </div>
            <ul className="nav flex-column">
                {navItems.map((item)=>{
                    const Icon=item.icon;
                    return (
                        <li className="nav-item mb-2" key={item.path}>
                            <NavLink to={item.path} className={({isActive})=>`nav-link d-flex align-items-center gap-2 sidebar-link ${isActive ? "active-link":""}`}>
                                <Icon size={18}/>
                                <span>{item.name}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Sidebar;