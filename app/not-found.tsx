import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap section">
      <p className="eyebrow">404</p>
      <h1 className="h1 mt-4">Page not found</h1>
      <p className="lead mt-4">The page you requested is not available.</p>
      <Link href="/" className="btn btn-primary mt-8">
        Return home
      </Link>
    </div>
  );
}
