import { calculateEis } from "./eis.js";
import { calculateEpf } from "./epf.js";
import { calculateSocso } from "./socso.js";
import type { PayrollInput, PayrollResult } from "./types.js";

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Full monthly statutory deductions: EPF, SOCSO, EIS.
 * Net salary = gross − employee EPF − employee SOCSO − employee EIS.
 */
export function calculatePayroll(input: PayrollInput): PayrollResult {
  const gross = Number(input.baseSalary);
  if (!Number.isFinite(gross) || gross < 0) {
    throw new RangeError("baseSalary must be a non-negative finite number");
  }

  const age = input.age;
  const isNonMalaysian = input.isNonMalaysian;

  const epf = calculateEpf({ baseSalary: gross, age, isNonMalaysian });
  const socso = calculateSocso({ baseSalary: gross, age });
  const eis = calculateEis({ baseSalary: gross, age });

  const totalDeductions = round2(epf.employee + socso.employee + eis.employee);
  const netSalary = round2(gross - totalDeductions);

  return {
    summary: {
      grossSalary: round2(gross),
      netSalary,
      totalDeductions,
    },
    epf: {
      employee: epf.employee,
      employer: epf.employer,
      rate: epf.rate,
    },
    socso: {
      employee: socso.employee,
      employer: socso.employer,
    },
    eis: {
      employee: eis.employee,
      employer: eis.employer,
    },
  };
}
