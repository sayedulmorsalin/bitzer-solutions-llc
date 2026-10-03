import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileText, Trash2, HelpCircle, ExternalLink, Lock, Server } from 'lucide-react';

export default function PlayStoreVerificationBadge() {
  const verificationPoints = [
    {
      title: 'Google Play Organization Verified',
      desc: 'Bitzer Solutions LLC is registered as an official corporate entity and software developer.',
      status: 'Active & Verified',
    },
    {
      title: 'Mandatory Data Safety Disclosures',
      desc: 'Complete transparency regarding user data collection, storage, and TLS 1.3 encryption in transit.',
      status: 'Compliant',
    },
    {
      title: 'User Data Deletion Link',
      desc: 'Dedicated web endpoint for users to request account and data deletion in accordance with Google Play requirements.',
      status: 'Active URL',
    },
    {
      title: 'Authorized Digital Sellers (app-ads.txt)',
      desc: 'Standardized publisher verification published at root domain for programmatic ad fraud prevention.',
      status: 'Published',
    },
    {
      title: 'Children & Family Safety (COPPA)',
      desc: 'Strict adherence to Google Play Designed for Families and COPPA standards for child-safe experiences.',
      status: 'Certified',
    },
    {
      title: 'Cloudflare Edge Infrastructure',
      desc: '100% serverless, zero-downtime hosting on Cloudflare Global Edge with SSL/TLS encryption and DDoS shield.',
      status: 'Live on Cloudflare',
    },
  ];

  return (
    <section id="verification" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="badge badge-verified" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={16} />
            <span>Official Developer Compliance</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '16px', lineHeight: 1.2 }}>
            Google Play Store <span className="text-gradient">Verification & Trust Hub</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            To guarantee complete transparency for our app users, enterprise partners, and Google Play Store review teams, 
            <strong> Bitzer Solutions LLC</strong> maintains full compliance with Google Play Developer Program Policies.
          </p>
        </div>

        {/* Verification Matrix Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {verificationPoints.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <span style={{ 
                  background: 'rgba(16, 185, 129, 0.1)', 
                  color: '#34d399', 
                  borderRadius: '6px', 
                  padding: '4px 10px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <CheckCircle2 size={14} />
                  {item.status}
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>0{idx + 1}</span>
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Callout Bar */}
        <div className="verification-callout">
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={20} color="var(--accent-secondary-light)" />
              Google Play Reviewer Quick Access Portal
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Direct access to all required legal endpoints, app-ads.txt files, and data privacy officers.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" className="btn btn-secondary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
              <FileText size={16} /> Privacy Policy
            </Link>
            <Link href="/data-deletion" className="btn btn-secondary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
              <Trash2 size={16} /> Data Deletion URL
            </Link>
            <Link href="/support" className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
              <HelpCircle size={16} /> App User Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
