import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function NavLink({ href, children, mobile = false }: NavLinkProps) {
  const baseClasses = "text-white hover:text-[#3498DB] transition";
  const mobileClasses = mobile ? "block" : "";
  
  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
}