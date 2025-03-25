import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight2 } from "iconsax-react";
import ChartTooltip from "../../components/features/ChartTooltip";
import { activityChartData } from "@/lib/data";
import Button from "@/components/ui/Button";

export function ActivityChart() {
  return (
    <Card className="bg-gray-200 border-0 shadow-none px-3 py-1">
      <CardHeader className="flex flex-row items-center justify-between py-1">
      <CardTitle className="text-sm font-medium">Activity</CardTitle>
        <div className="flex items-center text-xs text-gray-500">
          This Week
          <Button 
            variant="icon"
            icon={<ArrowRight2 className="h-4 w-4" color="#333" />}
            ariaLabel="View more"
          />
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-2">
      <div className="h-[150px] bg-white rounded-lg p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day"
                axisLine={false}
                tickLine={false}
                stroke="#333"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                stroke="#333"
                tick={{ fontSize: 12 }}
                width={28}
                yAxisId="main"
              />
              <YAxis 
                yAxisId="shadow"
                orientation="left"
                hide={true}
                domain={['dataMin + 1', 'dataMax + 1']}
              />
              <Tooltip content={<ChartTooltip suffix=" Tasks" />} />
              
              <Line
                yAxisId="shadow"
                type="monotone"
                dataKey="tasks"
                stroke="#33333325"
                strokeWidth={2}
                dot={false}
                activeDot={false}
              />
              
              <Line
                yAxisId="main"
                type="monotone"
                dataKey="tasks"
                stroke="#333"
                strokeWidth={3}
                dot={{
                  fill: "#3b82f6",
                  stroke: "white",
                  strokeWidth: 2,
                  r: 5
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