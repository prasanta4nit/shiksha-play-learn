import { school } from "@/data/school";

export default function WhatsAppButton() {
  const href = `https://wa.me/${school.contact.whatsappNumber}?text=${encodeURIComponent(
    school.contact.whatsappPrefilledMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-mint-500 text-2xl text-white shadow-soft-lg transition-transform hover:scale-105"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
