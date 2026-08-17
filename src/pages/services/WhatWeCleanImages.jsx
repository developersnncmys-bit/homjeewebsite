import React from "react";

// "What we clean in which area" section shown below the comparison table.
// Apartment / Bungalow pop-ups show ALL rooms; Book By Room shows only the
// room for that package; Mini Services doesn't use this at all.
import imgWhatWeClean from "/media/whatweclean.jpeg";
import imgFloor from "/media/floor.jpeg";
import imgKitchen from "/media/kitchen.jpeg";
import imgBathroom from "/media/bathroom.webp";
import imgBalcony from "/media/bolcany.jpeg";

const ALL_ROOMS = [
  { src: imgWhatWeClean, alt: "Living & Bedroom" },
  { src: imgFloor, alt: "Floor" },
  { src: imgKitchen, alt: "Kitchen" },
  { src: imgBathroom, alt: "Bathroom" },
  { src: imgBalcony, alt: "Balcony" },
];

// Book By Room: only the one room's image (keyed by subcategory prefix).
const ROOM_IMAGE = {
  "Kitchen Cleaning": [{ src: imgKitchen, alt: "Kitchen" }],
  "Bathroom Cleaning": [{ src: imgBathroom, alt: "Bathroom" }],
  "Balcony Cleaning": [{ src: imgBalcony, alt: "Balcony" }],
  "Bedroom Cleaning": [{ src: imgWhatWeClean, alt: "Bedroom" }],
  "Living Room Cleaning": [{ src: imgWhatWeClean, alt: "Living Room" }],
};

const WhatWeCleanImages = ({ room }) => {
  const images = room
    ? ROOM_IMAGE[room] || [{ src: imgWhatWeClean, alt: "What we clean" }]
    : ALL_ROOMS;

  return (
    <div style={{ marginTop: "20px" }}>
      <h4
        style={{
          fontSize: "16px",
          fontWeight: 700,
          marginBottom: "12px",
          color: "#333",
        }}
      >
        What we clean
      </h4>
      {images.map((im, i) => (
        <img
          key={i}
          src={im.src}
          alt={im.alt}
          style={{
            width: "100%",
            height: "auto",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
          onError={(e) => console.error(`Failed to load image: ${im.src}`)}
        />
      ))}
    </div>
  );
};

export default WhatWeCleanImages;
