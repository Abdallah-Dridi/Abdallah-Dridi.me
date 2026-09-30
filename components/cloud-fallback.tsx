import type { LayerId } from "@/data/layers";

export function CloudFallback({ layer }: { layer: LayerId }) {
  return (
    <div className={`cloud-fallback cloud-fallback--${layer}`} aria-hidden="true">
      <span className="cloud-fallback__sun" />
      <span className="cloud-fallback__cloud cloud-fallback__cloud--one" />
      <span className="cloud-fallback__cloud cloud-fallback__cloud--two" />
      <span className="cloud-fallback__cloud cloud-fallback__cloud--three" />
      <span className="cloud-fallback__haze" />
    </div>
  );
}
