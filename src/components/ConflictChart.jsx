import {PieChart,Pie,Cell,ResponsiveContainer} from "recharts";
import "./ConflictChart.css";
const data=[
    {name:"Critical",value:6,color:"#ef4444"},
    {name:"High",value:2,color:"#f97316"},
    {name:"Medium",value:3,color:"#facc15"},
    {name:"Low",value:2,color:"#94a3b8"},
];
const ConflictChart=()=>{
  return (
    <div className="text-center">
        <div className="chart-box">
            <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                    <Pie
                    data={data}
                    innerRadius={50}
                    outerRadius={70}
                    dataKey="value"
                >
                    {data.map((item, index) => (
                        <Cell key={index} fill={item.color} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="chart-center">65%</div>
        </div>
        <div className="mt-3">
            {data.map((item,index)=>(
                <div key={index} className="d-flex justify-content-between align-items-center mb-2 small">
                    <div className="d-flex align-items-center gap-2 text-muted">
                        <span className="legend-dot" style={{backgroundColor:item.color}}></span>
                        {item.name}
                    </div>
                    <span className="fw-semibold">{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  );
};
export default ConflictChart;