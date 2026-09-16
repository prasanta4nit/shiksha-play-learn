// Lightweight, dependency-free decorative shapes (clouds, stars, blobs)
// used to add a playful feel without heavy illustration assets.

export function CloudShape({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M16 30a12 12 0 0 1-1-24 14 14 0 0 1 27-4 10 10 0 0 1 6 19H16z" />
    </svg>
  );
}

export function StarShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0l2.9 8.3L24 12l-9.1 3.7L12 24l-2.9-8.3L0 12l9.1-3.7z" />
    </svg>
  );
}

export function BlobShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden fill="currentColor">
      <path d="M45.3,-58.5C58.6,-49.8,69.2,-35.7,73.6,-19.8C78,-3.9,76.2,13.9,68.6,28.7C61,43.5,47.6,55.3,32.4,63.2C17.2,71.1,0.2,75.1,-16.9,73.1C-34,71.1,-51.2,63.1,-62.6,49.7C-74,36.3,-79.6,17.5,-78.2,-0.4C-76.8,-18.4,-68.4,-35.5,-55.6,-44.5C-42.8,-53.6,-25.6,-54.5,-8.7,-58.5C8.2,-62.4,32,-67.2,45.3,-58.5Z" transform="translate(100 100)" />
    </svg>
  );
}
