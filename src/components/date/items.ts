export const dateSteps = [
  "start",
  "food",
  "activity",
  "clothing",
  "present",
  // "paying",
  "location",
  "calendar",
  // "dealBreakers",
  "seeyousoon",
] as const;

export type DateStep = (typeof dateSteps)[number];

export const DATE_STEPS = dateSteps.length;

export function previousAndNext(step: DateStep) {
  let next: string | undefined;
  let back: string | undefined;

  for (let i = 0; i < DATE_STEPS; i++) {
    if (dateSteps[i] !== step) continue;
    next = dateSteps[i + 1];
    if (i == 1) continue;
    back = dateSteps[i - 1];
  }

  return {
    back: back,
    next: next,
  };
}
