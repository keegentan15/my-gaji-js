# @keegentan/my-gaji-js

Lightweight **TypeScript** helpers for Malaysian **statutory payroll** amounts: **EPF (KWSP)**, **SOCSO (PERKESO)**, and **EIS (SIP)**. Use from Node or bundle into web apps.

**Node.js:** 18+

---

## Install

```bash
npm install @keegentan/my-gaji-js
```

```bash
yarn add @keegentan/my-gaji-js
```

---

## What to import

| Use case | Import |
|----------|--------|
| **Full payslip-style result** (recommended) | `getPayroll` or `calculatePayroll` |
| **EPF only** | `getEPF` or `calculateEpf` |
| **SOCSO only** | `getSOCSO` or `calculateSocso` |
| **EIS only** | `getEIS` or `calculateEis` |

`getPayroll` and `calculatePayroll` are the **same function** (two names). Same for `getEPF` / `calculateEpf`, etc.

Types: `PayrollInput`, `PayrollResult`, `PayrollSummary`, `EpfResult`, `SocsoResult`, `EisResult`, `EpfOptions`, `SocsoOptions`, `EisOptions`.

---

## Input (`PayrollInput`)

Pass an object with:

| Field | Required | Description |
|-------|----------|-------------|
| `baseSalary` | **Yes** | Monthly gross salary (RM). |
| `age` | No | Age in years. Affects EPF (e.g. 60+), SOCSO category, EIS (18–59 only). |
| `isNonMalaysian` | No | Set `true` for foreign workers (EPF **2% + 2%** where applicable). |

---

## Output (`PayrollResult`) — `getPayroll(...)`

```ts
{
  summary: {
    grossSalary: number;   // same as input, normalized
    netSalary: number;     // gross − employee EPF − employee SOCSO − employee EIS
    totalDeductions: number; // employee side only (EPF + SOCSO + EIS)
  },
  epf: {
    employee: number;
    employer: number;
    rate: number;          // nominal employee rate used (e.g. 0.11)
  },
  socso: {
    employee: number;
    employer: number;
  },
  eis: {
    employee: number;
    employer: number;
  },
}
```

---

## Examples

### Full calculation (typical for HR / payroll screens)

```ts
import { getPayroll } from "@keegentan/my-gaji-js";

const result = getPayroll({
  baseSalary: 5000,
  age: 35,
  isNonMalaysian: false,
});

console.log(result.summary.netSalary);
console.log(result.epf, result.socso, result.eis);
```

### One component only

```ts
import { getEPF, getSOCSO, getEIS } from "@keegentan/my-gaji-js";

const epf = getEPF({ baseSalary: 5000, age: 35 });
const socso = getSOCSO({ baseSalary: 5000, age: 35 });
const eis = getEIS({ baseSalary: 5000, age: 35 });
```

### TypeScript

```ts
import { getPayroll, type PayrollInput, type PayrollResult } from "@keegentan/my-gaji-js";

const input: PayrollInput = { baseSalary: 4800, age: 28 };
const out: PayrollResult = getPayroll(input);
```

---

## Module format

The package ships **ESM** and **CJS** (`import` / `require`). Types are included.

---

## Regulations & versions

Rates and tables follow published **KWSP / PERKESO** schedules for the **version** published on npm. When Malaysia updates statutory tables, **bump the package version** in your app and re-test. This library is a helper, not legal advice; verify against official notices for compliance.

---

## License

MIT
