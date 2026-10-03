import React from 'react';
import Link from 'next/link';
import { Shield, FileCheck, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Bitzer Solutions LLC',
  description: 'Terms of Service and End User License Agreement (EULA) for Bitzer Solutions LLC mobile applications and web services.',
};

export default function TermsPage() {
  const lastUpdated = 'October 3, 2026';

  return (
    <div style={{ padding: '60px 0 100px' }}>
      <div className="container-narrow">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge badge-brand" style={{ marginBottom: '16px' }}>
            <FileCheck size={16} />
            <span>Legal Agreement</span>
          </div>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Publisher: <strong>Bitzer Solutions LLC</strong> • Effective Date: {lastUpdated}
          </p>
        </div>

        <div className="policy-content">
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and <strong>Bitzer Solutions LLC</strong> (&quot;Bitzer Solutions&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), regarding your access to and use of our mobile applications distributed on the Google Play Store, Apple App Store, and our affiliated web services.
          </p>
          <p>
            By downloading, installing, accessing, or using any of our applications or websites, you signify that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must immediately uninstall and discontinue using our applications and services.
          </p>

          <h2>2. License & Intellectual Property</h2>
          <p>
            Subject to your compliance with these Terms, Bitzer Solutions LLC grants you a limited, non-exclusive, non-transferable, revocable license to download and install a copy of our applications on mobile devices that you own or control, solely for your personal, non-commercial use.
          </p>
          <p>
            All source code, designs, graphics, interfaces, trademarks, and algorithms contained within Bitzer Solutions LLC applications are the exclusive intellectual property of Bitzer Solutions LLC and are protected by international copyright and intellectual property laws.
          </p>

          <h2>3. Acceptable Use Policy</h2>
          <p>You agree not to engage in any of the following prohibited activities:</p>
          <ul>
            <li>Reverse engineering, decompiling, or attempting to extract the source code of our Android or iOS packages.</li>
            <li>Using automated bots, scrapers, or exploits to compromise the stability or integrity of our APIs.</li>
            <li>Attempting to bypass security measures, license verifications, or Google Play billing systems.</li>
            <li>Using our services for unlawful, fraudulent, or malicious purposes.</li>
          </ul>

          <h2>4. In-App Purchases & Subscriptions</h2>
          <p>
            Any digital products, premium features, or subscriptions purchased within our Android applications are processed securely through <strong>Google Play In-App Billing</strong>. All billing disputes, cancellations, and refund requests are subject to the policies established by Google Play Store.
          </p>
          <p>
            You may manage or cancel subscriptions at any time via your Google Play account settings (Google Play Store &rarr; Profile &rarr; Payments & Subscriptions).
          </p>

          <h2>5. Privacy & Data Safety</h2>
          <p>
            Your privacy is of foundational importance to us. Please review our <Link href="/privacy-policy" style={{ color: 'var(--accent-secondary-light)' }}>Privacy Policy</Link>, which explains how we collect, store, and safeguard your data, as well as our <Link href="/data-deletion" style={{ color: 'var(--accent-secondary-light)' }}>User Data Deletion Portal</Link>.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            OUR APPLICATIONS AND SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. BITZER SOLUTIONS LLC DOES NOT GUARANTEE THAT THE APPLICATIONS WILL BE UNINTERRUPTED, BUG-FREE, OR ERROR-FREE.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BITZER SOLUTIONS LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR APPLICATIONS.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions regarding these Terms of Service, please reach out to us at:
          </p>
          <div style={{ background: 'rgba(15, 23, 42, 0.7)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <h4 style={{ color: '#ffffff', marginBottom: '6px' }}>Bitzer Solutions LLC</h4>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Email:</strong> <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a></p>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Legal:</strong> <a href="mailto:support@bitzers.top" style={{ color: 'var(--accent-secondary-light)' }}>support@bitzers.top</a></p>
            <p style={{ margin: '4px 0', color: 'var(--text-secondary)' }}><strong>Website:</strong> https://bitzers.top</p>
          </div>
        </div>
      </div>
    </div>
  );
}
