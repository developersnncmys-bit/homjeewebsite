import React from "react";

// Below the comparison table each pop-up shows, in order:
//   1. "What we clean"    — room/area images (all rooms for Apartment/Bungalow,
//      only that room for Book By Room)
//   2. "What is excluded" — excludes image
//   3. "What we need"     — the what-we-do/need image
// The "includes" image is intentionally NOT shown (per the client PDF).
import imgWhatWeClean from "/media/whatweclean.jpeg";
import imgFloor from "/media/floor.jpeg";
import imgKitchen from "/media/kitchen.jpeg";
import imgBathroom from "/media/bathroom.webp";
import imgBalcony from "/media/bolcany.jpeg";
import imgExcludes from "/media/Excludes.jpeg";
import imgExcludesUnf from "/media/unfurnishedexclude.webp";
import imgExcludesBook from "/media/bookbyexcluded.webp";
import imgWhatWeNeed from "/media/whatwedo.jpeg";

const ALL_ROOMS = [
  { src: imgWhatWeClean, alt: "Living & Bedroom" },
  { src: imgFloor, alt: "Floor" },
  { src: imgKitchen, alt: "Kitchen" },
  { src: imgBathroom, alt: "Bathroom" },
  { src: imgBalcony, alt: "Balcony" },
];

// Book By Room: only the one room's image.
const ROOM_IMAGE = {
  "Kitchen Cleaning": [{ src: imgKitchen, alt: "Kitchen" }],
  "Bathroom Cleaning": [{ src: imgBathroom, alt: "Bathroom" }],
  "Balcony Cleaning": [{ src: imgBalcony, alt: "Balcony" }],
  "Bedroom Cleaning": [{ src: imgWhatWeClean, alt: "Bedroom" }],
  "Living Room Cleaning": [{ src: imgWhatWeClean, alt: "Living Room" }],
};

const imgStyle = {
  width: "100%",
  height: "auto",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "12px",
};

const Section = ({ title, images }) => (
  <div style={{ marginTop: "20px" }}>
    <h4 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "12px", color: "#333" }}>
      {title}
    </h4>
    {images.map((im, i) => (
      <img
        key={i}
        src={im.src}
        alt={im.alt}
        style={imgStyle}
        onError={(e) => console.error(`Failed to load image: ${im.src}`)}
      />
    ))}
  </div>
);

const WhatWeCleanImages = ({ variant = "furnished", room }) => {
  const cleanImages = room
    ? ROOM_IMAGE[room] || [{ src: imgWhatWeClean, alt: "What we clean" }]
    : ALL_ROOMS;

  const excludesImg = room
    ? imgExcludesBook
    : variant === "unfurnished"
      ? imgExcludesUnf
      : imgExcludes;

  return (
    <>
      <Section title="What we clean" images={cleanImages} />
      <Section title="What is excluded" images={[{ src: excludesImg, alt: "What is excluded" }]} />
      <Section title="What we need" images={[{ src: imgWhatWeNeed, alt: "What we need" }]} />
    </>
  );
};

export default WhatWeCleanImages;
