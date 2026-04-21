'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Dropdown.module.css';
import * as Lucide from 'lucide-react';

const SafeIcon = ({ name, size = 16, ...props }: { name: keyof typeof Lucide, size?: number, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} {...props} />;
};

interface DropdownProps {
  isOpen: boolean;
  links: { name: string, href: string, hasSub?: boolean }[];
}

const Dropdown = ({ isOpen, links }: DropdownProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdown}>
      <ul className={styles.list}>
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.href} className={styles.link}>
              {link.name}
              {link.hasSub && <SafeIcon name="ChevronRight" size={12} className={styles.chevron} />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
