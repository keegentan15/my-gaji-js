import { describe, expect, it } from "vitest";
import { calculatePayroll, getEPF, getEIS, getPayroll, getSOCSO } from "./index.js";
import { calculateEpf } from "./epf.js";
import { calculateEis } from "./eis.js";
import { calculateSocso } from "./socso.js";

describe("calculatePayroll", () => {
  it("getPayroll matches calculatePayroll", () => {
    const a = calculatePayroll({ baseSalary: 3200, age: 32 });
    const b = getPayroll({ baseSalary: 3200, age: 32 });
    expect(a).toEqual(b);
  });

  it("getEPF / getSOCSO / getEIS match calculate*", () => {
    expect(getEPF({ baseSalary: 5000 })).toEqual(calculateEpf({ baseSalary: 5000 }));
    expect(getSOCSO({ baseSalary: 5000, age: 35 })).toEqual(calculateSocso({ baseSalary: 5000, age: 35 }));
    expect(getEIS({ baseSalary: 5000, age: 35 })).toEqual(calculateEis({ baseSalary: 5000, age: 35 }));
  });

  it("matches RM 5,000 example (EPF + SOCSO + EIS)", () => {
    const r = calculatePayroll({ baseSalary: 5000, age: 35 });
    expect(r.epf.employee).toBe(550);
    expect(r.epf.employer).toBe(650);
    expect(r.epf.rate).toBe(0.11);
    expect(r.socso.employee).toBe(24.75);
    expect(r.socso.employer).toBe(86.65);
    expect(r.eis.employee).toBe(10);
    expect(r.eis.employer).toBe(10);
    expect(r.summary.totalDeductions).toBe(584.75);
    expect(r.summary.netSalary).toBe(4415.25);
  });

  it("foreign worker EPF 2% + 2%", () => {
    const r = calculatePayroll({ baseSalary: 3500, age: 28, isNonMalaysian: true });
    expect(r.epf.employee).toBe(70);
    expect(r.epf.employer).toBe(70);
    expect(r.epf.rate).toBe(0.02);
  });

  it("age 60+ SOCSO second category: employee 0", () => {
    const s = calculateSocso({ baseSalary: 5000, age: 61 });
    expect(s.employee).toBe(0);
    expect(s.employer).toBe(61.9);
  });

  it("EIS zero outside 18–60", () => {
    expect(calculateEis({ baseSalary: 5000, age: 17 }).employee).toBe(0);
    expect(calculateEis({ baseSalary: 5000, age: 61 }).employee).toBe(0);
  });

  it("EPF employer 12% above RM 5,000 threshold", () => {
    const e = calculateEpf({ baseSalary: 8000, age: 40 });
    expect(e.employee).toBe(880);
    expect(e.employer).toBe(960);
  });

  it("rejects invalid salary", () => {
    expect(() => calculatePayroll({ baseSalary: NaN })).toThrow(RangeError);
  });
});
