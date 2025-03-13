import { ReactNode } from "react"
import { TooltipProps } from "recharts"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContainerProps {
  config: ChartConfig
  children: ReactNode
}

export function ChartContainer({ config, children }: ChartContainerProps) {
  return (
    <div style={{ "--chart-1": config[Object.keys(config)[0]].color } as any}>
      {children}
    </div>
  )
}

export function ChartTooltip(props: TooltipProps<any, any>) {
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

export function ChartTooltipContent(props: TooltipProps<any, any>) {
  return <ChartTooltip {...props} />
}