import Image from "next/image";
import Link from "next/link";
import { BadgeDollarSign, Download, Mail, ShieldCheck, WifiOff } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const details = [
  ["Find related files", "See the caches, preferences, containers, logs, launch items, and saved data connected to an application."],
  ["Review before removing", "AppSweep shows every detected item first, including its location, size, and whether administrator permission may be required."],
  ["Choose how to remove it", "Move selected items to Trash for a recoverable cleanup, or permanently delete them after confirmation."],
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AppSweep home">
          <Image src="/appsweep-icon.png" alt="" width={36} height={36} priority />
          <span>AppSweep</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#screenshots">Screenshots</a>
          <a className="header-download" href="#download">Download</a>
        </nav>
      </header>

      <section className="hero">
        <Image className="hero-app-icon" src="/appsweep-icon.png" alt="AppSweep app icon" width={116} height={116} priority />
        <p className="platform">A native application uninstaller for macOS</p>
        <h1>Remove apps and the files<br />they leave behind.</h1>
        <p className="hero-summary">
          AppSweep finds related files and background services, shows you what it found, and lets you choose exactly what should be removed.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="/AppSweep-1.0.dmg" download>
            <Download size={18} /> Download AppSweep
          </a>
          <span>Requires macOS 14 or later</span>
        </div>
      </section>

      <section className="overview" id="screenshots" aria-label="AppSweep application overview">
        <Image
          src="/appsweep-overview.png"
          alt="AppSweep showing an installed application, its related files, recoverable space, and services"
          width={2480}
          height={1756}
          priority
        />
      </section>

      <section className="privacy-promise" aria-labelledby="privacy-promise-title">
        <div className="privacy-promise-inner">
          <div className="privacy-promise-copy">
            <p>Private by design</p>
            <h2 id="privacy-promise-title">Your Mac stays your business.</h2>
            <p>
              The AppSweep application works entirely on your Mac. It does not need an internet connection, show ads, track your activity, or upload information about your apps and files. It is completely free to use.
            </p>
          </div>
          <div className="privacy-points">
            <article>
              <WifiOff aria-hidden="true" />
              <div><h3>No internet required</h3><p>Scanning and removal happen locally on your Mac.</p></div>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <div><h3>No ads or app tracking</h3><p>The app has no analytics, advertising, accounts, or personal-data collection.</p></div>
            </article>
            <article>
              <BadgeDollarSign aria-hidden="true" />
              <div><h3>Completely free</h3><p>No subscription, trial period, or hidden paid features.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-intro">
          <p>How it works</p>
          <h2>Nothing is removed until you review it.</h2>
        </div>
        <div className="detail-list">
          {details.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="review-section">
        <div className="review-copy">
          <p>Removal review</p>
          <h2>You decide what goes.</h2>
          <p className="review-description">
            Select individual items, identify protected launch services, and choose between moving files to Trash or deleting them permanently.
          </p>
        </div>
        <Image
          src="/appsweep-review.png"
          alt="AppSweep uninstall review listing application files and protected launch services"
          width={1444}
          height={1184}
        />
      </section>

      <section className="download-section" id="download">
        <Image src="/appsweep-icon.png" alt="" width={76} height={76} />
        <div><h2>AppSweep 1.0</h2><p>For macOS 14 and later.</p></div>
        <a className="primary-button" href="/AppSweep-1.0.dmg" download>
          <Download size={18} /> Download DMG
        </a>
      </section>

      <footer>
        <div><strong>AppSweep</strong><span>Made by Debarun Lahiri</span></div>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <div className="contact-links">
          <a href="https://github.com/debarunlahiri/" aria-label="GitHub"><FaGithub size={19} /></a>
          <a href="https://www.linkedin.com/in/debarun-lahiri-a67875126/" aria-label="LinkedIn"><FaLinkedin size={19} /></a>
          <a href="mailto:debarunlahiri2016@gmail.com" aria-label="Email"><Mail size={19} /></a>
        </div>
        <p>© 2026 Debarun Lahiri</p>
      </footer>
    </main>
  );
}
