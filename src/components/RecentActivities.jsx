import {PlusCircle,RefreshCw,ArrowRightLeft,AlertTriangle} from "lucide-react";
import "./RecentActivities.css";
const activities=[
  {
    icon:<PlusCircle size={14}/>,
    bg:"#eff6ff",
    color:"#3b82f6",
    title:"New Ticket Created - Server Issue",
    time:"2 hours ago",
  },
  {
    icon:<RefreshCw size={14} />,
    bg:"#f0fdf4",
    color:"#22c55e",
    title:<>Client Asset <span className="link">CL-009</span> returned</>,
    time:"3 hours ago",
  },
  {
    icon:<ArrowRightLeft size={14}/>,
    bg:"#eff6ff",
    color:"#3b82f6",
    title:<>Asset <span className="link">IT-023</span> assigned to Rahul</>,
    time:"1 day ago",
  },
  {
    icon:<AlertTriangle size={14}/>,
    bg:"#fef2f2",
    color:"#ef4444",
    title:"Ticket TID-014 marked as Conflict",
    time:"2 days ago",
  },
];
const RecentActivities=()=>{
  return (
    <div className="timeline">
      {activities.map((item,i)=>(
        <div className="d-flex mb-4 position-relative" key={i}>
          <div className="timeline-icon" style={{background:item.bg,color:item.color}}>
            {item.icon}
          </div>
          <div className="ms-3">
            <div className="fw-medium">{item.title}</div>
            <small className="text-muted">{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RecentActivities;