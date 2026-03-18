import {Monitor,CheckCircle2,Ticket as TicketIcon,Flame,Layers} from "lucide-react";
import ActivityChart from "./ActivityChart";
import ConflictChart from "./ConflictChart";
import RecentTickets from "./RecentTickets";
import AssetsDistribution from "./AssetsDistribution";
import RecentActivities from "./RecentActivities";
import "./Dashboard.css";
const Dashboard=()=>{
    return (
        <div className="container-fluid p-3 dashboard-container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">Dashboard</h4>
                <div className="date-box">10 Feb 2026 - 26 Feb 2026 ▼</div>
            </div>
            <div className="row g-3 mb-4">
                <div className="col-lg-2 col-md-4">
                    <div className="card p-3 d-flex justify-content-between">
                        <div>
                            <small className="text-muted">Total Assets</small>
                            <h5>2048</h5>
                        </div>
                        <div className="icon-box bg-primary-subtle text-primary">
                            <Monitor size={18} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="card p-3 d-flex justify-content-between">
                        <div>
                            <small className="text-muted">Available</small>
                            <h5>48</h5>
                        </div>
                        <div className="icon-box bg-success-subtle text-success">
                            <CheckCircle2 size={18} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="card p-3 d-flex justify-content-between">
                        <div>
                            <small className="text-muted">Open</small>
                            <h5>20</h5>
                        </div>
                        <div className="icon-box bg-warning-subtle text-warning">
                            <TicketIcon size={18} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="card p-3 d-flex justify-content-between">
                        <div>
                            <small className="text-muted">In Progress</small>
                            <h5>12</h5>
                        </div>
                        <div className="icon-box bg-danger-subtle text-danger">
                            <Flame size={18} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4">
                    <div className="card p-3 d-flex justify-content-between">
                        <div>
                            <small className="text-muted">Closed</small>
                            <h5>48</h5>
                        </div>
                        <div className="icon-box bg-secondary-subtle text-secondary">
                            <Layers size={18} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-lg-8">
                    <div className="card p-3 mb-3">
                        <h6 className="fw-semibold mb-3">My Ticket Activity Overview</h6>
                        <ActivityChart />
                    </div>
                    <div className="card p-3">
                        <div className="d-flex justify-content-between mb-2">
                            <h6>Recent tickets</h6>
                            <a href="#">View all</a>
                        </div>
                        <RecentTickets />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card p-3 mb-3">
                        <h6>Conflict Status</h6>
                        <ConflictChart />
                    </div>
                    <button className="btn btn-primary w-100 mb-2">
                        Create Ticket
                    </button>
                    <button className="btn btn-outline-primary w-100 mb-3">
                        Add Inventory
                    </button>
                    <div className="card p-3">
                        <h6>Assets Distribution</h6>
                        <AssetsDistribution />
                    </div>
                </div>
            </div>
            <div className="row g-3 mt-2">
                <div className="col-md-6">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between">
                            <h6>Recent Activities</h6>
                            <a href="#">View all</a>
                        </div>
                        <RecentActivities />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3">
                        <h6>Requires Attention</h6>
                        <div className="attention-item border-danger">Critical Tickets</div>
                        <div className="attention-item border-warning">Warranty</div>
                        <div className="attention-item border-success">Maintenance</div>
                        <div className="attention-item border-primary">Unassigned</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;