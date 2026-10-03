import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Mail, ExternalLink, AlertCircle, Trash2, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bitzer Solutions LLC (Google Play Compliant)',
  description: 'Official privacy policy for Bitzer Solutions LLC mobile applications and web services. Comprehensive disclosure of data collection, third-party SDKs, COPPA, and user data deletion.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 3, 2026';

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-verified" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={16} />
            <span>Google Play Policy Compliant</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Developer: <strong>Bitzer Solutions LLC</strong> • Effective Date: {lastUpdated}
          </p>
        </div>

        {/* Verification Summary Banner */}
        <div className="verification-callout" style={{ marginBottom: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '6px' }}>
              Google Play Data Safety Commitment
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
              Bitzer Solutions LLC does <strong>not sell</strong> user personal data to third parties. We encrypt all network data via TLS 1.3 and provide immediate data deletion options.
            </p>
          </div>
          <Link href="/data-deletion" className="btn btn-secondary" style={{ whiteSpace: 'nowrap' }}>
            <Trash2 size={16} /> Request Data Deletion
          </Link>
        </div>

        {/* Main Policy Document */}
        <div className="policy-content">
          <h2>1. Introduction & Developer Identity</h2>
          <p>
            Welcome to the Privacy Policy of <strong>Bitzer Solutions LLC</strong> (&quot;Bitzer Solutions&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). 
            Bitzer Solutions LLC is a registered software development and mobile application publishing company.
          </p>
          <p>
            This Privacy Policy governs your use of all mobile software applications (including Android applications distributed via the Google Play Store and iOS applications) as well as associated web platforms and APIs developed and maintained by Bitzer Solutions LLC.
          </p>
          <p>
            If you have questions or concerns regarding our privacy practices, you can contact our designated Data Protection Officer at{' '}
            <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>
              support@bitzers.top
            </a>.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            Depending on which Bitzer Solutions LLC application or web service you use, we may collect the following categories of information:
          </p>
          <h3>A. Information You Voluntarily Provide</h3>
          <ul>
            <li><strong>Account Information:</strong> When you create an optional account or sync settings, we may collect your email address, username, or profile name.</li>
            <li><strong>Customer Support Communications:</strong> Content of feedback, problem reports, crash details, and email communications submitted to our support team.</li>
            <li><strong>User-Generated Content:</strong> Documents, notes, or fitness logs created by you inside productivity apps (such as NovaScan Pro or PulseTracker). By default, these remain stored locally on your device unless you explicitly enable cloud sync.</li>
          </ul>

          <h3>B. Automatically Collected Technical & Diagnostic Data</h3>
          <ul>
            <li><strong>Device Identifiers:</strong> Anonymous hardware device identifiers, operating system version (e.g. Android 14), device model, CPU architecture, screen resolution, and preferred locale.</li>
            <li><strong>Advertising ID:</strong> Google Advertising ID (AAID) for apps utilizing non-personalized or personalized advertising, subject to your Google account privacy preferences.</li>
            <li><strong>Crash Logs & Performance Metrics:</strong> Stack traces, ANR (Application Not Responding) metrics, and latency diagnostics collected via Google Firebase Crashlytics to diagnose software bugs and improve app stability.</li>
          </ul>

          <h2>3. Device Permissions & System Access</h2>
          <p>
            Our applications only request runtime permissions that are strictly necessary to deliver core application functionality, in strict accordance with the Google Play Developer Program Policy:
          </p>
          <ul>
            <li><strong>Camera (android.permission.CAMERA):</strong> Utilized solely in document scanning and OCR applications (such as NovaScan Pro) to capture documents you choose to digitize. Video or photo streams are processed on-device and never transmitted to external servers without explicit consent.</li>
            <li><strong>Storage / Media Access:</strong> Utilized to allow you to export scanned documents or save workout and analytics reports to your device storage.</li>
            <li><strong>Internet Access (android.permission.INTERNET):</strong> Utilized to verify app licenses, connect to cloud synchronization services (when activated by the user), load advertisements (in free app tiers), and communicate with our customer support endpoints.</li>
            <li><strong>Post Notifications (android.permission.POST_NOTIFICATIONS):</strong> Utilized solely for reminders, task alarms, or status updates initiated by the user. You can disable notifications at any time via Android system settings.</li>
          </ul>

          <h2>4. Third-Party Service Providers & SDKs</h2>
          <p>
            To deliver reliable mobile experiences, Bitzer Solutions LLC integrates industry-standard third-party SDKs verified for Google Play compliance:
          </p>
          <ul>
            <li>
              <strong>Google Play Services:</strong> Core infrastructure for Android application functionality, security updates, and in-app billing. (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary-light)' }}>Google Privacy Policy</a>)
            </li>
            <li>
              <strong>Google AdMob:</strong> For applications that display advertisements, AdMob collects anonymous identifiers to serve contextual or personalized ads based on your consent.
            </li>
            <li>
              <strong>Google Firebase (Analytics & Crashlytics):</strong> Diagnostic analytics to understand feature usage and monitor crash rates to deliver rapid bug fixes.
            </li>
            <li>
              <strong>Cloudflare Inc.:</strong> Edge CDN, DDoS mitigation, and API security for our cloud web services. (<a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-secondary-light)' }}>Cloudflare Privacy Policy</a>)
            </li>
          </ul>

          <h2>5. Children&apos;s Privacy (COPPA & Google Play Families Policy)</h2>
          <div className="policy-highlight-box">
            <p>
              Bitzer Solutions LLC strictly respects children&apos;s privacy. Our general audience applications are not directed to children under the age of 13 (or under 16 in the European Economic Area).
            </p>
          </div>
          <p>
            We do not knowingly collect personal identifiable information from children under 13. If you become aware that a child has provided us with personal data without parental consent, please contact us immediately at{' '}
            <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>
              support@bitzers.top
            </a>
            , and we will take immediate steps to delete such data from our systems.
          </p>

          <h2>6. Data Retention, Security & Encryption</h2>
          <p>
            Bitzer Solutions LLC takes the protection of user data with paramount importance:
          </p>
          <ul>
            <li><strong>Encryption in Transit:</strong> All data transmitted between our mobile apps, web servers, and third-party APIs is encrypted using Transport Layer Security (TLS 1.3 / HTTPS).</li>
            <li><strong>Encryption at Rest:</strong> Any synced data stored on our servers is encrypted using industry-standard AES-256 encryption.</li>
            <li><strong>Retention Policy:</strong> We retain account data only as long as necessary to provide you with the application services or until you request its deletion. Diagnostic logs are automatically purged on a 90-day rolling cycle.</li>
          </ul>

          <h2>7. User Data Deletion Instructions (Google Play Requirement)</h2>
          <p>
            In compliance with Google Play&apos;s data deletion requirement, all users have the absolute right to request the permanent deletion of their account and all associated data stored by Bitzer Solutions LLC:
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '20px' }}>
            <h4 style={{ color: '#ffffff', marginBottom: '10px' }}>How to Request Data Deletion:</h4>
            <ol>
              <li>Visit our dedicated automated web portal at: <Link href="/data-deletion" style={{ color: 'var(--accent-secondary-light)' }}>https://bitzers.top/data-deletion</Link></li>
              <li>Or email us at: <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a> with the subject line <em>&quot;Data Deletion Request&quot;</em> and provide your account email or User ID.</li>
              <li>Within your mobile app: Go to <strong>Settings &rarr; Account & Privacy &rarr; Delete Account & Stored Data</strong>.</li>
            </ol>
            <p style={{ margin: '10px 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>
              All deletion requests are verified and permanently purged within 48 hours of confirmation.
            </p>
          </div>

          <h2>8. Your Rights Under GDPR and CCPA</h2>
          <p>
            Depending on your jurisdiction (such as California or the European Economic Area), you hold specific statutory rights:
          </p>
          <ul>
            <li><strong>Right to Access:</strong> Request a copy of all personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request deletion of your personal records.</li>
            <li><strong>Right to Opt-Out:</strong> Opt-out of personalized advertisements via your Android device settings (Settings &rarr; Google &rarr; Ads &rarr; Reset or Delete Advertising ID).</li>
          </ul>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy periodically to reflect changes in our applications or evolving legal requirements. We will notify you of any material changes by updating the &quot;Effective Date&quot; at the top of this policy and publishing the revised version at this URL.
          </p>

          <h2>10. Contact Information & Data Protection Officer</h2>
          <p>
            If you have any questions, comments, or legal inquiries concerning this Privacy Policy, please contact:
          </p>
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: '#ffffff', marginBottom: '8px' }}>Bitzer Solutions LLC</h4>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Attention:</strong> Privacy & Compliance Department</p>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Email:</strong> <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a></p>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Support:</strong> <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a></p>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Website:</strong> https://bitzers.top</p>
          </div>
        </div>
      </div>
    </div>
  );
}
