import "./RecentTickets.css";
const tickets =[
    {id:"TID-001",name:"Poorvi Patel",type:"Hardware",priority:"Critical",details:"Mouse not working"},
    {id:"TID-002",name:"Chirak Mistry",type:"Software",priority:"Medium",details:"Software update fail..."},
    {id:"TID-003",name:"Aisha Khan",type:"Website",priority:"Low",details:"Website login page..."},
    {id:"TID-004",name:"Samuel Lee",type:"Server",priority:"High",details:"Server access timeout..."},
    {id:"TID-005",name:"Jia Wei",type:"Hardware",priority:"Low",details:"Laptop overheating..."},
];
const getPriorityBadge=(priority)=>{
    const classes={
        Critical:"badge-danger",
        High:"badge-warning-dark",
        Medium:"badge-warning",
        Low:"badge-success",
    };
    return (
        <span className={`priority-badge ${classes[priority]}`}>
            ● {priority}
        </span>
    );
};
const RecentTickets=()=>{
    return (
        <div className="table-responsive">
            <table className="table align-middle ticket-table">
                <thead>
                    <tr>
                        <th>Ticket ID</th>
                        <th>Raised By</th>
                        <th>Issue Type</th>
                        <th>Priority</th>
                        <th>Details</th>
                    </tr>
                </thead>
            <tbody>
                {tickets.map((t,i)=>(
                    <tr key={i}>
                        <td className="text-muted">{t.id}</td>
                        <td className="fw-semibold">{t.name}</td>
                        <td className="text-muted">{t.type}</td>
                        <td>{getPriorityBadge(t.priority)}</td>
                        <td className="text-muted">{t.details}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};
export default RecentTickets;