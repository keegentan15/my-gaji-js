/**
 * SOCSO First / Second Category amounts by monthly wage band.
 * Source: PERKESO contribution schedule (Act 4), effective 1 Oct 2024 — wage ceiling RM 6,000.
 * Rows: wage upper bound (RM, inclusive). Wages above RM 6,000 use the RM 6,000+ band.
 */

export type SocsoBracketRow = {
  /** Wages from previous step up to this amount (inclusive) */
  maxWage: number;
  employeeFirstCategory: number;
  employerFirstCategory: number;
  /** Second category: employment injury only (age 60+); employee pays 0 */
  employerSecondCategory: number;
};

/**
 * Brackets ordered by `maxWage`. Match the smallest `maxWage` with `wage <= maxWage`.
 */
export const SOCSO_BRACKETS: readonly SocsoBracketRow[] = [
  { maxWage: 30, employeeFirstCategory: 0.1, employerFirstCategory: 0.4, employerSecondCategory: 0.3 },
  { maxWage: 50, employeeFirstCategory: 0.2, employerFirstCategory: 0.7, employerSecondCategory: 0.5 },
  { maxWage: 70, employeeFirstCategory: 0.3, employerFirstCategory: 1.1, employerSecondCategory: 0.8 },
  { maxWage: 100, employeeFirstCategory: 0.4, employerFirstCategory: 1.5, employerSecondCategory: 1.1 },
  { maxWage: 140, employeeFirstCategory: 0.6, employerFirstCategory: 2.1, employerSecondCategory: 1.5 },
  { maxWage: 200, employeeFirstCategory: 0.85, employerFirstCategory: 2.95, employerSecondCategory: 2.1 },
  { maxWage: 300, employeeFirstCategory: 1.25, employerFirstCategory: 4.35, employerSecondCategory: 3.1 },
  { maxWage: 400, employeeFirstCategory: 1.75, employerFirstCategory: 6.15, employerSecondCategory: 4.4 },
  { maxWage: 500, employeeFirstCategory: 2.25, employerFirstCategory: 7.85, employerSecondCategory: 5.6 },
  { maxWage: 600, employeeFirstCategory: 2.75, employerFirstCategory: 9.65, employerSecondCategory: 6.9 },
  { maxWage: 700, employeeFirstCategory: 3.25, employerFirstCategory: 11.35, employerSecondCategory: 8.1 },
  { maxWage: 800, employeeFirstCategory: 3.75, employerFirstCategory: 13.15, employerSecondCategory: 9.4 },
  { maxWage: 900, employeeFirstCategory: 4.25, employerFirstCategory: 14.85, employerSecondCategory: 10.6 },
  { maxWage: 1000, employeeFirstCategory: 4.75, employerFirstCategory: 16.65, employerSecondCategory: 11.9 },
  { maxWage: 1100, employeeFirstCategory: 5.25, employerFirstCategory: 18.35, employerSecondCategory: 13.1 },
  { maxWage: 1200, employeeFirstCategory: 5.75, employerFirstCategory: 20.15, employerSecondCategory: 14.4 },
  { maxWage: 1300, employeeFirstCategory: 6.25, employerFirstCategory: 21.85, employerSecondCategory: 15.6 },
  { maxWage: 1400, employeeFirstCategory: 6.75, employerFirstCategory: 23.65, employerSecondCategory: 16.9 },
  { maxWage: 1500, employeeFirstCategory: 7.25, employerFirstCategory: 25.35, employerSecondCategory: 18.1 },
  { maxWage: 1600, employeeFirstCategory: 7.75, employerFirstCategory: 27.15, employerSecondCategory: 19.4 },
  { maxWage: 1700, employeeFirstCategory: 8.25, employerFirstCategory: 28.85, employerSecondCategory: 20.6 },
  { maxWage: 1800, employeeFirstCategory: 8.75, employerFirstCategory: 30.65, employerSecondCategory: 21.9 },
  { maxWage: 1900, employeeFirstCategory: 9.25, employerFirstCategory: 32.35, employerSecondCategory: 23.1 },
  { maxWage: 2000, employeeFirstCategory: 9.75, employerFirstCategory: 34.15, employerSecondCategory: 24.4 },
  { maxWage: 2100, employeeFirstCategory: 10.25, employerFirstCategory: 35.85, employerSecondCategory: 25.6 },
  { maxWage: 2200, employeeFirstCategory: 10.75, employerFirstCategory: 37.65, employerSecondCategory: 26.9 },
  { maxWage: 2300, employeeFirstCategory: 11.25, employerFirstCategory: 39.35, employerSecondCategory: 28.1 },
  { maxWage: 2400, employeeFirstCategory: 11.75, employerFirstCategory: 41.15, employerSecondCategory: 29.4 },
  { maxWage: 2500, employeeFirstCategory: 12.25, employerFirstCategory: 42.85, employerSecondCategory: 30.6 },
  { maxWage: 2600, employeeFirstCategory: 12.75, employerFirstCategory: 44.65, employerSecondCategory: 31.9 },
  { maxWage: 2700, employeeFirstCategory: 13.25, employerFirstCategory: 46.35, employerSecondCategory: 33.1 },
  { maxWage: 2800, employeeFirstCategory: 13.75, employerFirstCategory: 48.15, employerSecondCategory: 34.4 },
  { maxWage: 2900, employeeFirstCategory: 14.25, employerFirstCategory: 49.85, employerSecondCategory: 35.6 },
  { maxWage: 3000, employeeFirstCategory: 14.75, employerFirstCategory: 51.65, employerSecondCategory: 36.9 },
  { maxWage: 3100, employeeFirstCategory: 15.25, employerFirstCategory: 53.35, employerSecondCategory: 38.1 },
  { maxWage: 3200, employeeFirstCategory: 15.75, employerFirstCategory: 55.15, employerSecondCategory: 39.4 },
  { maxWage: 3300, employeeFirstCategory: 16.25, employerFirstCategory: 56.85, employerSecondCategory: 40.6 },
  { maxWage: 3400, employeeFirstCategory: 16.75, employerFirstCategory: 58.65, employerSecondCategory: 41.9 },
  { maxWage: 3500, employeeFirstCategory: 17.25, employerFirstCategory: 60.35, employerSecondCategory: 43.1 },
  { maxWage: 3600, employeeFirstCategory: 17.75, employerFirstCategory: 62.15, employerSecondCategory: 44.4 },
  { maxWage: 3700, employeeFirstCategory: 18.25, employerFirstCategory: 63.85, employerSecondCategory: 45.6 },
  { maxWage: 3800, employeeFirstCategory: 18.75, employerFirstCategory: 65.65, employerSecondCategory: 46.9 },
  { maxWage: 3900, employeeFirstCategory: 19.25, employerFirstCategory: 67.35, employerSecondCategory: 48.1 },
  { maxWage: 4000, employeeFirstCategory: 19.75, employerFirstCategory: 69.15, employerSecondCategory: 49.4 },
  { maxWage: 4100, employeeFirstCategory: 20.25, employerFirstCategory: 70.85, employerSecondCategory: 50.6 },
  { maxWage: 4200, employeeFirstCategory: 20.75, employerFirstCategory: 72.65, employerSecondCategory: 51.9 },
  { maxWage: 4300, employeeFirstCategory: 21.25, employerFirstCategory: 74.35, employerSecondCategory: 53.1 },
  { maxWage: 4400, employeeFirstCategory: 21.75, employerFirstCategory: 76.15, employerSecondCategory: 54.4 },
  { maxWage: 4500, employeeFirstCategory: 22.25, employerFirstCategory: 77.85, employerSecondCategory: 55.6 },
  { maxWage: 4600, employeeFirstCategory: 22.75, employerFirstCategory: 79.65, employerSecondCategory: 56.9 },
  { maxWage: 4700, employeeFirstCategory: 23.25, employerFirstCategory: 81.35, employerSecondCategory: 58.1 },
  { maxWage: 4800, employeeFirstCategory: 23.75, employerFirstCategory: 83.15, employerSecondCategory: 59.4 },
  { maxWage: 4900, employeeFirstCategory: 24.25, employerFirstCategory: 84.85, employerSecondCategory: 60.6 },
  { maxWage: 5000, employeeFirstCategory: 24.75, employerFirstCategory: 86.65, employerSecondCategory: 61.9 },
  { maxWage: 5100, employeeFirstCategory: 25.25, employerFirstCategory: 88.35, employerSecondCategory: 63.1 },
  { maxWage: 5200, employeeFirstCategory: 25.75, employerFirstCategory: 90.15, employerSecondCategory: 64.4 },
  { maxWage: 5300, employeeFirstCategory: 26.25, employerFirstCategory: 91.85, employerSecondCategory: 65.6 },
  { maxWage: 5400, employeeFirstCategory: 26.75, employerFirstCategory: 93.65, employerSecondCategory: 66.9 },
  { maxWage: 5500, employeeFirstCategory: 27.25, employerFirstCategory: 95.35, employerSecondCategory: 68.1 },
  { maxWage: 5600, employeeFirstCategory: 27.75, employerFirstCategory: 97.15, employerSecondCategory: 69.4 },
  { maxWage: 5700, employeeFirstCategory: 28.25, employerFirstCategory: 98.85, employerSecondCategory: 70.6 },
  { maxWage: 5800, employeeFirstCategory: 28.75, employerFirstCategory: 100.65, employerSecondCategory: 71.9 },
  { maxWage: 5900, employeeFirstCategory: 29.25, employerFirstCategory: 102.35, employerSecondCategory: 73.1 },
  { maxWage: 6000, employeeFirstCategory: 29.75, employerFirstCategory: 104.15, employerSecondCategory: 74.4 },
  { maxWage: Number.POSITIVE_INFINITY, employeeFirstCategory: 29.75, employerFirstCategory: 104.15, employerSecondCategory: 74.4 },
];
