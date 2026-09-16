import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { footerLinks } from "@/data/nav";
import { school } from "@/data/school";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={school.logo.image}
              alt={school.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <span>
              <span className="block font-display text-lg font-bold">
                {school.logo.line1} {school.logo.line2}
              </span>
              <span className="block text-xs text-white/60">{school.logo.line3}</span>
            </span>
          </div>
          <p className="mt-4 text-sm font-semibold text-sun-300">{school.tagline}</p>
          <p className="mt-2 text-sm text-white/60">{school.location.fullAddress}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/70">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/70">
            Follow Us
          </h3>
          <div className="mt-4 flex gap-3">
            <SocialIcon href={school.social.youtube} label="YouTube" icon="▶️" />
            {school.social.facebook ? (
              <SocialIcon href={school.social.facebook} label="Facebook" icon="📘" />
            ) : null}
            {school.social.instagram ? (
              <SocialIcon href={school.social.instagram} label="Instagram" icon="📸" />
            ) : null}
          </div>
          <div className="mt-6 space-y-1 text-sm text-white/60">
            <p>{school.contact.phoneDisplay}</p>
            <p>{school.contact.email}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-center text-xs text-white/50">
            © {new Date().getFullYear()} {school.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg hover:bg-white/20"
    >
      <span aria-hidden>{icon}</span>
    </a>
  );
}
