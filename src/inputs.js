import { select, number } from "@inquirer/prompts";
import { REGIONS, TRANSPORT_MODES } from "./constants.js";

async function targetInput(name) {
  const targetRegion = await select({
    message: `Target region ${name}`,
    choices: Object.keys(REGIONS).map(key => ({ name: REGIONS[key], value: key })),
    default: Object.keys(REGIONS)[0],
  });
  
  const transportMode = await select({
    message: `Transport mode ${name}`,
    choices: Object.keys(TRANSPORT_MODES).map(key => ({ name: TRANSPORT_MODES[key], value: key })),
    default: Object.keys(TRANSPORT_MODES)[0],
  });
  
  const quantity = await number({
    message: `Quantity ${name}`,
    default: 100000,
  });

  return { targetRegion, transportMode, quantity };
}

export async function getInputs() {
  
  const sourceRegion = await select({
    message: "Production region",
    choices: Object.keys(REGIONS).map(key => ({ name: REGIONS[key], value: key })),
    default: Object.keys(REGIONS)[0],
  });
  
  const ifuMass = await number({
    message: "IFU mass (grams)",
    default: 5,
  });

  const numberOfTargets = await number({
    message: "Number of targets",
    default: 1,
  });

  const targets = [];
  for (let i = 0; i < numberOfTargets; i++) {
    const target = await targetInput(`Target ${i + 1}`);
    targets.push(target);
  }

  return { sourceRegion, ifuMass,  targets };
}



