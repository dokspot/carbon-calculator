import { DISTANCE_MATRIX, TRANSPORT_EMISSIONS, PRODUCTION_EMISSIONS } from "./constants.js";

function calculateTransportEmissions(sourceRegion, ifuMass, target) {
  const transportDistance = {
    value: DISTANCE_MATRIX[sourceRegion][target.targetRegion],
    unit: "km",
  }
  const massPerYear = {
    value: ifuMass * target.quantity / 1000,
    unit: "kg",
  }
  const tonKm = {
    value: massPerYear.value * transportDistance.value / 1000,
    unit: "tkm",
  }
  const transportEmissions = {
    value: tonKm.value * TRANSPORT_EMISSIONS[target.transportMode],
    unit: "kg CO2e",
  }
  return { transportDistance, massPerYear, tonKm, transportEmissions };
}

function calculateProductionEmissions(input) {
  const { ifuMass, targets } = input;

  const quantity = {
    value: targets.reduce((acc, target) => acc + target.quantity, 0),
    unit: "pcs"
  }
  const massPerYear = {
    value: ifuMass * quantity.value / 1000,
    unit: "kg",
  }

  const paperEmissions = {
    value: massPerYear.value * PRODUCTION_EMISSIONS.paper,
    unit: "kg CO2e"
  }
  const printEmissions = {
    value: massPerYear.value * PRODUCTION_EMISSIONS.print,
    unit: "kg CO2e"
  }
  const eifuEmissions = {
    value: quantity.value * PRODUCTION_EMISSIONS.eifu,
    unit: "kg CO2e"
  }

  return { quantity, massPerYear, paperEmissions, printEmissions, eifuEmissions };
}

export function totalEmissions(input) {
  const { sourceRegion, ifuMass, targets } = input;

  const transport = targets.map(target => calculateTransportEmissions(sourceRegion, ifuMass, target));
  const production = calculateProductionEmissions(input);

  const totalTransportEmissions = transport.reduce((acc, target) => acc + target.transportEmissions.value, 0)

  const paper = {
    value: totalTransportEmissions + production.paperEmissions.value + production.printEmissions.value,
    unit: "kg CO2e"
  }
  const eifu = production.eifuEmissions

  const totals = {
    paper,
    eifu,
    reduction: { 
      value: 1 - eifu.value / paper.value,
      unit: "%"
    }
  }

  return { transport, production, totals };
}
