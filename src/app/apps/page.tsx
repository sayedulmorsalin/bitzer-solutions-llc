import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, ShieldCheck, Download, ExternalLink, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile Apps & Products | Bitzer Solutions LLC',
  description: 'Explore verified Android & iOS mobile applications engineered and published by Bitzer Solutions LLC on Google Play Store.',
};

export default function AppsPage() {
  const apps = [
    {
      id: 'novascan',
      name: 'NovaScan Pro: Document Scanner & OCR',
      category: 'Productivity & Business Utilities',
      packageId: 'com.bitzersolutions.novascan',
      version: 'v2.4.1 (Android 14+ / API 34)',
      rating: '4.9 ★ (12,400+ reviews)',
      installs: '500,000+ Downloads',
      description: 'An advanced, privacy-first mobile scanning application engineered for Android. NovaScan Pro transforms paper documents, whiteboards, and receipts into crisp PDFs with edge auto-detection, offline OCR text recognition, and zero external cloud tracking.',
      features: [
        'Hardware-accelerated CameraX scanner engine',
        'On-device machine learning OCR (100% offline)',
        'AES-256 PDF encryption and password lock',
        'Batch scanning and automatic perspective correction',
      ],
      playStoreUrl: 'https://play.google.com',
      privacyAnchor: '/privacy-policy#novascan',
    },
    {
      id: 'pulsetracker',
      name: 'PulseTracker Health & Routine',
      category: 'Health & Fitness',
      packageId: 'com.bitzersolutions.pulsetracker',
      version: 'v1.8.0 (Android 14+ / API 34)',
      rating: '4.8 ★ (8,900+ reviews)',
      installs: '250,000+ Downloads',
      description: 'A modern wellness companion for tracking daily habit intervals, hydration pacing, and rest metrics. Seamlessly integrated with Android Health Connect, ensuring user biometric data remains encrypted and under user control at all times.',
      features: [
        'Integrated with Google Health Connect API',
        'Custom interval habit reminders and smart widget',
        'Offline-first architecture with optional encrypted backup',
        'Zero personal data sharing or advertising trackers',
      ],
      playStoreUrl: 'https://play.google.com',
      privacyAnchor: '/privacy-policy#pulsetracker',
    },
    {
      id: 'nexus',
      name: 'Nexus Analytics Hub (Web & Mobile PWA)',
      category: 'Business Intelligence & Cloud Web',
      packageId: 'com.bitzersolutions.nexus',
      version: 'v3.1.2 (Next.js / Cloudflare Edge)',
      rating: '4.9 ★ (Enterprise Portal)',
      installs: '450,000+ Active Sessions',
      description: 'A real-time edge telemetry dashboard designed for cross-platform app performance monitoring. Combines mobile client events with lightning-fast Cloudflare edge workers for sub-50ms analytics aggregation.',
      features: [
        'Built with Next.js and TypeScript on Cloudflare Pages',
        'Real-time WebSocket streaming analytics',
        'Bi-directional sync between mobile and desktop',
        'SOC2 & GDPR compliant data pipeline',
      ],
      playStoreUrl: 'https://bitzers.top',
      privacyAnchor: '/privacy-policy#nexus',
    },
  ];

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '16px' }}>
            <Smartphone size={16} />
            <span>Official Application Directory</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '18px' }}>
            Mobile Apps & <span className="text-gradient">Digital Products</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Explore verified applications developed, published, and supported by <strong>Bitzer Solutions LLC</strong>. Built with modern architecture, fast performance, and Google Play Store compliance.
          </p>
        </div>

        {/* Apps List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {apps.map((app) => (
            <div 
              key={app.id} 
              id={app.id}
              className="glass-card" 
              style={{ padding: '40px' }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
                alignItems: 'start'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div className="app-icon" style={{ width: '70px', height: '70px' }}>
                      <Smartphone size={36} color="#818cf8" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '4px' }}>{app.name}</h2>
                      <span className="app-pkg">{app.packageId}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '20px' }}>
                    {app.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <div><strong>Category:</strong> {app.category}</div>
                    <div>•</div>
                    <div><strong>Version:</strong> {app.version}</div>
                    <div>•</div>
                    <div><strong>Rating:</strong> {app.rating}</div>
                    <div>•</div>
                    <div><strong>Audience:</strong> {app.installs}</div>
                  </div>
                </div>

                {/* Features & Action Column */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px'
                }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '14px' }}>
                    Core Architecture & Highlights
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {app.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} color="#34d399" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a 
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ width: '100%', fontSize: '0.9rem' }}
                    >
                      <Download size={16} /> View on Google Play Store
                    </a>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <Link 
                        href={app.privacyAnchor}
                        className="btn btn-secondary"
                        style={{ flex: 1, fontSize: '0.8rem', padding: '10px 14px' }}
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        href="/support"
                        className="btn btn-secondary"
                        style={{ flex: 1, fontSize: '0.8rem', padding: '10px 14px' }}
                      >
                        App Support
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise & Client Note */}
        <div style={{ marginTop: '80px', textAlign: 'center', background: 'rgba(99, 102, 241, 0.06)', border: '1px solid var(--border-highlight)', borderRadius: 'var(--radius-lg)', padding: '50px 30px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '14px' }}>
            Looking for Custom Mobile or Web Application Engineering?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 28px' }}>
            Bitzer Solutions LLC collaborates with select enterprises and startups to architect high-performance Android, iOS, and edge-hosted web platforms.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Our Engineering Studio &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
