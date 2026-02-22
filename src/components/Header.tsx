'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HOME_NAV_LINKS, MAIN_NAV_LINKS, HACKATHON_NAV_LINKS, type NavLink } from '@/lib/navigation';

interface HeaderProps {
  variant?: 'home' | 'main' | 'hackathon' | 'minimal';
  activePath?: string;
}

export default function Header({ variant = 'main', activePath }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] =
    variant === 'home' ? HOME_NAV_LINKS :
    variant === 'hackathon' ? HACKATHON_NAV_LINKS :
    variant === 'minimal' ? [] :
    MAIN_NAV_LINKS;

  const isActiveLink = (link: NavLink) => {
    if (!activePath) return false;
    return link.href === activePath || link.href === `/${activePath}`;
  };

  const isJoinUs = (link: NavLink) => link.href === '/join-us';

  const logo = (
    <>
      <div className="w-10 h-10 relative mr-3">
        <Image
          src="/images/logo.jpeg"
          alt="Futurist Law Lab Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="font-bold text-2xl text-blue-700">Futurist Law Lab</div>
    </>
  );

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {variant === 'home' ? (
            <div className="flex items-center">{logo}</div>
          ) : (
            <Link href="/" className="flex items-center">{logo}</Link>
          )}

          {navLinks.length > 0 && (
            <>
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      isActiveLink(link) || (variant === 'hackathon' && link.href === '/hackathon')
                        ? 'text-blue-700 font-bold hover:text-blue-800 transition'
                        : isJoinUs(link)
                          ? 'text-blue-700 font-bold hover:text-blue-800 transition'
                          : 'text-slate-800 font-medium hover:text-blue-700 transition'
                    }
                    {...(link.ariaLabel ? { 'aria-label': link.ariaLabel } : {})}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  className="p-2 focus:outline-none"
                  aria-label="Toggle menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg className="w-6 h-6 text-slate-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Menu */}
        {navLinks.length > 0 && mobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActiveLink(link) || (variant === 'hackathon' && link.href === '/hackathon')
                      ? 'text-blue-700 hover:text-blue-800 transition py-2'
                      : isJoinUs(link)
                        ? 'text-blue-700 font-bold hover:text-blue-800 transition py-2'
                        : 'text-slate-800 hover:text-blue-700 transition py-2'
                  }
                  {...(link.ariaLabel ? { 'aria-label': link.ariaLabel } : {})}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
