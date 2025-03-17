import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

// Example weekly data with consistent average line
const chartData = [
  { day: "S", tasks: 1, average: 2.8 },
  { day: "M", tasks: 2, average: 1.5 },
  { day: "T", tasks: 1, average: 1.2 },
  { day: "W", tasks: 2, average: 2.5 },
  { day: "T", tasks: 3, average: 1.7 },
  { day: "F", tasks: 2, average: 2.5 },
  { day: "S", tasks: 2, average: 1.6 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-xs py-1 px-2 rounded-full">
        {payload[0].value} Tasks
      </div>
    );
  }
  return null;
};

export function ActivityChart() {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Activity</CardTitle>
        <div className="flex items-center text-xs text-gray-500">
          This Week
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[150px] bg-white rounded-lg p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}
                stroke="#94a3b8"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                stroke="#94a3b8"
                tick={{ fontSize: 12 }}
                width={20}
              />
              <Tooltip content={<CustomTooltip />} />
              {/* Average Line */}
              <Line
                type="monotone"
                dataKey="average"
                stroke="#94a3b8"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
              {/* Tasks Line */}
              <Line
                type="monotone"
                dataKey="tasks"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{
                  fill: "#3b82f6",
                  stroke: "white",
                  strokeWidth: 2,
                  r: 4
                }}
                activeDot={{
                  fill: "#3b82f6",
                  stroke: "white",
                  strokeWidth: 2,
                  r: 6
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}