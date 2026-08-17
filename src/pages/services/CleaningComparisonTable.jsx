import React from "react";

// "Types of cleaning" comparison table shown inside the Furnished /
// Unfurnished Apartment & Bungalow pop-ups. Content matches the client's
// package sheet. Tiers: Furnished = Classic/Premium/Ultimate (3 cols),
// Unfurnished = Classic/Premium (2 cols).

const FURNISHED = [
  {
    section: "Living & Bedroom",
    rows: [
      ["Machine floor scrubbing", 1, 1, 1],
      ["Cobweb removal & wall dusting", 1, 1, 1],
      ["Ceiling & fan dusting", 1, 1, 1],
      ["Balcony & utility area cleaning", 1, 1, 1],
      ["Sofa, carpet & mattress shampooing", 0, 0, 1],
      ["Doors, windows & mirrors", 1, 1, 1],
      ["Switch board & fixtures", 1, 1, 1],
      ["Cabinets and furniture exterior wiping", 1, 1, 1],
      ["Cupboard exterior cleaning", 1, 1, 1],
      ["Cupboard interior cleaning (if empty)", 0, 1, 1],
    ],
  },
  {
    section: "Bathroom Cleaning",
    rows: [
      ["Machine floor scrubbing", 1, 1, 1],
      ["Washbasin & fixtures", 1, 1, 1],
      ["Toilet seat & fixtures", 1, 1, 1],
      ["Wall tiles cleaning", 1, 1, 1],
      ["Hard water stain removal", 1, 1, 1],
    ],
  },
  {
    section: "Kitchen Cleaning",
    rows: [
      ["Cabinets interior with utensil removal", 0, 1, 1],
      ["Cabinets exterior & stove", 1, 1, 1],
      ["Kitchen sink & under the sink", 1, 1, 1],
      ["Removal of oil/grease stains", 1, 1, 1],
      ["Kitchen tiles & slabs", 1, 1, 1],
      ["Chimney & appliances (if added separately)", 1, 1, 1],
    ],
  },
];

const UNFURNISHED = [
  {
    section: "Living & Bedroom",
    rows: [
      ["Machine floor scrubbing", 1, 1],
      ["Cobweb removal & wall dusting", 1, 1],
      ["Ceiling and fan dusting", 1, 1],
      ["Balcony cleaning", 1, 1],
      ["Doors, windows & mirrors", 1, 1],
      ["Switch board & fixtures", 1, 1],
      ["Cupboard exterior cleaning", 1, 1],
      ["Cupboard interior cleaning (if empty)", 0, 1],
    ],
  },
  {
    section: "Bathroom Cleaning",
    rows: [
      ["Machine floor scrubbing", 1, 1],
      ["Washbasin & fixtures", 1, 1],
      ["Toilet seat & fixtures", 1, 1],
      ["Wall tiles cleaning", 1, 1],
      ["Hard water stain removal", 1, 1],
    ],
  },
  {
    section: "Kitchen Cleaning",
    rows: [
      ["Cabinets interior with utensil removal", 0, 1],
      ["Cabinets exterior & stove", 1, 1],
      ["Kitchen sink & under the sink", 1, 1],
      ["Removal of oil/grease stains", 1, 1],
      ["Kitchen tiles & slabs", 1, 1],
      ["Chimney & appliances (if added separately)", 1, 1],
    ],
  },
];

const Mark = ({ on }) =>
  on ? (
    <span style={{ color: "#1BA672", fontWeight: 700 }}>✓</span>
  ) : (
    <span style={{ color: "#c4c4c4", fontWeight: 700 }}>✕</span>
  );

const CleaningComparisonTable = ({ variant = "furnished" }) => {
  const furnished = variant === "furnished";
  const tiers = furnished
    ? ["Classic", "Premium", "Ultimate"]
    : ["Classic", "Premium"];
  const data = furnished ? FURNISHED : UNFURNISHED;

  const cellTd = {
    textAlign: "center",
    padding: "8px 4px",
    fontSize: "13px",
    borderBottom: "1px solid #eee",
    width: furnished ? "18%" : "22%",
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f7f7f7" }}>
            <th
              style={{
                textAlign: "left",
                padding: "10px 8px",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Services
            </th>
            {tiers.map((t) => (
              <th
                key={t}
                style={{
                  textAlign: "center",
                  padding: "10px 4px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((group) => (
            <React.Fragment key={group.section}>
              <tr style={{ backgroundColor: "#fafafa" }}>
                <td
                  colSpan={tiers.length + 1}
                  style={{
                    padding: "8px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#333",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {group.section}
                </td>
              </tr>
              {group.rows.map((row) => (
                <tr key={row[0]}>
                  <td
                    style={{
                      textAlign: "left",
                      padding: "8px",
                      fontSize: "13px",
                      color: "#444",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    {row[0]}
                  </td>
                  {row.slice(1).map((v, i) => (
                    <td key={i} style={cellTd}>
                      <Mark on={v === 1} />
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CleaningComparisonTable;
