import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative px-8 py-3 transition-all duration-500 ease-out uppercase tracking-widest text-xs font-bold font-sans overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-neutral-950 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] hover:scale-105 active:scale-95 border border-transparent",
    outline: "border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-neutral-950 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
    text: "text-gold-400 hover:text-gold-200 underline-offset-8 hover:underline decoration-gold-500/50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer effect for primary button */}
      {variant === 'primary' && (
        <div className="absolute top-0 left-0 w-full h-full -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 pointer-events-none"></div>
      )}
      
      <span className="relative z-20 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;