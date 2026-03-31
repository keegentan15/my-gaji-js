export { calculateEpf as getEPF, calculateEpf } from "./epf.js";
export { calculateSocso as getSOCSO, calculateSocso } from "./socso.js";
export { calculateEis as getEIS, calculateEis } from "./eis.js";
export { calculatePayroll as getPayroll, calculatePayroll } from "./calculate-payroll.js";

export type { EpfOptions } from "./epf.js";
export type { SocsoOptions } from "./socso.js";
export type { EisOptions } from "./eis.js";
export type {
  PayrollInput,
  PayrollResult,
  PayrollSummary,
  EpfResult,
  SocsoResult,
  EisResult,
} from "./types.js";
