import React from 'react';

interface LogoLinkProps {
  href: string;
  children?: React.ReactNode;
}

const LogoLink: React.FC<LogoLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="overflow-hidden">
      <div className="flex h-36 w-full items-center justify-center rounded-3xl bg-gray-50 text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900">
        {children}
      </div>
    </a>
  );
};

export default LogoLink;
