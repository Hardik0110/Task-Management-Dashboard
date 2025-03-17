import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import ChartTooltip from "./ChartTooltip";
import { activityChartData } from "@/lib/data";
import IconButton from "./IconButton";

export function ActivityChart() {
  return (
    <Card className="bg-transparent border-0 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">Activity</CardTitle>
        <div className="flex items-center text-xs text-gray-500">
          This Week
          <IconButton 
            icon={<ChevronRight className="h-4 w-4" />} 
            ariaLabel="View more"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[150px] bg-white rounded-lg p-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityChartData}>
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
              <Tooltip content={<ChartTooltip suffix=" Tasks" />} />
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