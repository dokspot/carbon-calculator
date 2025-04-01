# carbon-calculator

This repo contains the calculations for the carbon calculator.

## Run

Prerequisite: You will need to install [pnpm](https://pnpm.io/installation).

```bash
pnpm install
pnpm start
# follow instructions in terminal
```

# Critical files

The critical files are:

- [calculator.js](src/calculator.js) - contains the calcuations. You only need to call the `totalEmissions(inputs)` function.
- [constants.js](src/constants.js) - contains all the constants for the calculator.

## Interfaces

We have defined the following input/output interfaces:

```ts
interface Input {
  sourceRegion: string;
  ifuMass: number;
  targets: TargetInput[];
}

interface TargetInput {
  targetRegion: string;
  transportMode: string;
  quantity: number;
}

interface Output {
  transport: TransportOutput[]
  production: ProductionOutput
  totals: [
    paper: ValueUnit
    eifu: ValueUnit
    reduction: ValueUnit
  ]
}

interface TransportOutput {
  transportDistance: ValueUnit
  massPerYear: ValueUnit
  tonKm: ValueUnit
  transportEmissions: ValueUnit
}

interface ProductionOutput {
  quantity: ValueUnit
  massPerYear: ValueUnit
  paperEmissions: ValueUnit
  printEmissions: ValueUnit
  eifuEmissions: ValueUnit
}

interface ValueUnit {
  value: number
  unit: string
}
```

## Notes

For the website, you will need the `ouput.totals`.
