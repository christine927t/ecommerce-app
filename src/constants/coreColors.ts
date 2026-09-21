export const coreColors: string[] = [
    "BURGUNDY",
    "Black",
    "CARIBBEAN-BLUE",
    "CHARCOAL",
    "DARK-HARBOR",
    "Mauve",
    "ROYAL-BLUE",
    "ceil-blue",
    "graphite",
    "MOSS",
    "NAVY",
]

export const limitedEdition: string[] = [
    "AMETHYST",
    "BONSAI",
    "CELERY",
    "DEEP-CRANBERRY",
    "DEEP-PURPLE",
    "DEEP-REEF",
    "DEEP-ROYAL-BLUE",
    "FIRESIDE",
    "HEATHER-DENIM",
    "HEATHER-INDIGO",
    "HIBISCUS",
    "OFF-WHITE",
    "OPTIC-WHITE",
    "POP-RED",
    "PULMONARY-PINK",
    "PURPLE-HAZE",
    "SEA-MIST",
    "SEAGLASS",
    "SHOCKING-PINK",
    "SPICED-CIDER",
    "SPRUCE",
    "SURGICAL-GREEN",
    "ULTRARBERRY",
    "WALNUT",
    "WINNING-RED"
];

export type ColorSwatch = {
  name: string
  hex: string
}

export const coreColorsHex: ColorSwatch[] = [
  { name: "Black", hex: "#000000" },
  { name: "Burgundy", hex: "#403f6f" },
  { name: "Charcoal", hex: "#8d8d97" },
  { name: "Caribbean Blue", hex: "#5e7ec3" },
  { name: "Royal Blue", hex: "#095bdb" },
  { name: "Deep Red", hex: "#692a2d" },
  { name: "Mauve", hex: "#885157" },
  { name: "Graphite", hex: "#645b67" },
  { name: "Olive", hex: "#56584c" },
  { name: "Navy", hex: "#24323f" },
  { name: "Dark Harbor", hex: "#18455a" },
]

export const limitedEditionHex: ColorSwatch[] = [
  { name: "Amethyst", hex: "#954955" },
  { name: "Bonsai", hex: "#756539" },
  { name: "Celery", hex: "#5b4f8f" },
  { name: "Deep Cranberry", hex: "#007ab0" },
  { name: "Deep Purple", hex: "#c2bf74" },
  { name: "Deep Reef", hex: "#fc892d" },
  { name: "Deep Royal Blue", hex: "#462639" },
  { name: "Fireside", hex: "#133951" },
  { name: "Heather Denim", hex: "#333e83" },
  { name: "Heather Indigo", hex: "#d94952" },
  { name: "Hibiscus", hex: "#264a48" },
  { name: "Off White", hex: "#d93744" },
  { name: "Optic White", hex: "#008786" },
  { name: "Pop Red", hex: "#efeadf" },
  { name: "Pulmonary Pink", hex: "#edf1ff" },
  { name: "Purple Haze", hex: "#d90a28" },
  { name: "Sea Mist", hex: "#bfa0c1" },
  { name: "Seaglass", hex: "#eb4398" },
  { name: "Shocking Pink", hex: "#bad5c0" },
  { name: "Spiced Cider", hex: "#d7e494" },
  { name: "Spruce", hex: "#76a7ab" },
]

export const sizeOptions: string[] = [
  "XS", "S", "M", "L", "XL", "2XL", "3XL"
]