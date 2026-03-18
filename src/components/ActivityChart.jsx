import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";
const data=[
    {name:"Mon",opened:12,solved:8},
    {name:"Tue",opened:15,solved:10},
    {name:"Wed",opened:11,solved:12},
    {name:"Thu",opened:18,solved:14},
    {name:"Fri",opened:10,solved:7},
    {name:"Sat",opened:8,solved:6},
];
const ActivityChart=()=>{
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis data="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotype" dataKey="opened" stroke="#3b82f6"/>
                    <Line type="monotype" dataKey="solved" stroke="#22c55e"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
export default ActivityChart;