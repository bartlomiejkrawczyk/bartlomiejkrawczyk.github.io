export const beerSteps = ["start", "seeyousoon"] as const;

export type BeerStep = (typeof beerSteps)[number];

export const DATE_STEPS = beerSteps.length;

export function previousAndNext(step: BeerStep) {
  let next: string | undefined;
  let back: string | undefined;

  for (let i = 0; i < DATE_STEPS; i++) {
    if (beerSteps[i] !== step) continue;
    next = beerSteps[i + 1];
    if (i == 1) continue;
    back = beerSteps[i - 1];
  }

  return {
    back: back,
    next: next,
  };
}
