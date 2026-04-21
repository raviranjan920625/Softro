'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { cn } from '@/lib/utils';
import * as Lucide from 'lucide-react';
import { usePathname } from 'next/navigation';
import SideMenu from './SideMenu';
import MegaMenu from './MegaMenu';
import Dropdown from './Dropdown';
import AnimatedLink from '../ui/AnimatedLink';

const SafeIcon = ({ name, size = 16, className, ...props }: { name: keyof typeof Lucide, size?: number, className?: string, [key: string]: any }) => {
  const IconComponent = Lucide[name] as React.ElementType;
  if (!IconComponent) return <div style={{ width: size, height: size, display: 'inline-block' }} />;
  return <IconComponent size={size} className={className} {...props} />;
};

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeLink, setActiveLink] = useState('Home');
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Detect active link based on pathname
    if (pathname === '/') {
      setActiveLink('Home');
    } else if (pathname.startsWith('/services')) {
      setActiveLink('Services');
    } else if (pathname.startsWith('/portfolio')) {
      setActiveLink('Work');
    } else if (pathname === '/about' || pathname === '/team' || pathname === '/careers' || pathname === '/contact') {
      setActiveLink('Company');
    } else if (pathname.startsWith('/insights') || pathname.startsWith('/blog') || pathname === '/faq') {
      setActiveLink('Insights');
    }
  }, [pathname]);

  const handleMouseEnter = (name: string) => {
    if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    leaveTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to make it easier to reach the menu
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true, isMega: true },
    { name: 'Work', href: '/portfolio', hasDropdown: true, dropdownLinks: [
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Portfolio Grid', href: '/portfolio' }
    ]},
    { name: 'Company', href: '/about', hasDropdown: true, dropdownLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Our Team', href: '/team' },
      { name: 'Contact Us', href: '/contact' }
    ]},
    { name: 'Insights', href: '/insights', hasDropdown: true, dropdownLinks: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' }
    ]},
  ];

  return (
    <>
      <div className={cn(styles.wrapper, scrolled && styles.scrolled)}>
        <header className={styles.navbar}>
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={() => setActiveLink('Home')}>
              <div className={styles.logoIcon}>
                <div className={styles.iconCircle}></div>
              </div>
              <span className={styles.logoText}>Softro</span>
            </Link>

            {/* Navigation Links */}
            <nav className={cn(styles.navLinks, isMobileOpen && styles.mobileOpen)}>
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className={styles.navItem}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link 
                    href={link.href} 
                    className={cn(styles.navLink, activeLink === link.name && styles.active)}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileOpen(false);
                    }}
                  >
                    {link.name}
                    {link.hasDropdown && <SafeIcon name="ChevronDown" className={styles.chevron} size={14} />}
                  </Link>

                  {/* Mega Menu / Dropdown */}
                  {link.isMega ? (
                    <MegaMenu isOpen={activeDropdown === 'Services'} />
                  ) : (
                    link.dropdownLinks && (
                      <Dropdown 
                        isOpen={activeDropdown === link.name} 
                        links={link.dropdownLinks} 
                      />
                    )
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className={styles.actions}>
              <button 
                className={styles.gridBtn} 
                aria-label="Layout"
                onClick={() => setIsSideMenuOpen(true)}
              >
                <SafeIcon name="LayoutGrid" size={20} />
              </button>
              <AnimatedLink href="/contact" className={styles.touchBtn} onClick={() => setActiveLink('Company')}>
                Let's Talk
              </AnimatedLink>
              
              <button 
                className={styles.hamburger} 
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <SafeIcon name="X" /> : <SafeIcon name="Menu" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  );
};

export default Navbar;
