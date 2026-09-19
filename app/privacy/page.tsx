import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AppSweep",
  description: "How AppSweep handles information in the application and on its website.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/">
          <Image src="/appsweep-icon.png" alt="" width={36} height={36} />
          <span>AppSweep</span>
        </Link>
        <Link className="legal-back" href="/">Back to AppSweep</Link>
      </header>

      <article className="legal-content">
        <p>Effective September 19, 2026</p>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">
          AppSweep performs application discovery and removal on your Mac. This policy explains what the app accesses locally and what may be processed when you visit the website.
        </p>

        <section className="legal-section">
          <h2>1. Information accessed by AppSweep</h2>
          <p>AppSweep examines information needed to identify installed applications and related items. This may include application names, versions, bundle identifiers, file paths, file sizes, running processes, launch agents, launch daemons, caches, preferences, containers, logs, and saved application data.</p>
          <p>This information is processed locally on your Mac. The current version does not upload it to Debarun Lahiri or to an AppSweep server.</p>
        </section>

        <section className="legal-section">
          <h2>2. Information stored locally</h2>
          <p>AppSweep may save a local application catalog so it can display discovered applications and update their availability. This catalog remains in AppSweep’s application-support data on your Mac and is not transmitted by the app.</p>
        </section>

        <section className="legal-section">
          <h2>3. File removal and administrator access</h2>
          <p>When you remove items, AppSweep accesses only the files you select. Some protected files may require macOS administrator authorization. Authentication is handled by macOS; AppSweep does not receive or store your administrator password.</p>
        </section>

        <section className="legal-section">
          <h2>4. Website information</h2>
          <p>The AppSweep website does not currently provide user accounts, advertising, analytics, or tracking cookies. When you visit the website or download the DMG, hosting and network providers may process standard request information such as your IP address, browser information, requested URL, date and time, and download activity to deliver and secure the service.</p>
        </section>

        <section className="legal-section">
          <h2>5. External services</h2>
          <p>The website and application link to GitHub, LinkedIn, and email services. Information you provide to those services is handled under their respective privacy policies.</p>
        </section>

        <section className="legal-section">
          <h2>6. Sharing and selling information</h2>
          <p>AppSweep does not sell personal information. The application does not share locally processed application information with third parties. Website infrastructure providers may process limited technical information as necessary to operate and protect the website.</p>
        </section>

        <section className="legal-section">
          <h2>7. Retention and your choices</h2>
          <p>Local AppSweep data remains on your Mac until it is removed through Finder or by uninstalling AppSweep and deleting its application-support data. Retention of website server logs, if any, is controlled by the relevant hosting provider.</p>
          <p>You may contact us to ask a privacy question or request deletion of information you directly provided through email.</p>
        </section>

        <section className="legal-section">
          <h2>8. Children’s privacy</h2>
          <p>AppSweep is a general-purpose macOS utility and is not directed to children. The application does not knowingly collect personal information from children.</p>
        </section>

        <section className="legal-section">
          <h2>9. Policy changes</h2>
          <p>This policy may be updated when AppSweep’s functionality or data practices change. The effective date will be updated when changes are published.</p>
        </section>

        <section className="legal-section">
          <h2>10. Contact</h2>
          <p>For privacy questions, email <a href="mailto:debarunlahiri2016@gmail.com">debarunlahiri2016@gmail.com</a>.</p>
        </section>
      </article>
    </main>
  );
}
