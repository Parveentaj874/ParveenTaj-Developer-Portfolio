export default function AnimatedBackground() {
  return (
    <div
      className="animated-bg pointer-events-none"
      aria-hidden="true"
    >
      <div className="grid-layer" />
      <div className="glow-layer" />
    </div>
  );
}
