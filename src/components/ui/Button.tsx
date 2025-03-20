import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps , ButtonVariant} from '@/lib/types';


const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  children,
  selected,
  className,
  icon,
  ariaLabel,
  ...props
}, ref) => {
  const baseStyles = "transition-colors duration-200";
  
  const variants: Record<ButtonVariant, string> = {
    primary: "px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700",
    outline: "px-4 py-2 rounded-lg border hover:border-gray-400",
    radio: cn(
      "px-4 py-2 rounded-lg border flex items-center gap-2",
      selected ? "border-blue-500 text-blue-500" : "border-gray-300"
    ),
    icon: cn(
      'p-1 cursor-pointer rounded-lg',
      props.disabled ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
    ),
    tab: cn(
      'p-2',
      selected ? "font-bold text-blue-500 underline" : ""
    )
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], className)}
      aria-label={ariaLabel}
      {...props}
    >
      {icon || children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;