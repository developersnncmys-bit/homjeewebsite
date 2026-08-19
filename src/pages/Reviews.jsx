import React from "react";
import {
  Star,
  Quote,
  BadgeCheck,
  CalendarCheck,
  Repeat,
  // Same icons the FAQ section headers use, so both pages speak one language.
  PaintRoller,
  Sparkles,
  Sofa,
  Truck,
} from "lucide-react";
import { HjStyles, SectionHeading, usePoppins, RED, INK, MUTED } from "../components/HjPage";

import testimonialVideo from "../assets/testimonial.mp4";

const HIGHLIGHTS = [
  { Icon: Star, value: "4.95 / 5.0", label: "Overall Rating" },
  { Icon: BadgeCheck, value: "500+", label: "Verified Ratings" },
  { Icon: CalendarCheck, value: "99.2%", label: "On-Time Execution" },
  { Icon: Repeat, value: "88%", label: "Repeat / Referred Clients" },
];

const CATEGORIES = [
  {
    id: "painting",
    Icon: PaintRoller,
    title: "House Painting",
    reviews: [
      {
        heading: "A completely hassle-free painting experience!",
        body: "We got our 3BHK painted through Homjee, and the entire team was exceptionally professional. They used dust-free sanding machines, protected all our furniture with plastic sheets, and finished the project right on time. The wall finish is flawless!",
        name: "Ketan S.",
        service: "House Painting",
      },
      {
        heading: "Punctual, polite, and great attention to detail.",
        body: "The painters arrived on time every day, kept the workspace clean, and explained every step of the process. No hidden charges or extra material demands. Truly a 5-star service!",
        name: "Rajesh M.",
        service: "House Painting & Waterproofing",
      },
      {
        heading: "Exceptional colour consultation and neat execution.",
        body: "Choosing colours felt overwhelming, but the Homjee team guided us brilliantly. The execution was quick, clean, and delivered zero splatters on our flooring. Will definitely book again!",
        name: "Meera D.",
        service: "House Painting",
      },
    ],
  },
  {
    id: "cleaning",
    Icon: Sparkles,
    title: "Deep Cleaning",
    reviews: [
      {
        heading: "Every single corner of the house is sparkling.",
        body: "We booked Homjee for a pre-move-in deep cleaning. Their team brought professional scrubbing machines and specialised eco-friendly chemicals. The kitchen grease, bathroom limescale, and window tracks were cleaned to perfection. Highly recommended!",
        name: "Sanya K.",
        service: "Full Home Deep Cleaning",
      },
      {
        heading: "Professional team with high standards of hygiene.",
        body: "The staff was polite, hardworking, and extremely thorough. They didn't rush through the job and left the apartment completely spotless. Worth every rupee!",
        name: "Ananya P.",
        service: "Kitchen & Bathroom Deep Cleaning",
      },
      {
        heading: "Pet-friendly, thorough, and highly efficient.",
        body: "The team brought industrial-grade equipment and used safe, eco-friendly agents. They paid special attention to sofa upholstery and balcony tiles. Fantastic experience!",
        name: "Amitabh S.",
        service: "Sofa Shampooing & Deep Cleaning",
      },
    ],
  },
  {
    id: "interiors",
    Icon: Sofa,
    title: "Home Interiors",
    reviews: [
      {
        heading: "Turned our vision into reality without budget overruns.",
        body: "Homjee executed our complete modular kitchen and wardrobe design. The 3D designs were accurate, the woodwork finish was top-notch, and the delivery timeline promised was strictly met. Great job by the team!",
        name: "Dhruv R.",
        service: "Complete Home Interiors",
      },
      {
        heading: "Smart spatial layout and excellent material quality.",
        body: "From wall panelling to custom furniture, Homjee's interior team handled everything seamlessly. They managed vendors, monitored quality on-site, and delivered a high-end luxury feel.",
        name: "Priya & Amit K.",
        service: "Living Room & Bedroom Interiors",
      },
      {
        heading: "Flawless modular kitchen and space optimisation.",
        body: "Their attention to structural detail and material hardware is top class. They maximised our kitchen storage space while keeping the design clean and modern. Outstanding execution.",
        name: "Rahul & Neha M.",
        service: "Modular Kitchen Interiors",
      },
    ],
  },
  {
    id: "movers",
    Icon: Truck,
    title: "Packers & Movers",
    reviews: [
      {
        heading: "Zero damage and extremely punctual relocation!",
        body: "Moving homes is usually stressful, but Homjee made it completely smooth. Multi-layer bubble wrapping for fragile items, careful handling of heavy furniture, and zero scratches. Everything reached intact.",
        name: "Sameer V.",
        service: "Residential Packers & Movers",
      },
      {
        heading: "Effortless packing, dismantling, and setup.",
        body: "Their team dismantled our beds and dining tables, packed everything methodically, and reassembled everything at the new location on the same day. Incredible discipline and teamwork.",
        name: "Neha G.",
        service: "Household Shifting",
      },
      {
        heading: "Highly organised and courteous crew.",
        body: "Relocating usually causes endless anxiety, but Homjee handled our appliances and delicate glassware with extreme care. On-time delivery and hassle-free loading.",
        name: "Vikramaditya N.",
        service: "Full-Service Relocation",
      },
    ],
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} size={16} fill="#f5a623" color="#f5a623" />
    ))}
  </div>
);

