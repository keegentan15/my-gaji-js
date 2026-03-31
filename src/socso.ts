import { SOCSO_BRACKETS } from "./data/socso-brackets.js";

export type SocsoOptions = {
  baseSalary: number;
  /** Default: under 60 → first category (full + invalidity). Second category if ≥60. */
  age?: number;
};

function insurableWage(monthlyWage: number): number {
  if (!Number.isFinite(monthlyWage) || monthlyWage <= 0) return 0;
  return Math.min(monthlyWage, 6000);
}

function bracketForWage(wage: number) {
  for (const row of SOCSO_BRACKETS) {
    if (wage <= row.maxWage) return row;
  }
  return SOCSO_BRACKETS[SOCSO_BRACKETS.length - 1];
}

/**
 * SOCSO (PERKESO) contributions from the official wage band table.
 * First category: under 60. Second category (≥60): employment injury only, employee pays 0.
 */
export function calculateSocso(opts: SocsoOptions): { employee: number; employer: number } {
  const wage = insurableWage(opts.baseSalary);
  if (wage <= 0) return { employee: 0, employer: 0 };

  const age = opts.age ?? 30;
  const row = bracketForWage(wage);

  if (age >= 60) {
    return {
      employee: 0,
      employer: row.employerSecondCategory,
    };
  }

  return {
    employee: row.employeeFirstCategory,
    employer: row.employerFirstCategory,
  };
}
