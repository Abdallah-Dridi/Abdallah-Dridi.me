import type { ProjectId } from "@/data/content";
import type { Dictionary } from "@/data/en";

type Labels = Dictionary["works"]["etch"];
type EtchingProps = { labels: Labels };

/*
 * Line drawings of each project, hung on the wall like engravings.
 * One stroke weight, no color except basalt; hatching marks what matters.
 */

function Arrow({ d }: { d: string }) {
  return <path className="etch__flow" d={d} markerEnd="url(#etch-arrow)" />;
}

/** Shared arrowhead and hatching. Render once per page, before any etching. */
export function EtchingDefs() {
  return (
    <svg className="etch-defs" width="0" height="0" aria-hidden="true" focusable="false">
    <defs>
      <marker
        id="etch-arrow"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M1 1 L9 5 L1 9" className="etch__arrowhead" />
      </marker>
      <pattern id="etch-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" className="etch__hatch" />
      </pattern>
    </defs>
    </svg>
  );
}

function Orchestryx({ labels }: EtchingProps) {
  return (
    <>
      <rect className="etch__boundary" x="132" y="28" width="412" height="304" rx="2" />
      <text className="etch__text" x="144" y="50">AWS</text>

      <rect className="etch__box" x="16" y="154" width="92" height="52" />
      <text className="etch__text" x="62" y="185" textAnchor="middle">{labels.request}</text>
      <Arrow d="M108 180 H146" />

      <rect className="etch__box" x="150" y="154" width="92" height="52" />
      <text className="etch__text" x="196" y="185" textAnchor="middle">FastAPI</text>
      <Arrow d="M242 180 H270" />

      {[0, 1, 2, 3].map((i) => (
        <rect key={i} className="etch__box" x={274 + i * 18} y="164" width="14" height="32" />
      ))}
      <text className="etch__text" x="308" y="222" textAnchor="middle">{labels.queue}</text>
      <Arrow d="M346 180 H368" />

      <circle className="etch__box" cx="386" cy="180" r="16" />
      <text className="etch__text" x="386" y="222" textAnchor="middle">{labels.workers}</text>

      <Arrow d="M402 172 C 420 150, 420 100, 436 92" />
      <Arrow d="M402 180 H436" />
      <Arrow d="M402 188 C 420 210, 420 260, 436 268" />

      {[62, 150, 238].map((y) => (
        <g key={y}>
          <rect className="etch__box" x="440" y={y} width="88" height="60" />
          <rect className="etch__inner" x="450" y={y + 10} width="68" height="40" fill="url(#etch-hatch)" />
        </g>
      ))}
      <text className="etch__text" x="484" y="318" textAnchor="middle">{labels.environment}</text>
    </>
  );
}

function Latrodectus({ labels }: EtchingProps) {
  const sections = [
    { name: "headers", y: 52, h: 34, bar: 70 },
    { name: ".text", y: 86, h: 58, bar: 160 },
    { name: ".rdata", y: 144, h: 40, bar: 110 },
    { name: ".data", y: 184, h: 30, bar: 80 },
    { name: ".rsrc", y: 214, h: 98, bar: 250 },
  ];
  return (
    <>
      <path className="etch__box" d="M40 32 H170 L196 58 V318 H40 Z" />
      <path className="etch__box" d="M170 32 V58 H196" />
      <text className="etch__text" x="40" y="22">{labels.sample} (PE)</text>
      {sections.map((s) => (
        <g key={s.name}>
          <rect
            className={s.name === ".rsrc" ? "etch__inner" : "etch__box"}
            x="52"
            y={s.y + 4}
            width="132"
            height={s.h - 8}
            fill={s.name === ".rsrc" ? "url(#etch-hatch)" : undefined}
          />
          <text className="etch__text" x="60" y={s.y + s.h / 2 + 5}>{s.name}</text>
          <line className="etch__guide" x1="196" y1={s.y + s.h / 2} x2="236" y2={s.y + s.h / 2} />
          <rect
            className={s.name === ".rsrc" ? "etch__inner" : "etch__box"}
            x="240"
            y={s.y + s.h / 2 - 7}
            width={s.bar}
            height="14"
            fill={s.name === ".rsrc" ? "url(#etch-hatch)" : undefined}
          />
        </g>
      ))}
      <text className="etch__text" x="240" y="300">{labels.highEntropy}</text>
      <circle className="etch__guide" cx="470" cy="104" r="42" />
      <path
        className="etch__strong"
        d={describeArc(470, 104, 42, 0, 0.82 * 360)}
      />
      <text className="etch__text" x="470" y="172" textAnchor="middle">{labels.packed}</text>
    </>
  );
}

