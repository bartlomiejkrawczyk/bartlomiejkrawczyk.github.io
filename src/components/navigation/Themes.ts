export const modes = ["dark", "light"] as const;
export const colors = [
  "purple",
  "green",
  "red",
  "blue",
  "pink",
  "teal",
  "bw",
] as const;

type Mode = (typeof modes)[number];
type Color = (typeof colors)[number];

export const gradients: Record<Mode, Record<Color, string[]>> = {
  // primary-light, primary-regular, secondary-light
  dark: {
    green: ["#1b5e20", "#4caf50", "#f57f17"],
    purple: ["#3a0063", "#7611a6", "#e65100"],
    red: ["#b71c1c", "#ff5252", "#ff9a8b"],
    blue: ["#0a3fa0", "#1e6fff", "#006064"],
    pink: ["#880e4f", "#e91e63", "#3a0063"],
    teal: ["#004d40", "#009688", "#e65100"],
    bw: ["#000000", "#aaaaaa", "#cccccc"],
  },
  // primary-dark, primary-regular, secondary-dark
  light: {
    green: ["#1b5e20", "#4caf50", "#f57f17"],
    purple: ["#3a0063", "#7611a6", "#e65100"],
    red: ["#b71c1c", "#ff5252", "#ff9a8b"],
    blue: ["#0a3fa0", "#1e6fff", "#006064"],
    pink: ["#880e4f", "#e91e63", "#3a0063"],
    teal: ["#004d40", "#009688", "#e65100"],
    bw: ["#000000", "#aaaaaa", "#cccccc"],
  },
};
