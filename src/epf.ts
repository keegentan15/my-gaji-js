import type { EpfResult } from "./types.js";

export type EpfOptions = {
  baseSalary: number;
  age?: number;
  isNonMalaysian?: boolean;
};

const THRESHOLD = 5000;

function roundRinggit(amount: number): number {
  return Math.round(amount);
}

/**
 * Statutory EPF contributions (Malaysian citizens & PRs, and foreign workers).
 * Uses percentage rates with rounding to the nearest ringgit (KWSP practice for common ranges).
 * For wages below RM 20,000, the published Third Schedule may prescribe fixed amounts in edge
 * bands; this implementation follows the standard percentage method for payroll software.
 */
export function calculateEpf(opts: EpfOptions): EpfResult {
  const salary = Number(opts.baseSalary);
  if (!Number.isFinite(salary) || salary <= 0) {
    return { employee: 0, employer: 0, rate: 0 };
  }

  const age = opts.age ?? 35;
  const foreign = opts.isNonMalaysian === true;

  if (foreign) {
    const employee = roundRinggit(salary * 0.02);
    const employer = roundRinggit(salary * 0.02);
    return { employee, employer, rate: 0.02 };
  }

  if (age >= 60 && age <= 75) {
    const employeeRate = 0.055;
    const employerRate = salary <= THRESHOLD ? 0.065 : 0.06;
    return {
      employee: roundRinggit(salary * employeeRate),
      employer: roundRinggit(salary * employerRate),
      rate: employeeRate,
    };
  }

  if (age > 75) {
    return { employee: 0, employer: 0, rate: 0 };
  }

  const employeeRate = 0.11;
  const employerRate = salary <= THRESHOLD ? 0.13 : 0.12;
  return {
    employee: roundRinggit(salary * employeeRate),
    employer: roundRinggit(salary * employerRate),
    rate: employeeRate,
  };
}