function describeArc(cx: number, cy: number, r: number, start: number, end: number) {
  const toPoint = (deg: number) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };
  const a = toPoint(start);
  const b = toPoint(end);
  const large = end - start > 180 ? 1 : 0;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} A${r} ${r} 0 ${large} 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function WireCat({ labels }: EtchingProps) {
  return (
    <>
      <path
        className="etch__flow"
        d="M8 180 q 8 -22 16 0 t 16 0 t 16 0 t 16 0"
      />
      <text className="etch__text" x="8" y="222">{labels.capture}</text>
      <Arrow d="M74 180 H96" />

      <rect className="etch__box" x="100" y="60" width="250" height="240" />
      <text className="etch__text" x="112" y="82">Ethernet</text>
      <rect className="etch__box" x="120" y="96" width="210" height="188" />
      <text className="etch__text" x="132" y="118">IP</text>
      <rect className="etch__box" x="140" y="132" width="170" height="136" />
      <text className="etch__text" x="152" y="154">TCP</text>
      <rect className="etch__inner" x="160" y="168" width="130" height="84" fill="url(#etch-hatch)" />

      <Arrow d="M350 180 H382" />
      <path className="etch__box" d="M386 130 H456 L432 176 V226 L410 238 V176 Z" />
      <text className="etch__text" x="421" y="120" textAnchor="middle">{labels.filter}</text>
      <Arrow d="M444 196 H470" />

      {[".pcap", ".csv", ".txt"].map((ext, i) => (
        <g key={ext}>
          <path className="etch__box" d={`M474 ${120 + i * 56} H520 L532 ${132 + i * 56} V${166 + i * 56} H474 Z`} />
          <text className="etch__text" x="480" y={`${150 + i * 56}`}>{ext}</text>
        </g>
      ))}
      <text className="etch__text" x="474" y="306">{labels.export}</text>
    </>
  );
}

function Kooretna({ labels }: EtchingProps) {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <ellipse className="etch__box" cx={190 + i * 90} cy="54" rx="30" ry="9" />
          <path className="etch__box" d={`M${160 + i * 90} 54 V86 A30 9 0 0 0 ${220 + i * 90} 86 V54`} />
        </g>
      ))}
      <text className="etch__text" x="280" y="124" textAnchor="middle">{labels.sources}</text>
      <Arrow d="M280 132 V164" />

      <rect className="etch__box" x="16" y="196" width="104" height="52" />
      <text className="etch__text" x="68" y="227" textAnchor="middle">{labels.question}</text>
      <Arrow d="M120 222 H216" />

      <rect className="etch__inner" x="220" y="168" width="120" height="108" fill="url(#etch-hatch)" />
      <rect className="etch__box" x="236" y="200" width="88" height="44" />
      <text className="etch__text" x="280" y="227" textAnchor="middle">{labels.retrieve}</text>
      <Arrow d="M340 222 H372" />

      <circle className="etch__box" cx="406" cy="222" r="30" />
      <text className="etch__text" x="406" y="227" textAnchor="middle">LLM</text>
      <Arrow d="M436 222 H460" />

      <rect className="etch__box" x="464" y="196" width="84" height="52" />
      <text className="etch__text" x="506" y="227" textAnchor="middle">{labels.answer}</text>
      <text className="etch__text" x="406" y="282" textAnchor="middle">Groq</text>
    </>
  );
}

const drawings: Record<ProjectId, (props: EtchingProps) => React.JSX.Element> = {
  orchestryx: Orchestryx,
  latrodectus: Latrodectus,
  wirecat: WireCat,
  kooretna: Kooretna,
};

export function Etching({ project, labels }: { project: ProjectId; labels: Labels }) {
  const Drawing = drawings[project];
  return (
    <svg className="etch" viewBox="0 0 560 340" role="presentation" aria-hidden="true">
      <Drawing labels={labels} />
    </svg>
  );
}
