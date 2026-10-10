export function MediaSlot({
  label = "Image placeholder",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`image-stage ${className}`} aria-label={label} role="img">
      {label}
    </div>
  );
}
