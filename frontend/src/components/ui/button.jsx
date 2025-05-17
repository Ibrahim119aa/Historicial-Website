// src/components/ui/button.jsx

export function Button({ children, onClick, className = "", variant = "default", ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  