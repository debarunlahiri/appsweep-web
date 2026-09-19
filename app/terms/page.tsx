import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — AppSweep",
  description: "Terms governing use of the AppSweep application and website.",
};

export default function TermsPage() {
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
        <h1>Terms of Use</h1>
        <p className="legal-intro">
          These Terms govern your use of the AppSweep application, website, and downloadable files. By downloading or using AppSweep, you agree to these Terms.
        </p>

        <section className="legal-section">
          <h2>1. About AppSweep</h2>
          <p>AppSweep is a macOS utility that discovers installed applications and related files, presents items for review, and lets users move selected items to Trash or delete them permanently.</p>
        </section>

        <section className="legal-section">
          <h2>2. Permission to use the software</h2>
          <p>You may download and use AppSweep for lawful personal or business purposes. This permission is limited, non-exclusive, non-transferable, and does not transfer ownership of AppSweep or its content.</p>
          <p>You may not misrepresent AppSweep as your own product, distribute a modified version under the AppSweep name, use it unlawfully, or interfere with the website or download service.</p>
        </section>

        <section className="legal-section">
          <h2>3. Your responsibility</h2>
          <p>You are responsible for reviewing every selected file before removal. No automated scanner can guarantee that every related item will be found or that every suggested item is safe to remove in every environment.</p>
          <p>Permanent deletion cannot be undone. Maintain current backups and use the Trash option when you may need to recover files.</p>
        </section>

        <section className="legal-section">
          <h2>4. Administrator authorization</h2>
          <p>Certain applications, services, or system locations may require administrator authorization. You are responsible for ensuring that you have permission to remove the selected software and files from the Mac you are using.</p>
        </section>

        <section className="legal-section">
          <h2>5. System applications and third-party software</h2>
          <p>AppSweep protects recognized macOS system applications from removal. Apple and third-party application names, icons, and trademarks remain the property of their respective owners. AppSweep is not endorsed by or affiliated with those third parties unless expressly stated.</p>
        </section>

        <section className="legal-section">
          <h2>6. Availability and updates</h2>
          <p>The application, website, download, features, and system requirements may be changed, suspended, or discontinued. Updates may change how AppSweep identifies or removes related files.</p>
        </section>

        <section className="legal-section">
          <h2>7. No warranty</h2>
          <p>To the maximum extent permitted by applicable law, AppSweep is provided “as is” and “as available,” without warranties of any kind. There is no guarantee that AppSweep will identify every related file, work with every application, remain uninterrupted, or be free from errors.</p>
        </section>

        <section className="legal-section">
          <h2>8. Limitation of liability</h2>
          <p>To the maximum extent permitted by applicable law, Debarun Lahiri will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of data, software, profits, or access arising from use of AppSweep. Nothing in these Terms excludes liability that cannot legally be excluded.</p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to these Terms</h2>
          <p>These Terms may be updated from time to time. Continued use of AppSweep after updated Terms are published means you accept the revised Terms.</p>
        </section>

        <section className="legal-section">
          <h2>10. Contact</h2>
          <p>For questions about these Terms, email <a href="mailto:debarunlahiri2016@gmail.com">debarunlahiri2016@gmail.com</a>.</p>
        </section>
      </article>
    </main>
  );
}
