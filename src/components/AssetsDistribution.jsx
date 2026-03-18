import "./AssetsDistribution.css";
const AssetsDistribution=()=>{
  return (
    <div className="assets-distribution">
      <div className="mb-4">
        <div className="d-flex justify-content-between small text-muted mb-1">
          <span>Company assets</span>
          <span className="fw-bold text-dark">68%</span>
        </div>
        <div className="progress">
          <div className="progress-bar bg-primary" style={{width:"68%"}}></div>
        </div>
      </div>
      <div className="mb-4">
        <div className="d-flex justify-content-between small text-muted mb-1">
          <span>Client assets</span>
          <span className="fw-bold text-dark">32%</span>
        </div>
        <div className="progress">
          <div className="progress-bar bg-info" style={{width:"32%"}}></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className="dot bg-success"></span> Available
          </div>
          <span className="fw-bold">6</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className="dot bg-primary"></span> Assigned
          </div>
          <span className="fw-bold">2</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className="dot bg-warning"></span> Under Repair
          </div>
          <span className="fw-bold">3</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <div className="d-flex align-items-center gap-2">
            <span className="dot bg-danger"></span> Scrap
          </div>
          <span className="fw-bold">2</span>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <span className="dot bg-secondary"></span> Returned
          </div>
          <span className="fw-bold">2</span>
        </div>
      </div>
    </div>
  );
};
export default AssetsDistribution;