export type EisOptions = {
  baseSalary: number;
  /** EIS applies to ages 18–60 (inclusive). */
  age?: number;
};

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

const CEILING = 6000;
const RATE = 0.002;

/**
 * EIS (SIP): 0.2% each for employee and employer on insured monthly wages, capped at RM 6,000.
 */
export function calculateEis(opts: EisOptions): { employee: number; employer: number } {
  const salary = Number(opts.baseSalary);
  if (!Number.isFinite(salary) || salary <= 0) {
    return { employee: 0, employer: 0 };
  }

  const age = opts.age ?? 30;
  if (age < 18 || age >= 60) {
    return { employee: 0, employer: 0 };
  }

  const insured = Math.min(salary, CEILING);
  const each = round2(insured * RATE);
  return { employee: each, employer: each };
}
