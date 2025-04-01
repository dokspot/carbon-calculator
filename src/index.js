import { getInputs } from "./inputs.js";
import { totalEmissions } from "./calculator.js";

// Example inputs
// const inputs = {
//   sourceRegion: "eu",
//   ifuMass: 4,
//   targets: [
//     { targetRegion: "eu", transportMode: "truck", quantity: 100000 },
//     { targetRegion: "na", transportMode: "ship", quantity: 200000 },
//   ],
// };

async function main() {
  const inputs = await getInputs();
  console.log(inputs);
  const emissions = totalEmissions(inputs);
  console.log(emissions);
}

main().catch(console.error);
