'use client';

import React from 'react';
import Link from 'next/link';
import * as Lucide from 'lucide-react';
import styles from './AnimatedLink.module.css';
import { cn } from '@/lib/utils';

const SafeIcon = ({ name, size = 16, className, ...props }: { name: keyof typeof Lucide; size?: number; className?: string; [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} {...props} />;
};

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  iconName?: keyof typeof Lucide;
  iconSize?: number;
}

export default function AnimatedLink({ 
  href, 
  children, 
  className, 
  style,
  onClick,
  iconName = 'ArrowRight',
  iconSize = 16 
}: AnimatedLinkProps) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={cn(styles.animatedLink, className)}
      style={style}
    >
      <span className={styles.text}>{children}</span>
      <SafeIcon 
        name={iconName} 
        size={iconSize} 
        className={styles.arrowIcon} 
      />
    </Link>
  );
}
