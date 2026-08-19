// Recent Projects — a pure photo gallery with a service toggle, modelled on
// the "How It Work" filter on the home page. No body copy by design.

import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { HjStyles, SectionHeading, usePoppins, RED } from "../components/HjPage";

// Local project photos (each one visually checked before being used here).
import exteriorPaint from "../assets/exterior.png";
import painters from "../assets/looking-for.png";
import cleanFullHome from "../assets/full-home.png";
import cleanKitchen from "../assets/kitchen.png";
import cleanBathroom from "../assets/bathroom.png";
import intLiving from "../assets/interior.png";
import intMakeover from "../assets/makeover.png";
import intTexture from "../assets/texture.png";
import intWoodPolish from "../assets/woodpolish.png";
import intModularKitchen from "../assets/modular-kitchen.png";
import intFalseCeiling from "../assets/false-ceiling.png";
import intFullInterior from "../assets/full-interior.png";
import intFoyer from "../assets/img2.png";
import intGallery2 from "../assets/gallery2.png";
import intGallery3 from "../assets/gallery3.png";
import intGallery1 from "../assets/gallery1.png";
import intSofa from "../assets/img1.png";
import intWallPanel from "../assets/wallpaper-banner.png";

// The repo has no packers-and-movers photography and only a handful of
// painting/cleaning shots, so those categories are topped up with stock
// imagery — the same approach already used elsewhere on this site.
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const CATEGORIES = ["Painting", "Cleaning", "Shifting", "Interiors"];

const PROJECTS = {
  Painting: [
    { src: exteriorPaint, alt: "Interior wall painting in progress" },
    { src: px(7218579), alt: "Painter rolling fresh paint onto a wall" },
    { src: painters, alt: "Homjee painting professionals" },
    { src: px(8481711), alt: "Brush work along a wall edge" },
    { src: px(5493655), alt: "Painter in uniform coating an interior wall" },
    { src: px(6474135), alt: "Freshly painted white interior" },
  ],
  Cleaning: [
    { src: cleanFullHome, alt: "Full home deep cleaning crew at work" },
    { src: cleanKitchen, alt: "Kitchen cabinet deep cleaning" },
    { src: cleanBathroom, alt: "Bathroom deep cleaning" },
    { src: px(6195275), alt: "Professional vacuuming a living room" },
    { src: px(4239037), alt: "Bathroom scrubbing and sanitisation" },
    { src: px(6195281), alt: "Window and glass cleaning" },
  ],
  Shifting: [
    { src: px(7464703), alt: "Movers carrying packed cartons" },
    { src: px(7464232), alt: "Packed boxes being moved into a new home" },
    { src: px(5025667), alt: "Loading cartons into the moving van" },
    { src: px(7464493), alt: "Household goods moved into a new house" },
    { src: px(7464481), alt: "Packing belongings for relocation" },
    { src: px(5025663), alt: "Unloading cartons at the new address" },
  ],
  Interiors: [
    { src: intLiving, alt: "Turnkey living room interior" },
    { src: intModularKitchen, alt: "Modular kitchen with island" },
    { src: intFalseCeiling, alt: "False ceiling with cove lighting" },
    { src: intMakeover, alt: "Living room makeover" },
    { src: intTexture, alt: "Wood-slat feature wall" },
    { src: intWoodPolish, alt: "Polished wood entryway panelling" },
    { src: intFullInterior, alt: "Open-plan living and kitchen" },
    { src: intFoyer, alt: "Foyer with arched ceiling and chandelier" },
    { src: intGallery2, alt: "Minimal white living space" },
    { src: intGallery3, alt: "Double-height living room" },
    { src: intWallPanel, alt: "Bedroom wall panelling" },
    { src: intGallery1, alt: "Double-height living room at dusk" },
    { src: intSofa, alt: "Sectional sofa in a finished living room" },
  ],
};

