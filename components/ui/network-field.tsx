const links = [
  "M48 72 L140 128 L236 64 L328 154 L430 88 L560 142",
  "M72 236 L164 184 L252 254 L348 196 L460 268 L572 214",
  "M140 128 L164 184 L252 254 L328 154 L430 88",
  "M236 64 L348 196 L460 268",
];

const nodes: Array<[number, number, number]> = [
  [48, 72, 3.5],
  [140, 128, 5],
  [236, 64, 3],
  [328, 154, 6],
  [430, 88, 4],
  [560, 142, 3],
  [72, 236, 3.2],
  [164, 184, 4.5],
  [252, 254, 5],
  [348, 196, 3.5],
  [460, 268, 4.8],
  [572, 214, 3.2],
];

const fills = ["#3157D5", "#172554", "#A21CAF", "#5B4BDB", "#0F766E", "#FFFFFF"];

export function NetworkField({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 320"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {links.map((d, index) => (
        <path
          key={d}
          d={d}
          className="network-link"
          style={{ animationDelay: `${index * 0.14}s` }}
        />
      ))}
      {nodes.map(([cx, cy, r], index) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={r}
          fill={fills[index % fills.length]}
          className={index % 3 === 0 ? "network-node network-tick" : "network-node"}
          style={{ animationDelay: `${0.35 + index * 0.05}s` }}
        />
      ))}
    </svg>
  );
}
