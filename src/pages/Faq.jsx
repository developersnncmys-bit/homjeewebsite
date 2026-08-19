import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  PaintRoller,
  Sparkles,
  Sofa,
  Truck,
} from "lucide-react";
import { HjStyles, SectionHeading, usePoppins, RED, INK, MUTED } from "../components/HjPage";

const SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    Icon: HelpCircle,
    faqs: [
      {
        q: "What is Homjee?",
        a: (
          <>
            Homjee is an all-in-one home services platform. We connect
            homeowners with verified professionals for{" "}
            <strong>House Painting</strong>, <strong>Deep Cleaning</strong>,{" "}
            <strong>Home Interiors</strong>, and{" "}
            <strong>Packers &amp; Movers</strong>, managing your project
            end-to-end to ensure quality, safety, and strict adherence to
            timelines.
          </>
        ),
      },
      {
        q: "How do I book a service with Homjee?",
        a: (
          <>
            You can easily request a callback or book a service directly through
            our website at{" "}
            <a href="https://www.homjee.com" style={{ color: RED }}>
              www.homjee.com
            </a>
            . Our team will assess your requirements and guide you through the
            next steps.
          </>
        ),
      },
      {
        q: "Are the professionals on Homjee background-checked?",
        a: "Yes. Every painter, technician, interior designer, and mover associated with Homjee undergoes rigorous background verification, identity checks, training, and technical skill assessments before stepping into your home.",
      },
      {
        q: "How does Homjee ensure pricing transparency?",
        a: (
          <>
            We provide clear, itemised quotes before any work begins. There are{" "}
            <strong>no hidden fees</strong> or unexpected last-minute additions
            — what we quote in your final estimate is what you pay.
          </>
        ),
      },
    ],
  },
  {
    id: "painting",
    title: "House Painting Services",
    Icon: PaintRoller,
    faqs: [
      {
        q: "What is included in your house painting service?",
        a: "We handle complete interior and exterior painting projects. This includes site inspection, colour consultation, wall preparation (sanding, putty, and priming), dust-free machine sanding, high-quality painting, and a final cleanup post-completion.",
      },
      {
        q: "How do you protect my furniture during painting?",
        a: "Our team uses professional masking tape, protective plastic sheets, and furniture covers to protect your flooring, electronics, and furnishings from dust and paint splatters.",
      },
      {
        q: "What brands of paint do you use?",
        a: "We use top-tier, low-VOC (volatile organic compound) paints from leading brands to ensure long-lasting vibrant colour, minimal odour, and safe indoor air quality for your family.",
      },
    ],
  },
  {
    id: "cleaning",
    title: "Deep Cleaning Services",
    Icon: Sparkles,
    faqs: [
      {
        q: "What is the difference between regular cleaning and Homjee deep cleaning?",
        a: "Regular cleaning addresses surface dust, whereas Homjee deep cleaning uses specialised machines, eco-friendly chemicals, and micro-scrubbing techniques to eliminate stubborn grime, grease, limescale, and bacteria from hard-to-reach areas.",
      },
      {
        q: "Do I need to provide any cleaning supplies or equipment?",
        a: "Not at all. Our cleaning team arrives fully equipped with industrial-grade vacuum cleaners, single-disc scrubbing machines, microfibre cloths, and safe, professional cleaning solutions.",
      },
      {
        q: "Is the deep cleaning safe for pets and children?",
        a: "Yes. We prioritise eco-friendly, non-toxic cleaning agents that effectively sanitise your home while remaining safe for kids and pets once dried.",
      },
    ],
  },
  {
    id: "interiors",
    title: "Home Interior Services",
    Icon: Sofa,
    faqs: [
      {
        q: "How does the interior design process work at Homjee?",
        a: (
          <ol style={{ paddingLeft: 20, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>
              <strong>Initial Consultation:</strong> We discuss your budget,
              style preferences, and spatial requirements.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>3D Design &amp; Material Selection:</strong> We create 3D
              renders and help you select materials, finishes, and hardware.
            </li>
            <li>
              <strong>Turnkey Execution:</strong> Our team handles modular
              factory manufacturing, site execution, and quality checks right up
              to hand-off.
            </li>
          </ol>
        ),
      },
      {
        q: "What types of interior projects do you handle?",
        a: "We offer complete turnkey interior solutions, including modular kitchens, custom wardrobes, ceiling design, lighting, wall panelling, soft furnishings, and space optimisation.",
      },
      {
        q: "Do you provide a warranty on custom interior work?",
        a: "Yes, we provide standard warranties on modular woodwork, hardware fittings, and structural workmanship. Specific warranty terms are detailed in your project contract.",
      },
    ],
  },
  {
    id: "movers",
    title: "Packers & Movers Services",
    Icon: Truck,
    faqs: [
      {
        q: "How do you calculate moving costs?",
        a: "Relocation charges depend on the volume of goods, the type of packaging materials required, floor accessibility (elevation/elevator access), and the total distance travelled.",
      },
      {
        q: "How do you handle fragile items during the move?",
        a: "We use multi-layer protective packaging — including bubble wrap, corrugated sheets, stretch film, and heavy-duty cartons — to ensure delicate items, glassware, and electronics arrive safely.",
      },
      {
        q: "Can Homjee assist with dismantling and reassembling furniture?",
        a: "Yes. Our moving team includes trained technicians who disassemble beds, wardrobes, and dining tables before transport and reassemble them at your new location.",
      },
    ],
  },
];

const Faq = () => {
  // First question of the first section starts open so the page never looks empty.
  const [open, setOpen] = useState("general-0");
  usePoppins();

  const toggle = (key) => setOpen((cur) => (cur === key ? null : key));

  return (
    <div className="hj-page">
      <HjStyles />
      <style>{`
        /* ---------- Accordion ---------- */
        .fq-item {
          border: 1px solid #ededed;
          border-radius: 15px;
          margin-bottom: 12px;
          overflow: hidden;
          background: #fff;
          transition: border-color .25s ease, box-shadow .25s ease;
        }
        .fq-item:last-child { margin-bottom: 0; }
        .fq-item.is-open {
          border-color: #f6c9c9;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .fq-q {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px;
          background: none; border: 0;
          padding: 20px 22px;
          font-family: inherit;
          font-size: 16px; font-weight: 600;
          color: ${INK}; text-align: left;
          cursor: pointer;
          transition: background .2s ease, color .2s ease;
        }
        .fq-q:hover { background: #fcfcfc; color: ${RED}; }
        .fq-item.is-open .fq-q { color: ${RED}; }
        .fq-chev { flex: 0 0 auto; transition: transform .28s ease; }
        .fq-item.is-open .fq-chev { transform: rotate(180deg); }

        /* Height animation via grid-template-rows — animates from auto height
           without needing a measured pixel value. */
        .fq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .3s ease; }
        .fq-item.is-open .fq-a { grid-template-rows: 1fr; }
        .fq-a-inner { overflow: hidden; }
        .fq-a-inner > div { padding: 0 22px 22px; font-size: 15px; color: ${MUTED}; line-height: 1.7; }
        .fq-a-inner strong { color: ${INK}; font-weight: 600; }

        /* ---------- Section head ---------- */
        .fq-head { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .fq-icon {
          flex: 0 0 auto; width: 42px; height: 42px; border-radius: 11px;
          background: #fdeaea; display: flex; align-items: center; justify-content: center;
        }
        .fq-head h3 { font-size: 21px; font-weight: 600; color: ${INK}; margin: 0; }
        .fq-sec { margin-bottom: 42px; }
        .fq-sec:last-child { margin-bottom: 0; }

        @media (max-width: 640px) {
          .fq-q { padding: 17px 18px; font-size: 15px; }
          .fq-a-inner > div { padding: 0 18px 18px; font-size: 14px; }
          .fq-head h3 { font-size: 18px; }
        }
      `}</style>

      {/* Intro */}
      <section className="hj-sec center blueprint">
        <SectionHeading
          title="FAQs"
          subtitle="Got Questions? We've Got Answers."
        />
        <div className="hj-wrap">
          <p className="hj-lead">
            Everything you need to know about booking, pricing, and how we
            deliver each of our four core services.
          </p>
        </div>
      </section>

      {/* ═══════════ Accordions ═══════════ */}
      <section className="hj-sec alt">
        <div className="hj-wrap narrow">
          {SECTIONS.map((section) => {
            // Destructured in the body, not the params: this eslint config has
            // no react plugin, so a component used only in JSX reads as an
            // unused *argument*.
            const { id, title, Icon, faqs } = section;
            return (
            <div className="fq-sec" key={id}>
              <div className="fq-head">
                <div className="fq-icon">
                  <Icon size={21} color={RED} strokeWidth={1.9} />
                </div>
                <h3>{title}</h3>
              </div>

              {faqs.map((f, i) => {
                const key = `${id}-${i}`;
                const isOpen = open === key;
                return (
                  <div
                    className={`fq-item${isOpen ? " is-open" : ""}`}
                    key={key}
                  >
                    <button
                      className="fq-q"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${key}`}
                    >
                      <span>{f.q}</span>
                      <ChevronDown
                        className="fq-chev"
                        size={20}
                        color={isOpen ? RED : MUTED}
                      />
                    </button>
                    <div
                      className="fq-a"
                      id={`panel-${key}`}
                      role="region"
                      aria-hidden={!isOpen}
                    >
                      <div className="fq-a-inner">
                        <div>{f.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <div className="hj-cta" style={{ background: "#fff" }}>
        <h3>Still have a question?</h3>
        <p>
          Our team is happy to help. Request a callback and we&apos;ll walk you
          through your options.
        </p>
        <a className="hj-btn" href="/#get-callback">
          Talk to Us
        </a>
      </div>
    </div>
  );
};

export default Faq;
