export const dateSteps = [
  "start",
  "food",
  "activity",
  "clothing",
  "present",
  "paying",
  "location",
  "calendar",
  "dealBreakers",
  "seeyousoon",
] as const;

export type DateStep = (typeof dateSteps)[number];

export const DATE_STEPS = dateSteps.length;
