export function Background() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03]" />
    </>
  );
}
