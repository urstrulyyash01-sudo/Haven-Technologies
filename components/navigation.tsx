'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-lg text-primary hover:opacity-80 transition-opacity">
            <span className="tracking-tight">HAVEN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="px-6 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link href="/" className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/products" className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
              Products
            </Link>
            <Link href="/about" className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg text-center hover:shadow-lg transition-all">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
