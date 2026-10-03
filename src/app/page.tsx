import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Lock, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Layers, 
  FileText, 
  Users, 
  DownloadCloud,
  ChevronRight,
  Shield,
  Star
} from 'lucide-react';
import PlayStoreVerificationBadge from '@/components/PlayStoreVerificationBadge';

export default function HomePage() {
  const featuredApps = [
    {
      id: 'novascan',
      name: 'NovaScan Pro',
      category: 'Productivity & Utilities',
      packageId: 'com.bitzersolutions.novascan',
      version: 'v2.4.1 (API 34+)',
      rating: '4.9',
      downloads: '500K+',
      description: 'Ultra-fast on-device document scanner, OCR text extraction, and offline PDF encryption. Built with zero tracking and privacy-first local storage.',
      tags: ['Kotlin', 'CameraX', 'ML Kit', 'Offline First'],
      privacyLink: '/privacy-policy#novascan',
    },
    {
      id: 'pulsetracker',
      name: 'PulseTracker Health',
      category: 'Health & Fitness',
      packageId: 'com.bitzersolutions.pulsetracker',
      version: 'v1.8.0 (API 34+)',
      rating: '4.8',
      downloads: '250K+',
      description: 'Intelligent daily habit routines, hydration pacing, and wellness analytics with end-to-end encrypted biometric synchronization.',
      tags: ['Flutter', 'Health Connect', 'Biometrics', 'AES-256'],
      privacyLink: '/privacy-policy#pulsetracker',
    },
    {
      id: 'nexus',
      name: 'Nexus Analytics Hub',
      category: 'Business & Edge Web',
      packageId: 'com.bitzersolutions.nexus',
      version: 'v3.1.2 (PWA & Web)',
      rating: '4.9',
      downloads: '450K+',
      description: 'Cloudflare edge-accelerated analytics platform bridging mobile telemetry with real-time web dashboards for modern digital teams.',
      tags: ['Next.js', 'Cloudflare Pages', 'WebSockets', 'Edge API'],
      privacyLink: '/privacy-policy#nexus',
    },
  ];

  const engineeringPillars = [
    {
      icon: <Smartphone size={28} color="#67e8f9" />,
      title: 'Native Android & iOS Engineering',
      desc: 'Deep specialization in Kotlin, Jetpack Compose, Swift, and Flutter. We craft smooth, 120 FPS mobile interfaces with memory efficiency and battery optimization.',
    },
    {
      icon: <Globe size={28} color="#818cf8" />,
      title: 'High-Scale Web Applications',
      desc: 'Full-stack Next.js and TypeScript web platforms deployed directly to Cloudflare Global Edge for sub-50ms latency across 300+ worldwide data centers.',
    },
    {
      icon: <ShieldCheck size={28} color="#34d399" />,
      title: 'Play Store Compliance & Data Safety',
      desc: 'Strict adherence to Google Play policies: Play Integrity API integration, transparent Data Safety labels, COPPA compliance, and dedicated data deletion endpoints.',
    },
    {
      icon: <Lock size={28} color="#f472b6" />,
      title: 'Privacy-First Architecture',
      desc: 'Zero unauthorized telemetry, end-to-end encryption in transit and at rest, and explicit user consent mechanisms built into every mobile and web application.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Hero Left Content */}
            <div>
              <div className="badge badge-brand" style={{ marginBottom: '20px' }}>
                <Sparkles size={14} />
                <span>Bitzer Solutions LLC • Mobile & Web Studio</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.15, marginBottom: '24px' }}>
                Engineering <span className="text-gradient">High-Impact</span> Mobile Apps & Edge Web Systems
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '36px', maxWidth: '580px' }}>
                Official website of <strong>Bitzer Solutions LLC</strong>. We architect intuitive Android & iOS mobile applications and scalable web platforms with uncompromising speed, rock-solid security, and full Google Play Store compliance.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <Link href="/apps" className="btn btn-primary" id="hero-btn-explore-apps">
                  Explore Mobile Apps <ArrowRight size={18} />
                </Link>
                <Link href="#verification" className="btn btn-secondary" id="hero-btn-verification">
                  <ShieldCheck size={18} color="#34d399" /> Play Store Verification
                </Link>
              </div>

              {/* Developer Trust Badges */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '24px', 
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} color="#34d399" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Google Play Developer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} color="#34d399" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Cloudflare Edge Hosted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={18} color="#34d399" />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Data Privacy Certified</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Showcase */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(99, 102, 241, 0.2)',
                border: '1px solid var(--border-highlight)'
              }}>
                <Image 
                  src="/images/hero-app.jpg"
                  alt="Bitzer Solutions LLC Mobile App Interface"
                  width={680}
                  height={382}
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Floating Stat Card 1 */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid var(--border-cyan)',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Star size={20} color="#22d3ee" fill="#22d3ee" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>4.8 / 5.0</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Average Store Rating</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-10px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <DownloadCloud size={20} color="#34d399" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>1.2M+ Users</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Global App Installs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Play Store Verification Anchor */}
      <PlayStoreVerificationBadge />

      {/* Featured Mobile Applications Showcase */}
      <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <div className="badge badge-cyan" style={{ marginBottom: '12px' }}>
                <Smartphone size={14} />
                <span>Published Mobile Applications</span>
              </div>
              <h2 style={{ fontSize: '2.4rem' }}>
                Featured Apps by <span className="text-gradient">Bitzer Solutions LLC</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '8px', maxWidth: '600px' }}>
                Each mobile product adheres to our strict privacy charter, Google Play Data Safety guidelines, and fast edge cloud sync.
              </p>
            </div>

            <Link href="/apps" className="btn btn-secondary">
              View All Apps & Packages &rarr;
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="apps-grid">
            {featuredApps.map((app) => (
              <div key={app.id} className="app-card" id={`app-card-${app.id}`}>
                <div>
                  <div className="app-header">
                    <div className="app-icon">
                      <Smartphone size={32} color="#818cf8" />
                    </div>
                    <div className="app-meta">
                      <h3 className="app-title">{app.name}</h3>
                      <span className="app-pkg">{app.packageId}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <span>★ {app.rating}</span>
                        <span>•</span>
                        <span>{app.downloads} Installs</span>
                        <span>•</span>
                        <span style={{ color: '#34d399' }}>Verified</span>
                      </div>
                    </div>
                  </div>

                  <p className="app-desc">{app.description}</p>

                  <div className="app-badges-row">
                    {app.tags.map((tag, idx) => (
                      <span key={idx} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="app-actions">
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link href="/privacy-policy" style={{ fontSize: '0.8rem', color: 'var(--accent-secondary-light)', textDecoration: 'none' }}>
                      Privacy Policy
                    </Link>
                    <span style={{ color: 'var(--border-subtle)' }}>|</span>
                    <Link href="/data-deletion" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'none' }}>
                      Data Deletion
                    </Link>
                  </div>

                  <Link href="/support" className="btn btn-emerald" style={{ padding: '6px 14px', fontSize: '0.8rem' }}>
                    App Support
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Platform & Web Development Section */}
      <section style={{ padding: '90px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div>
              <div className="badge badge-brand" style={{ marginBottom: '14px' }}>
                <Layers size={14} />
                <span>Web & Cloud Architecture</span>
              </div>
              <h2 style={{ fontSize: '2.3rem', marginBottom: '20px', lineHeight: 1.25 }}>
                Not Just Apps — We Build <span className="text-gradient-cyan">Scalable Web Platforms</span> Too
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
                In addition to native Android and cross-platform apps, <strong>Bitzer Solutions LLC</strong> engineers modern web applications powered by Next.js, TypeScript, and Cloudflare Pages.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={16} color="#818cf8" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>Cloudflare Global Edge Acceleration</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Ultra-fast static caching and edge functions with 100% SLA uptime.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={16} color="#22d3ee" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>Cross-Device Synchronization</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Seamless state sharing between Android mobile devices, tablets, and desktop browsers.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={16} color="#34d399" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff' }}>Lighthouse 100 Performance & SEO</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Automated schema markup, zero bloat vanilla CSS, and accessibility standards.</p>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn btn-primary">
                Inquire About Custom Development &rarr;
              </Link>
            </div>

            <div style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, 0.2)',
              border: '1px solid var(--border-cyan)'
            }}>
              <Image 
                src="/images/showcase-devices.jpg"
                alt="Multi device app and web showcase by Bitzer Solutions LLC"
                width={700}
                height={394}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.015)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <div className="badge badge-brand" style={{ marginBottom: '14px' }}>
              <Cpu size={14} />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '16px' }}>
              How We Build & Publish Software
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              From initial architecture to Google Play Store submission and ongoing user support, every stage is executed with precision.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {engineeringPillars.map((pillar, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ marginBottom: '20px' }}>{pillar.icon}</div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>{pillar.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Play Store Reviewers & User FAQ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="badge badge-verified" style={{ marginBottom: '14px' }}>
              <ShieldCheck size={14} />
              <span>Developer Verification & Trust</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Key answers for Google Play review specialists, enterprise partners, and end users.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '24px 30px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
                Is Bitzer Solutions LLC a verified Google Play Store developer?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                Yes. Bitzer Solutions LLC is a registered corporate entity and official Google Play developer. We strictly adhere to Google Play Developer Policies, maintaining high developer integrity, verified business identity, and direct support lines.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '24px 30px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
                How do users of Bitzer Solutions apps request their data or account to be deleted?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                In full accordance with Google Play data deletion policies, users can visit our dedicated web deletion page at <Link href="/data-deletion" style={{ color: 'var(--accent-secondary-light)' }}>/data-deletion</Link> or email our privacy team at <a href="mailto:support@bitzers.top" style={{ color: '#ffffff' }}>support@bitzers.top</a>. Requests are processed within 24–48 hours.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '24px 30px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
                Where can I find the official Privacy Policy for Bitzer Solutions LLC applications?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                Our complete privacy policy is available online at <Link href="/privacy-policy" style={{ color: 'var(--accent-secondary-light)' }}>/privacy-policy</Link>. It explicitly details permissions, third-party SDK integrations (Google Play Services, AdMob, Firebase), and user rights under GDPR and CCPA.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '24px 30px' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
                Does Bitzer Solutions develop custom mobile apps and web software for clients?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                Yes! While we maintain our own in-house suite of published Android applications, we also partner with select companies to engineer custom mobile apps and web platforms. Contact our development team at <Link href="/contact" style={{ color: 'var(--accent-secondary-light)' }}>/contact</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
            border: '1px solid var(--border-highlight)',
            borderRadius: 'var(--radius-lg)',
            padding: '60px 40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#ffffff' }}>
              Need Help With a Bitzer Solutions App?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 32px' }}>
              Our dedicated mobile engineering and support desk is ready to assist you. Contact our team for technical assistance, privacy inquiries, or developer collaboration.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/support" className="btn btn-primary" id="cta-btn-support">
                Visit App Support Desk
              </Link>
              <Link href="/contact" className="btn btn-secondary" id="cta-btn-inquire">
                Contact Corporate Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
