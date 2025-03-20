import * as React from "react";
import { cn } from "@/lib/utils";

interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary';
  disabled?: boolean;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed,
      defaultPressed = false,
      onPressedChange,
      size = 'lg',
      variant = 'primary',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = React.useState(defaultPressed);

    const handleClick = () => {
      if (!disabled) {
        const newPressed = !isPressed;
        setIsPressed(newPressed);
        onPressedChange?.(newPressed);
      }
    };

    const sizes = {
      sm: 'h-4 w-8',
      md: 'h-6 w-11',
      lg: 'h-7 w-14'
    };

    const variants = {
      default: 'bg-gray-200',
      primary: 'bg-blue-100'
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={pressed ?? isPressed}
        data-state={pressed ?? isPressed ? 'on' : 'off'}
        disabled={disabled}
        onClick={handleClick}
        className={cn(
          "relative inline-flex cursor-pointer rounded-full transition-colors duration-200 ease-in-out",
          variants[variant],
          sizes[size],
          pressed ?? isPressed ? 'bg-blue-600' : '',
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            size === 'sm' && 'h-3 w-3',
            size === 'md' && 'h-5 w-5',
            size === 'lg' && 'h-7 w-7',
            pressed ?? isPressed ? 'translate-x-full' : 'translate-x-0'
          )}
        />
      </button>
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };