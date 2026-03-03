'use client';

import React from 'react';

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ObfuscatedEmail({ user, domain, className, children }: ObfuscatedEmailProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = `${user}@${domain}`;
    window.location.href = `mailto:${email}`;
  };

  // If children are provided (like "Email Me"), render those. 
  // Otherwise, render a bot-resistant text version of the email.
  const displayText = children || `${user} at ${domain.replace('.', ' dot ')}`;

  return (
    <a 
      href="#" 
      onClick={handleClick}
      className={className}
      style={{ cursor: 'pointer' }}
    >
      {displayText}
    </a>
  );
}
