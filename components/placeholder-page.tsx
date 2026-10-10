export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="wrap section">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="h1 mt-4 max-w-[18ch]">{title}</h1>
      <p className="lead mt-5">{description}</p>
    </div>
  );
}
