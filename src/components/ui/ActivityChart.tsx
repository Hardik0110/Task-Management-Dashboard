import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Example weekly data
const chartData = [
  { day: "S", tasks: 1, average: 0.5 },
  { day: "M", tasks: 2, average: 2.9 },
  { day: "T", tasks: 1, average: 1.2 },
  { day: "W", tasks: 2, average: 2.5 },
  { day: "T", tasks: 3, average: 1.4 },
  { day: "F", tasks: 2, average: 2.2 },
  { day: "S", tasks: 2, average: 1.6 },
]

export function ActivityChart() {
  return (
    <Card className="w-full h-full border-0">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Activity</CardTitle>
        <CardDescription className="text-sm text-gray-500">This Week</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={150} className="shadow-md rounded-md">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="day"
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              stroke="black"
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              width={30}
              stroke="black"
            />
            {/* Average Line (Grey) */}
            <Line
              type="monotone"
              dataKey="average"
              stroke="#EBEDF9"
              strokeWidth={2}
              dot={{
                fill: "#3b82f6",
                stroke: "white",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                fill: "#3b82f6",
                stroke: "white",
                strokeWidth: 2,
                r: 6,
              }}
            />
            {/* Main Line (Blue) */}
            <Line
              type="monotone"
              dataKey="tasks"
              stroke="black"
              strokeWidth={2}
              dot={{
                fill: "#3b82f6",
                stroke: "white",
                strokeWidth: 2,
                r: 4,
              }}
              activeDot={{
                fill: "#3b82f6",
                stroke: "white",
                strokeWidth: 2,
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}