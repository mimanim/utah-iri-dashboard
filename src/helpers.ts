import { interpolate } from "d3-interpolate";

const ACCEPTABLE_THRESHOLD = 170;
const GOOD_THRESHOLD = 95;

const UNUSABLE_SCALING_RATIO = 100 / 85;
const ACCEPTABLE_SCALING_RATIO = 100 / 75;
const GOOD_SCALING_RATIO = 100 / 95;

// Create interpolators.
const interpolateUnusableRoadShades = interpolate("#ff7043", "#b71c1c");
const interpolateAcceptableRoadShades = interpolate("#fff176", "#fb8c00");
const interpolateGoodRoadShades = interpolate("#d4e157", "#2e7d32");

const iriColorMap = new Map<number, RGBA>();

const rgbStringToRGBA = (rgbColor: string) =>
  rgbColor
    .slice(4, -1)
    .split(", ")
    .map((p) => parseInt(p, 10))
    .concat([200]) as RGBA;

export const iriValueToCategory = (iriValue: number): string => {
  if (iriValue > ACCEPTABLE_THRESHOLD) {
    return "Unusable";
  } else if (iriValue >= GOOD_THRESHOLD) {
    return "Acceptable";
  }
  return "Good";
};

export const iriValueToRoadColor = (iriValue: number): RGBA => {
  if (!iriColorMap.has(iriValue)) {
    let rgbString: string;

    if (iriValue > ACCEPTABLE_THRESHOLD) {
      rgbString = interpolateUnusableRoadShades(
        (UNUSABLE_SCALING_RATIO * (iriValue - ACCEPTABLE_THRESHOLD)) / 100
      );
    } else if (iriValue >= GOOD_THRESHOLD) {
      rgbString = interpolateAcceptableRoadShades(
        (ACCEPTABLE_SCALING_RATIO * (iriValue - GOOD_THRESHOLD)) / 100
      );
    } else {
      rgbString = interpolateGoodRoadShades(
        (GOOD_SCALING_RATIO * iriValue) / 100
      );
    }
    iriColorMap.set(iriValue, rgbStringToRGBA(rgbString));
  }
  return iriColorMap.get(iriValue);
};
