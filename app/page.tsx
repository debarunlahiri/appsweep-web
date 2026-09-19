import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Mail,
  ScanSearch,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const features = [
  {
    icon: ScanSearch,
    title: "See what an app leaves behind",
    description:
      "AppSweep finds related caches, preferences, containers, launch items, logs, and saved data.",
  },
  {
    icon: ShieldCheck,
    title: "Review everything first",
    description:
      "Nothing disappears behind a progress bar. Choose the exact files you want to remove before continuing.",
  },
  {
    icon: Trash2,
    title: "Remove it your way",
    description:
      "Move selected items to Trash for a recoverable cleanup, or permanently delete them after confirmation.",
  },
];

export default function Home() {
  const downloadUrl = process.env.NEXT_PUBLIC_DMG_URL;

  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="AppSweep home">
          <Image src="/appsweep-icon.png" alt="" width={42} height={42} priority />
          <span>AppSweep</span>
        </a>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a className="nav-download" href="#download">
            Download
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Native macOS utility</div>
          <h1>Uninstall Mac apps.<br /><em>Leave nothing behind.</em></h1>
          <p>
            AppSweep shows the files, services, and background items connected to an app—then lets you decide exactly what to remove.
          </p>
          <div className="hero-actions">
            {downloadUrl ? (
              <a className="button primary" href={downloadUrl} download>
                <Download size={19} /> Download for macOS
              </a>
            ) : (
              <a className="button primary" href="#download">
                <Download size={19} /> Download for macOS
              </a>
            )}
            <a className="button secondary" href="#screenshots">
              See how it works <ArrowRight size={18} />
            </a>
          </div>
          <div className="requirements">
            <CheckCircle2 size={16} /> macOS 14 or later
          </div>
        </div>

        <div className="hero-icon" aria-hidden="true">
          <div className="icon-glow" />
          <Image src="/appsweep-icon.png" alt="" width={360} height={360} priority />
        </div>
      </section>

      <section className="product-stage shell" aria-label="AppSweep application preview">
        <div className="window-frame">
          <div className="window-bar"><i /><i /><i /></div>
          <Image
            src="/appsweep-overview.png"
            alt="AppSweep showing an installed application, related files, recoverable space, and services"
            width={2480}
            height={1756}
            priority
          />
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="section-heading">
          <span className="kicker">Built for clarity</span>
          <h2>A careful cleanup, not a blind delete.</h2>
          <p>Understand what belongs to an app before you remove it.</p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase shell" id="screenshots">
        <div className="section-heading compact">
          <span className="kicker">You stay in control</span>
          <h2>Choose every item before removal.</h2>
          <p>Review files, spot protected services, and decide whether to use Trash or permanent deletion.</p>
        </div>
        <div className="review-layout">
          <div className="review-points">
            <div><strong>Selective removal</strong><span>Keep anything you still need.</span></div>
            <div><strong>Permission awareness</strong><span>See which items may require administrator access.</span></div>
            <div><strong>Safer by default</strong><span>Move files to Trash when you want a recoverable option.</span></div>
          </div>
          <div className="review-shot">
            <Image
              src="/appsweep-review.png"
              alt="AppSweep uninstall review listing selected application files and protected launch services"
              width={1444}
              height={1184}
            />
          </div>
        </div>
      </section>

      <section className="download-section shell" id="download">
        <Image src="/appsweep-icon.png" alt="AppSweep app icon" width={104} height={104} />
        <div>
          <span className="kicker">AppSweep 1.0</span>
          <h2>Ready for a cleaner Mac?</h2>
          <p>Download AppSweep for macOS 14 or later.</p>
        </div>
        {downloadUrl ? (
          <a className="button primary large" href={downloadUrl} download>
            <Download size={20} /> Download DMG
          </a>
        ) : (
          <div className="download-pending">
            <button className="button primary large" type="button" disabled>
              <Download size={20} /> Download DMG
            </button>
            <small>DMG coming soon</small>
          </div>
        )}
      </section>

      <footer className="footer shell">
        <div className="footer-brand">
          <Image src="/appsweep-icon.png" alt="" width={34} height={34} />
          <div><strong>AppSweep</strong><span>Made by Debarun Lahiri</span></div>
        </div>
        <div className="socials" aria-label="Contact links">
          <a href="https://github.com/debarunlahiri/" aria-label="GitHub"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/debarun-lahiri-a67875126/" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="mailto:debarunlahiri2016@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
        <p>© 2026 Debarun Lahiri. All rights reserved.</p>
      </footer>
    </main>
  );
}
