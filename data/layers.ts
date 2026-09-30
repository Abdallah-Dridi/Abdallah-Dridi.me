import type {
  CertificationId,
  ExperienceId,
  ProjectId,
} from "./content";

export const layerIds = [
  "ground",
  "soc",
  "cloud",
  "pipeline",
  "ai",
  "space",
] as const;

export type LayerId = (typeof layerIds)[number];

type AltitudeLayer = {
  id: LayerId;
  anchor: string;
  scrollRange: readonly [number, number];
  palette: {
    top: string;
    bottom: string;
    text: "light" | "dark";
  };
  experience: readonly ExperienceId[];
  projects: readonly ProjectId[];
  certifications: readonly CertificationId[];
};

export const altitudeLayers: readonly AltitudeLayer[] = [
  {
    id: "ground",
    anchor: "takeoff",
    scrollRange: [0, 0.12],
    palette: {
      top: "var(--sky-ground-top)",
      bottom: "var(--sky-ground-horizon)",
      text: "light",
    },
    experience: [],
    projects: [],
    certifications: [],
  },
  {
    id: "soc",
    anchor: "soc",
    scrollRange: [0.12, 0.34],
    palette: {
      top: "var(--sky-troposphere-top)",
      bottom: "var(--sky-troposphere-cloud)",
      text: "light",
    },
    experience: ["soar"],
    projects: ["latrodectus", "wirecat"],
    certifications: ["ejpt", "btl1"],
  },
  {
    id: "cloud",
    anchor: "cloud",
    scrollRange: [0.34, 0.55],
    palette: {
      top: "var(--sky-cloud-top)",
      bottom: "var(--sky-cloud-white)",
      text: "dark",
    },
    experience: [],
    projects: ["orchestryx"],
    certifications: ["aws-saa", "rhcsa", "aws-security", "cka"],
  },
  {
    id: "pipeline",
    anchor: "pipeline",
    scrollRange: [0.55, 0.72],
    palette: {
      top: "var(--sky-jet-top)",
      bottom: "var(--sky-jet-bottom)",
      text: "light",
    },
    experience: ["scanner", "soar"],
    projects: ["orchestryx"],
    certifications: ["google-python", "ejpt"],
  },
  {
    id: "ai",
    anchor: "ai",
    scrollRange: [0.72, 0.9],
    palette: {
      top: "var(--sky-stratosphere-top)",
      bottom: "var(--sky-stratosphere-space)",
      text: "light",
    },
    experience: ["soar"],
    projects: ["kooretna"],
    certifications: [],
  },
  {
    id: "space",
    anchor: "contact",
    scrollRange: [0.9, 1],
    palette: {
      top: "var(--sky-stratosphere-space)",
      bottom: "var(--sky-space)",
      text: "light",
    },
    experience: [],
    projects: ["risk-management"],
    certifications: [
      "aws-saa",
      "rhcsa",
      "ejpt",
      "google-python",
      "aws-security",
      "cka",
      "btl1",
    ],
  },
] as const;

export function getLayerAtProgress(progress: number) {
  const normalized = Math.min(1, Math.max(0, progress));
  return (
    altitudeLayers.find(
      ({ scrollRange: [start, end] }) =>
        normalized >= start && normalized <= end,
    ) ?? altitudeLayers[altitudeLayers.length - 1]
  );
}