const RecentProjects = ({ handleShow }) => {
  usePoppins();
  const [active, setActive] = useState("Painting");
  // Index (not the photo itself) so the lightbox can step through the set.
  const [lbIndex, setLbIndex] = useState(null);
  const touchX = useRef(null);

  const photos = PROJECTS[active] || [];
  const isOpen = lbIndex !== null;

  const close = useCallback(() => setLbIndex(null), []);
  const step = useCallback(
    (delta) =>
      setLbIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  // Keyboard: arrows to move, Escape to close.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    // Stop the page behind the overlay from scrolling.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  // Switching service changes the photo set, so an open index could point at
  // the wrong image (or past the end) — close it.
  const selectCategory = (c) => {
    setActive(c);
    setLbIndex(null);
  };

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const current = isOpen ? photos[lbIndex] : null;

  return (
    <div className="hj-page">
      <HjStyles />
      <style>{`
        .rp-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        /* photos fade + rise in when the tab changes (they remount per category) */
        @keyframes rpTabIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .rp-item {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          cursor: pointer;
          background: #f3f3f3;
          aspect-ratio: 4 / 3;
          border: none; padding: 0;
          animation: rpTabIn .4s ease both;
        }
        .rp-item img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform .45s ease;
        }
        .rp-item:hover img { transform: scale(1.07); }
        .rp-item::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,.35) 100%);
          opacity: 0; transition: opacity .3s ease;
        }
        .rp-item:hover::after { opacity: 1; }

        /* ---------- Lightbox ---------- */
        .rp-lb {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0,0,0,.88);
          display: flex; align-items: center; justify-content: center;
          padding: 30px;
        }
        .rp-lb img {
          max-width: 92vw; max-height: 86vh;
          border-radius: 12px; display: block;
        }
        .rp-close, .rp-nav {
          position: absolute;
          background: rgba(255,255,255,.14);
          border: none; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background .2s ease;
        }
        .rp-close { top: 22px; right: 26px; width: 44px; height: 44px; }
        .rp-nav { top: 50%; transform: translateY(-50%); width: 52px; height: 52px; }
        .rp-nav.prev { left: 26px; }
        .rp-nav.next { right: 26px; }
        .rp-close:hover, .rp-nav:hover { background: rgba(255,255,255,.3); }

        .rp-count {
          position: absolute; bottom: 26px; left: 50%;
          transform: translateX(-50%);
          color: #fff; font-size: 14px; font-weight: 500;
          background: rgba(255,255,255,.14);
          padding: 6px 16px; border-radius: 20px;
        }

        @media (max-width: 640px) {
          .rp-nav { width: 42px; height: 42px; }
          .rp-nav.prev { left: 10px; }
          .rp-nav.next { right: 10px; }
          .rp-close { top: 14px; right: 14px; }
          .rp-lb { padding: 16px; }
        }

        @media (max-width: 991px) { .rp-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 640px) { .rp-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
      `}</style>

      {/* ═══════════ Gallery ═══════════ */}
      <section className="hj-sec center">
        <SectionHeading
          title="Recent Projects"
          subtitle="A Look At The Homes We've Recently Transformed"
        />

        {/* Service toggle — red pill slides to the active tab (swiggy style) */}
        <div className="hj-pills">
          <span
            className="hj-pill-slider"
            style={{ transform: `translateX(${CATEGORIES.indexOf(active) * 100}%)` }}
          />
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`hj-pill${active === c ? " active" : ""}`}
              onClick={() => selectCategory(c)}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="hj-wrap">
          <div className="rp-grid">
            {photos.map((p, i) => (
              <button
                className="rp-item"
                key={`${active}-${i}`}
                onClick={() => setLbIndex(i)}
                aria-label={`View larger: ${p.alt}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <div className="hj-cta">
        <h3>Like what you see?</h3>
        <p>Book a service and let our verified professionals do the rest.</p>
        <a
          className="hj-btn"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleShow?.();
          }}
        >
          Book Now
        </a>
      </div>

      {/* ═══════════ Lightbox ═══════════ */}
      {isOpen && (
        <div
          className="rp-lb"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${lbIndex + 1} of ${photos.length}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className="rp-close" aria-label="Close" onClick={close}>
            <X size={22} color="#fff" />
          </button>

          <button
            className="rp-nav prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft size={26} color="#fff" />
          </button>

          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="rp-nav next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight size={26} color="#fff" />
          </button>

          <span className="rp-count">
            {lbIndex + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
