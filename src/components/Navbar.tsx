'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShieldCheck, Smartphone, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav-header">
      <div className="container nav-container">
        <Link href="/" className="nav-logo" id="nav-brand-logo">
          <div className="nav-logo-icon">
            <Image 
              src="/images/logo.jpg" 
              alt="Bitzer Solutions LLC Logo" 
              width={44} 
              height={44}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <div className="nav-logo-text">
              BITZER <span className="text-gradient">SOLUTIONS</span>
            </div>
            <span className="nav-logo-sub">OFFICIAL DEVELOPER PORTAL • LLC</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/apps" className="nav-link" id="nav-link-apps">
                Apps & Portfolio
              </Link>
            </li>
            <li>
              <Link href="/#verification" className="nav-link" id="nav-link-verification">
                Play Store Verification
              </Link>
            </li>
            <li>
              <Link href="/support" className="nav-link" id="nav-link-support">
                App Support
              </Link>
            </li>
            <li>
              <Link href="/data-deletion" className="nav-link" id="nav-link-deletion">
                Data Deletion
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="nav-link" id="nav-link-privacy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action button & Verified Badge */}
        <div className="nav-actions">
          <div className="badge badge-verified" title="Google Play Registered Developer">
            <span className="pulse-dot"></span>
            <span>Google Play Verified</span>
          </div>
          <Link href="/contact" className="btn btn-primary" id="nav-btn-contact" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Developer Contact
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle" 
          id="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="badge badge-verified" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
            <span className="pulse-dot"></span>
            <span>Google Play Console Organization</span>
          </div>
          <Link href="/apps" onClick={() => setMobileMenuOpen(false)}>
            📱 Mobile Apps & Portfolio
          </Link>
          <Link href="/#verification" onClick={() => setMobileMenuOpen(false)}>
            🛡️ Play Store Verification
          </Link>
          <Link href="/support" onClick={() => setMobileMenuOpen(false)}>
            🎧 App User Support
          </Link>
          <Link href="/data-deletion" onClick={() => setMobileMenuOpen(false)}>
            🗑️ User Data Deletion Request
          </Link>
          <Link href="/privacy-policy" onClick={() => setMobileMenuOpen(false)}>
            📄 Privacy Policy (Google Play Compliant)
          </Link>
          <Link href="/terms" onClick={() => setMobileMenuOpen(false)}>
            ⚖️ Terms of Service
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ marginTop: '12px' }}>
            Contact Bitzer Solutions LLC
          </Link>
        </div>
      )}
    </header>
  );
}
