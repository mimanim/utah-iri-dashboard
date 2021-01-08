import { interpolate } from "d3-interpolate";

const interpolateRedShades = interpolate("#ff7043", "#b71c1c");
const interpolateYellowShades = interpolate("#fff176", "#fb8c00");
const interpolateGreenShades = interpolate("#d4e157", "#2e7d32");

const ACCEPTABLE_THRESHOLD = 170;
const GOOD_THRESHOLD = 95;

const UNUSABLE_IRI_RATIO = 100 / 85;
const ACCEPTABLE_IRI_RATIO = 100 / 75;
const GOOD_IRI_RATIO = 100 / 95;

const iriColorMap = new Map<number, [number, number, number, number]>();

const rgbToArray = (rgbColor: string) =>
  rgbColor
    .slice(4, -1)
    .split(", ")
    .map((p) => parseInt(p, 10))
    .concat([200]);

export const iriValueToCategory = (iriValue: number): string => {
  if (iriValue > ACCEPTABLE_THRESHOLD) {
    return "Unusable";
  } else if (iriValue >= GOOD_THRESHOLD) {
    return "Acceptable";
  }
  return "Good";
};

export const iriValueToLineColor = (
  iriValue: number
): [number, number, number, number] => {
  if (!iriColorMap.has(iriValue)) {
    let rgbString: string;

    if (iriValue > ACCEPTABLE_THRESHOLD) {
      rgbString = interpolateRedShades(
        (UNUSABLE_IRI_RATIO * (iriValue - ACCEPTABLE_THRESHOLD)) / 100
      );
    } else if (iriValue >= GOOD_THRESHOLD) {
      rgbString = interpolateYellowShades(
        (ACCEPTABLE_IRI_RATIO * (iriValue - GOOD_THRESHOLD)) / 100
      );
    } else {
      rgbString = interpolateGreenShades((GOOD_IRI_RATIO * iriValue) / 100);
    }
    iriColorMap.set(
      iriValue,
      rgbToArray(rgbString) as [number, number, number, number]
    );
  }
  return iriColorMap.get(iriValue);
};
