// Per-tier content shown under each Classic/Premium/Ultimate card in the
// Furnished / Unfurnished Apartment & Bungalow pop-ups (from the client PDF).

const FURNISHED = {
  Classic: [
    "Bathroom & Kitchen Deep Cleaning",
    "Machine Cleaning of floors, doors & windows",
    "Cobweb Removal, ceiling and fan dusting",
    "Cabinet & furniture exterior dusting and wet wiping",
    "Balcony & utility area cleaning",
  ],
  Premium: [
    "Includes everything in classic plan",
    "Cupboards cleaning (interior + exterior, if empty)",
    "Cabinets Interior with utensils removal",
  ],
  Ultimate: [
    "Includes everything in premium plan",
    "Sofa, carpet & mattress shampooing",
  ],
};

const UNFURNISHED = {
  Classic: [
    "Bathroom & Kitchen Deep Cleaning",
    "Machine Cleaning of floors, doors & windows",
    "Cobweb Removal, ceiling and fan dusting",
    "Cabinet & furniture exterior dusting and wet wiping",
    "Balcony & utility area cleaning",
  ],
  Premium: [
    "Includes everything in classic plan",
    "Modular Kitchen cleaning (interior + exterior, if empty)",
  ],
};

export function getTierIncludes(variant, tier) {
  const src = variant === "unfurnished" ? UNFURNISHED : FURNISHED;
  return src[tier] || [];
}
