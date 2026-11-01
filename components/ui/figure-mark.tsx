export function FigureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 12v196M28 196h276" className="figure-draw" />
      <path d="M48 168 L92 128 L138 142 L176 86 L228 104 L278 48" className="figure-draw" />
      <path d="M48 148 L92 118 L138 96 L176 112 L228 74 L278 88" className="figure-draw" />
      {[
        [92, 128],
        [176, 86],
        [278, 48],
        [138, 96],
        [228, 74],
      ].map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="2.4"
          className="figure-node"
          style={{ animationDelay: `${0.7 + index * 0.08}s` }}
        />
      ))}
    </svg>
  );
}
