type SecurityCoreProps = {
  ariaLabel: string;
  core: string;
  status: string;
  mark: string;
  edition: string;
  nodes: {
    detect: string;
    reason: string;
    isolate: string;
    automate: string;
  };
};

export function SecurityCore({
  ariaLabel,
  core,
  status,
  mark,
  edition,
  nodes,
}: SecurityCoreProps) {
  return (
    <figure className="security-core" aria-label={ariaLabel}>
      <div className="security-core__field" aria-hidden="true">
        <div className="security-core__orbit security-core__orbit--outer" />
        <div className="security-core__orbit security-core__orbit--middle" />
        <div className="security-core__orbit security-core__orbit--inner" />
        <div className="security-core__crosshair security-core__crosshair--x" />
        <div className="security-core__crosshair security-core__crosshair--y" />
        <div className="security-core__packet security-core__packet--one" />
        <div className="security-core__packet security-core__packet--two" />
        <div className="security-core__packet security-core__packet--three" />
        <div className="security-core__center">
          <span>{mark}</span>
          <small>{edition}</small>
        </div>
      </div>
      <figcaption className="security-core__caption">
        <span className="security-core__status">
          <i aria-hidden="true" />
          {status}
        </span>
        <strong>{core}</strong>
      </figcaption>
      <span className="security-core__node security-core__node--detect">
        <i aria-hidden="true" />
        {nodes.detect}
      </span>
      <span className="security-core__node security-core__node--reason">
        <i aria-hidden="true" />
        {nodes.reason}
      </span>
      <span className="security-core__node security-core__node--isolate">
        <i aria-hidden="true" />
        {nodes.isolate}
      </span>
      <span className="security-core__node security-core__node--automate">
        <i aria-hidden="true" />
        {nodes.automate}
      </span>
    </figure>
  );
}
