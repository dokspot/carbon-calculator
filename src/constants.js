export const REGIONS = Object.freeze({
  eu: "Europe",
  na: "North America",
  sa: "South America",
  cn: "China",
  in: "India",
});

export const TRANSPORT_MODES = Object.freeze({
  truck: "Truck",
  ship: "Ship",
  air: "Air",
});

// km
export const DISTANCE_MATRIX = Object.freeze({
  eu: {
    eu: 1000,
    na: 8000,
    sa: 12000,
    cn: 9000,
    in: 7000,
  },
  na: {
    eu: 8000,
    na: 2500,
    sa: 11000,
    cn: 15000,
    in: 15000,
  },
  sa: {
    eu: 12000,
    na: 11000,
    sa: 4000,
    cn: 20000,
    in: 16000,
  },
  cn: {
    eu: 9000,
    na: 15000,
    sa: 20000,
    cn: 2000,
    in: 8000,
  },
  in: {
    eu: 7000,
    na: 15000,
    sa: 16000,
    cn: 8000,
    in: 1500,
  },
});

// kg CO2e/tkm
export const TRANSPORT_EMISSIONS = {
  truck: 0.2183,
  ship: 0.03668,
  air: 1.36967,
};

// kg CO2e/tkm
export const PRODUCTION_EMISSIONS = {
  paper: 0.971,
  print: 0.33592,
  eifu: 0.00019266,
};
