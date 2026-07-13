/**
 * Soft page transition: every route change arrives with a quiet
 * fade-and-rise. Removed automatically for reduced-motion users.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-in">{children}</div>;
}
