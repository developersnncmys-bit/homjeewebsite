// #11 — Lead-status colour standard (customer booking page).
// Grey #6c757d · Blue #0d6efd · Green #28a745 · Yellow #ffc107 ·
// Orange #fd7e14 · Red #dc3545
export const getStatusColor = (status) => {
  if (!status) return "#6c757d";
  const s = String(status).trim().toLowerCase();

  // Grey
  if (s === "confirmed") return "#6c757d";
  if (s === "project completed") return "#6c757d";
  if (s === "pending") return "#6c757d";

  // Blue
  if (s === "survey completed") return "#0d6efd";

  // Green
  if (s === "job completed") return "#28a745";
  if (s === "hired") return "#28a745";

  // Yellow
  if (s === "negotiation") return "#ffc107";

  // Orange
  if (s === "job ongoing") return "#fd7e14";
  if (s === "survey ongoing") return "#fd7e14";
  if (s === "project ongoing") return "#fd7e14";
  if (s === "waiting for final payment") return "#fd7e14";
  if (s === "pending hiring") return "#fd7e14";

  // Red
  if (s === "customer cancelled") return "#dc3545";
  if (s === "cancelled") return "#dc3545";
  if (s === "customer unreachable") return "#dc3545";
  if (s === "admin cancelled") return "#dc3545";
  if (s === "cancelled rescheduled") return "#dc3545";
  if (s === "customer denied") return "#dc3545";

  return "#6c757d";
};

export default getStatusColor;
