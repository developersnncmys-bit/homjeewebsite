// Shared page furniture for the content pages (About, Reviews, FAQs, Recent
// Projects) so they all read as the same website.
//
// The visual language here is lifted from the home page rather than invented:
//   - 40px bold Poppins headings with the red `vectoricon` swoosh underneath
//   - a 600-weight subtitle under the heading
//   - red (#e60000) pill buttons with a soft red glow
//   - white cards, 15px radius, soft shadow, lift on hover
//   - grey (#fafafa) bands alternating with white sections
//
// Pages import <HjStyles /> once, then use the class names below. Hover states
// and media queries can't be expressed with inline styles, which is why this is
// a stylesheet rather than the inline-style approach used elsewhere.

import React, { useEffect } from "react";
import vectoricon from "../assets/vectoricon.png";
// Original line-art watermark (building wireframes) drawn for these pages,
// laid in behind copy at low opacity.
import blueprint from "../assets/about-blueprint.png";

export const RED = "#e60000";
export const INK = "#111";
export const MUTED = "#555";

/** Loads Poppins once per document (same pattern the other pages use). */
export function usePoppins() {
  useEffect(() => {
    if (!document.getElementById("poppins-font")) {
      const link = document.createElement("link");
      link.id = "poppins-font";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);
}

/**
 * Home-page style section heading: big bold title with the red swoosh, plus an
 * optional subtitle. `underline` can be turned off for smaller sub-headings.
 */
export function SectionHeading({ title, subtitle, underline = true }) {
  return (
    <>
      <h2 className="hj-h2">
        {title}
        {underline && (
          <img className="hj-swoosh" src={vectoricon} alt="" aria-hidden="true" />
        )}
      </h2>
      {subtitle && <p className="hj-sub">{subtitle}</p>}
    </>
  );
}

export function HjStyles() {
  return (
    <style>{`
      .hj-page {
        font-family: 'Poppins', sans-serif;
        color: ${INK};
        background: #fff;
        overflow-x: hidden;
      }
      .hj-page p { color: ${MUTED}; line-height: 1.7; }
      .hj-wrap { max-width: 1180px; margin: 0 auto; padding: 0 20px; }
      .hj-wrap.narrow { max-width: 900px; }

      /* ---------- Sections ---------- */
      .hj-sec { padding: 60px 20px; position: relative; }
      .hj-sec.center { text-align: center; }

      /* Soft brand-tinted wash instead of a flat grey band. */
      .hj-sec.alt { background-color: #fdf8f8; }

      /* Line-art watermark. Drawn on a ::before so the artwork can sit at ~7%
         opacity while the copy above stays fully opaque. */
      .hj-sec.blueprint { overflow: hidden; }
      .hj-sec.blueprint::before {
        content: "";
        position: absolute; inset: 0;
        background-image: url(${blueprint});
        background-repeat: no-repeat;
        /* Sits in the middle of the section rather than spanning edge to edge,
           so the artwork stays behind the copy and the sides breathe. */
        background-size: 70% auto;
        background-position: center;
        opacity: 1;
        filter: contrast(1.18) brightness(0.94);
        pointer-events: none;
      }
      .hj-sec.blueprint > * { position: relative; z-index: 1; }
      @media (max-width: 640px) {
        /* At phone widths the artwork is mostly cropped noise — drop it. */
        .hj-sec.blueprint::before { display: none; }
      }

      /* ---------- Headings (home-page style) ---------- */
      .hj-h2 {
        font-size: 40px;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        color: ${INK};
        margin: 0 0 10px;
        position: relative;
        display: inline-block;
      }
      .hj-swoosh {
        position: absolute;
        bottom: -14px;
        left: 40px;
        width: 175px;
        height: auto;
        border-radius: 10px;
        pointer-events: none;
      }
      .hj-sub {
        font-weight: 600;
        font-size: 20px;
        color: ${INK} !important;
        margin: 22px auto 0;
        max-width: 780px;
      }
      .hj-lead {
        font-size: 16px;
        max-width: 820px;
        margin: 18px auto 0;
      }

      /* ---------- Buttons ---------- */
      .hj-btn {
        display: inline-block;
        background: ${RED};
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        padding: 13px 36px;
        border: none;
        border-radius: 30px;
        text-decoration: none;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(255,0,0,0.3);
        transition: background .2s ease, transform .2s ease;
      }
      .hj-btn:hover { background: #c50000; color: #fff; transform: translateY(-2px); }

      /* ---------- Toggle pills (home "How It Work" filter) ----------
         One light rounded track holding every option; the active option is a
         solid red pill inside it. */
      .hj-pills {
        position: relative;
        display: flex; justify-content: space-between; align-items: center;
        gap: 0; margin: 34px auto 40px;
        max-width: 820px;
        background: #f5f5f5;
        border-radius: 999px;
        padding: 5px;
        box-shadow: 0 6px 18px rgba(0,0,0,.06);
      }
      /* the red pill that slides between tabs (swiggy Delivery 1/2 style) */
      .hj-pill-slider {
        position: absolute; top: 5px; bottom: 5px; left: 5px;
        width: calc((100% - 10px) / 4);
        background: ${RED}; border-radius: 999px; z-index: 0;
        box-shadow: 0 6px 16px rgba(255,0,0,0.25);
        transition: transform .35s cubic-bezier(.4, 0, .2, 1);
      }
      .hj-pill {
        position: relative; z-index: 1;
        flex: 1;
        padding: 9px 24px;
        border-radius: 999px;
        font-weight: 600;
        font-size: 16px;
        font-family: inherit;
        border: none;
        background: transparent;
        color: #9b9b9b;
        cursor: pointer;
        transition: color .25s ease;
      }
      .hj-pill:hover { color: #444; }
      .hj-pill.active {
        color: #fff;
        font-weight: 700;
      }

      /* ---------- Cards ---------- */
      .hj-card {
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        transition: transform .25s ease, box-shadow .25s ease;
      }
      .hj-card:hover { transform: translateY(-6px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }

      /* ---------- Grids ---------- */
      .hj-g2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 26px; }
      .hj-g3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
      .hj-g4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; }

      /* ---------- CTA band ---------- */
      .hj-cta { text-align: center; padding: 64px 20px; background-color: #fdf8f8; }
      .hj-cta h3 {
        font-size: 30px; font-weight: 700; color: ${INK}; margin: 0 0 12px;
      }
      .hj-cta p { max-width: 560px; margin: 0 auto 26px; }

      /* ---------- Responsive ---------- */
      @media (max-width: 991px) {
        .hj-g4 { grid-template-columns: repeat(2, 1fr); }
        .hj-g3 { grid-template-columns: repeat(2, 1fr); }
        .hj-h2 { font-size: 30px; }
        .hj-swoosh { display: none; }
        .hj-sub { font-size: 17px; }
      }
      @media (max-width: 640px) {
        .hj-g2, .hj-g3, .hj-g4 { grid-template-columns: 1fr; }
        .hj-sec { padding: 44px 16px; }
        .hj-h2 { font-size: 25px; }
        .hj-sub { font-size: 16px; margin-top: 16px; }
        .hj-lead { font-size: 15px; }
        .hj-cta h3 { font-size: 22px; }
        .hj-pills { margin: 26px 0 30px; padding: 5px; }
        .hj-pill { padding: 9px 10px; font-size: 13.5px; }
      }
    `}</style>
  );
}
