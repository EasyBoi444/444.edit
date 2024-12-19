import React from 'react';

interface ButtonProps {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Button({ href, variant, children, icon }: ButtonProps) {
  const baseClasses = "inline-flex items-center px-6 py-3 rounded-lg transition group";
  const variantClasses = {
    primary: "bg-[#3498DB] text-white hover:bg-[#2980b9]",
    secondary: "border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
  };
  
  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
      {icon}
    </a>
  );
}