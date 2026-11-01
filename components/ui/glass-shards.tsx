import { cn } from "@/lib/cn";

export function GlassShards({ className }: { className?: string }) {
  return (
    <div className={cn("glass-shards", className)} aria-hidden>
      <span className="glass-shard shard-a" />
      <span className="glass-shard shard-b" />
      <span className="glass-shard shard-c" />
      <span className="glass-shard shard-d" />
      <span className="glass-shard shard-e" />
    </div>
  );
}
