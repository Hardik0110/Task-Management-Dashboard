import { TooltipProps } from "recharts"
import {  ChartContainerProps } from "@/lib/types"
import { CSSProperties } from "react"

export function ChartContainer({ config, children }: ChartContainerProps) {
  return (
    <div style={{ "--chart-1": config[Object.keys(config)[0]].color } as CSSProperties}>
      {children}
    </div>
  )
}

export function ChartTooltip(props: TooltipProps<number, string>) {
  return props.active ? (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {props.payload?.map((entry) => (
        <div key={entry.name}>
          <span>{entry.name}: </span>
          <span className="font-bold">{entry.value}</span>
        </div>
      ))}
    </div>
  ) : null
}

export function ChartTooltipContent(props: TooltipProps<number, string>) {
  return <ChartTooltip {...props} />
}