const Reviews = ({ handleShow }) => {
  usePoppins();

  return (
    <div className="hj-page">
      <HjStyles />
      <style>{`
        .rv-videos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .rv-videos video {
          width: 100%; aspect-ratio: 644 / 312; object-fit: cover;
          border-radius: 20px; display: block; background: #000;
        }

        /* Stat tiles: red accent lives in the top strip + icon chip; the number
           itself stays in ink so the row doesn't shout in four places at once. */
        .rv-stat {
          position: relative;
          padding: 34px 22px 28px;
          text-align: center;
          overflow: hidden;
        }
        .rv-stat::before {
          content: "";
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, ${RED}, #ff6b6b);
        }
        .rv-stat-icon {
          width: 60px; height: 60px; border-radius: 50%;
          background: #fdeaea;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
        }
        .rv-stat-value {
          font-size: 29px; font-weight: 700; color: ${INK};
          line-height: 1.2; margin-bottom: 4px;
          letter-spacing: -0.5px;
        }
        .rv-stat-rule {
          width: 34px; height: 3px; border-radius: 3px;
          background: ${RED}; margin: 10px auto;
        }
        .rv-stat-label { font-size: 14px; font-weight: 500; color: ${MUTED}; margin: 0; }

        .rv-cat { margin-bottom: 48px; }
        .rv-cat:last-child { margin-bottom: 0; }
        .rv-cat-head { display: flex; align-items: center; gap: 14px; margin-bottom: 24px; }
        /* same chip treatment as .fq-icon on the FAQs page */
        .rv-cat-icon {
          flex: 0 0 auto; width: 42px; height: 42px; border-radius: 11px;
          background: #fdeaea;
          display: flex; align-items: center; justify-content: center;
        }
        .rv-cat-head h3 { font-size: 22px; font-weight: 600; color: ${INK}; margin: 0; }
        .rv-cat-head .rv-dash { flex: 1; height: 1px; background: #e6e6e6; }

        .rv-review {
          position: relative; padding: 28px 26px 24px;
          display: flex; flex-direction: column; text-align: left;
        }
        .rv-qmark { position: absolute; top: 22px; right: 22px; opacity: .1; }
        .rv-review h4 {
          font-size: 16.5px; font-weight: 600; color: ${INK};
          margin: 0 0 10px; line-height: 1.5;
        }
        .rv-body { font-size: 14.5px; margin: 0 0 20px; flex: 1; }
        .rv-byline { border-top: 1px solid #f0f0f0; padding-top: 14px; margin: 0; }
        .rv-name { display: block; font-weight: 600; color: ${INK}; font-size: 15px; }
        .rv-serv { display: block; font-size: 13px; color: ${MUTED}; font-style: italic; }

        @media (max-width: 991px) {
          .rv-videos { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      {/* ═══════════ Intro ═══════════ */}
      <section className="hj-sec center blueprint">
        <SectionHeading
          title="Customer Reviews"
          subtitle="What Our Customers Say About Homjee"
        />
        <div className="hj-wrap">
          <p className="hj-lead">
            At <strong>Homjee Services Pvt Ltd</strong>, customer satisfaction
            isn&apos;t just a goal — it&apos;s our primary metric of success.
            Here&apos;s what homeowners have to say about their experience with
            our house painting, deep cleaning, home interior, and relocation
            services.
          </p>
        </div>
      </section>

      {/* ═══════════ Video testimonials ═══════════ */}
      <section className="hj-sec alt center">
        <SectionHeading
          title="Testimonials"
          subtitle="Hear Directly From Our Homeowners"
        />
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          <div className="rv-videos">
            {[0, 1, 2].map((i) => (
              <video
                key={i}
                src={testimonialVideo}
                controls
                muted
                playsInline
                preload="metadata"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Rating highlights ═══════════ */}
      <section className="hj-sec center">
        <SectionHeading
          title="Rating Highlights"
          subtitle="The Numbers Behind Our Service"
        />
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          <div className="hj-g4">
            {HIGHLIGHTS.map((h) => {
              const { Icon } = h;
              return (
                <div className="hj-card rv-stat" key={h.label}>
                  <div className="rv-stat-icon">
                    <Icon size={28} color={RED} strokeWidth={1.9} />
                  </div>
                  <div className="rv-stat-value">{h.value}</div>
                  <div className="rv-stat-rule" />
                  <p className="rv-stat-label">{h.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ Written reviews ═══════════ */}
      <section className="hj-sec alt">
        <div className="hj-sec center" style={{ padding: 0 }}>
          <SectionHeading
            title="Written Reviews"
            subtitle="Real Feedback From Homeowners Across Every Service"
          />
        </div>
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          {CATEGORIES.map((cat) => (
            <div className="rv-cat" key={cat.id}>
              <div className="rv-cat-head">
                <span className="rv-cat-icon">
                  <cat.Icon size={21} color={RED} strokeWidth={1.9} />
                </span>
                <h3>{cat.title}</h3>
                <span className="rv-dash" />
              </div>
              <div className="hj-g3">
                {cat.reviews.map((r) => (
                  <article className="hj-card rv-review" key={r.heading}>
                    <Quote className="rv-qmark" size={36} color={RED} fill={RED} />
                    <Stars />
                    <h4>&ldquo;{r.heading}&rdquo;</h4>
                    <p className="rv-body">&ldquo;{r.body}&rdquo;</p>
                    <p className="rv-byline">
                      <span className="rv-name">— {r.name}</span>
                      <span className="rv-serv">Service Taken: {r.service}</span>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <div className="hj-cta">
        <h3>Ready to join our happy homeowners?</h3>
        <p>
          Book a service in minutes and let our verified professionals take it
          from here.
        </p>
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
    </div>
  );
};

export default Reviews;
