import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink py-[30px] text-cream/50">
      <div className="wrap flex flex-wrap items-center justify-between gap-4 text-[0.85rem]">
        <a
          href="#home"
          className="font-serif text-[1rem] font-bold text-gold-soft"
        >
          Becky Anjola Lasore
        </a>
        <div className="flex flex-wrap items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 transition-colors duration-200 hover:text-gold-soft"
            >
              {link.label}
            </a>
          ))}
          <span>&copy; 2026. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
