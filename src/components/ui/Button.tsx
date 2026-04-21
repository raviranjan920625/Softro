import React from 'react';
import styles from './Button.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 16, className, ...props }: { name: keyof typeof Lucide, size?: number, className?: string, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} {...props} />;
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  hasArrow?: boolean;
  as?: 'button' | 'a';
  href?: string;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  hasArrow = false,
  as = 'button',
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  const combinedClassName = cn(
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className
  );

  if (as === 'a' && href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
        {hasArrow && <SafeIcon name="ArrowRight" size={18} className={styles.arrowIcon} />}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
      {hasArrow && <SafeIcon name="ArrowRight" size={18} className={styles.arrowIcon} />}
    </button>
  );
};

export default Button;
