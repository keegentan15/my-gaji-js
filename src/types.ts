export type PayrollInput = {
  /** Monthly gross salary (RM) */
  baseSalary: number;
  /** Employee age in years. Affects EPF (≥60), SOCSO/EIS (≥60), EIS (must be 18–60 to contribute). */
  age?: number;
  /** Non‑Malaysian workers: mandatory 2% + 2% EPF (where applicable). */
  isNonMalaysian?: boolean;
};

export type EpfResult = {
  employee: number;
  employer: number;
  /** Nominal employee rate used (e.g. 0.11 for 11%). */
  rate: number;
};

export type SocsoResult = {
  employee: number;
  employer: number;
};

export type EisResult = {
  employee: number;
  employer: number;
};

export type PayrollSummary = {
  grossSalary: number;
  netSalary: number;
  totalDeductions: number;
};

export type PayrollResult = {
  summary: PayrollSummary;
  epf: EpfResult;
  socso: SocsoResult;
  eis: EisResult;
};
