import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ShieldCheck, CheckCircle2, Smartphone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Bio */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', overflow: 'hidden', background: '#0f172a' }}>
                <Image 
                  src="/images/logo.jpg" 
                  alt="Bitzer Solutions LLC" 
                  width={38} 
                  height={38}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', margin: 0 }}>BITZER SOLUTIONS LLC</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary-light)' }}>
                  Registered Software & Mobile App Publisher
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', maxWidth: '380px' }}>
              Bitzer Solutions LLC is a dedicated mobile application development and digital publishing company. 
              We build secure, user-centric Android & iOS apps and scalable web architectures hosted on global edge infrastructure.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--accent-secondary-light)" />
                <span>Support: <a href="mailto:support@bitzers.top" style={{ color: '#ffffff', textDecoration: 'none' }}>support@bitzers.top</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--accent-primary-light)" />
                <span>Legal & Privacy: <a href="mailto:support@bitzers.top" style={{ color: '#ffffff', textDecoration: 'none' }}>support@bitzers.top</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--accent-emerald-light)" />
                <span>Bitzer Solutions LLC • United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Products & Apps</h4>
            <ul className="footer-links">
              <li><Link href="/apps">All Mobile Apps</Link></li>
              <li><Link href="/apps#novascan">NovaScan Pro (Android)</Link></li>
              <li><Link href="/apps#pulsetracker">PulseTracker Health</Link></li>
              <li><Link href="/apps#nexus">Nexus Analytics Web</Link></li>
              <li><a href="https://play.google.com" target="_blank" rel="noopener noreferrer">Google Play Developer Profile</a></li>
            </ul>
          </div>

          {/* Legal & Compliance (Play Store Required) */}
          <div className="footer-col">
            <h4>Compliance & Safety</h4>
            <ul className="footer-links">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/data-deletion">User Data Deletion Request</Link></li>
              <li><Link href="/support">App Help & Support Center</Link></li>
              <li><a href="/app-ads.txt" target="_blank">app-ads.txt (AdMob)</a></li>
              <li><a href="/.well-known/assetlinks.json" target="_blank">assetlinks.json (App Links)</a></li>
            </ul>
          </div>

          {/* Google Play Store Verification Status */}
          <div className="footer-col">
            <h4>Play Store Verification</h4>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid var(--border-subtle)', 
              borderRadius: 'var(--radius-md)', 
              padding: '16px' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 600, fontSize: '0.85rem', marginBottom: '8px' }}>
                <ShieldCheck size={18} />
                <span>Verified Entity</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Bitzer Solutions LLC complies with all Google Play Developer Program Policies, COPPA children guidelines, and strict data safety mandates.
              </p>
              <div style={{ marginTop: '12px' }}>
                <Link href="/#verification" style={{ color: 'var(--accent-secondary-light)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>
                  View Verification Details &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} <strong>Bitzer Solutions LLC</strong>. All rights reserved. Registered software publisher.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/data-deletion" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Data Deletion</Link>
            <Link href="/support" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Support Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
