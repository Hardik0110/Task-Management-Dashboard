import * as React from "react";

export const ScrollArea = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={`overflow-y-auto scrollbar-thin  ${className}`} {...props}>
        {children}
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";
