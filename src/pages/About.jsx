import React from "react";
import {
  BadgeIndianRupee,
  Clock4,
  ShieldCheck,
  Handshake,
  BadgeCheck,
  UserCog,
  Headset,
  Wrench,
} from "lucide-react";
import { HjStyles, SectionHeading, usePoppins, RED, INK } from "../components/HjPage";

// Photos are picked to match each service's copy. `cleaning.png` and
// `mover.png` are tiny UI icons (not photos) and `paintingservice.png` has
// "Homjee Painting Services" burned into it, so none of those work as card
// art. The repo has no packers-and-movers photo at all — hence the remote
// one, consistent with the other stock imagery already used across the site.
import paintingImg from "../assets/exterior.png";
import cleaningImg from "../assets/full-home.png";
import interiorImg from "../assets/interior.png";
import founderAkash from "../assets/founder-akash.webp";
import founderSatish from "../assets/founder-satish.jpeg";
import homjeeLogo from "../assets/logohomjee.svg";

const moverImg =
  "https://images.pexels.com/photos/7464703/pexels-photo-7464703.jpeg?auto=compress&cs=tinysrgb&w=900";

// Feature list beside the hero collage. Every claim here is drawn from the
// client's own About / FAQ copy — nothing invented.
const HIGHLIGHTS = [
  { Icon: BadgeCheck, label: "Verified Professionals" },
  { Icon: BadgeIndianRupee, label: "Transparent Pricing" },
  { Icon: Clock4, label: "On-Time Delivery" },
  { Icon: UserCog, label: "Single Point Of Accountability" },
  { Icon: Wrench, label: "Turnkey Execution" },
  { Icon: Headset, label: "After Service Support" },
];

const SERVICES = [
  {
    img: paintingImg,
    title: "House Painting",
    text: "End-to-end interior and exterior painting with expert colour consultation, dust-free execution, and flawless finishes.",
  },
  {
    img: cleaningImg,
    title: "Deep Cleaning",
    text: "Comprehensive, professional deep-cleaning solutions for homes, kitchens, bathrooms, and furnishings using specialised equipment.",
  },
  {
    img: interiorImg,
    title: "Home Interiors",
    text: "Custom interior design and turnkey execution tailored to your lifestyle, storage needs, and aesthetic vision.",
  },
  {
    img: moverImg,
    title: "Packers & Movers",
    text: "Safe, seamless & stress-free residential relocation with professional packing, careful handling, and punctual transport.",
  },
];

const PROMISES = [
  {
    Icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    text: "No hidden charges or last-minute surprises. What we quote is what you pay.",
  },
  {
    Icon: Clock4,
    title: "On-Time Delivery",
    text: "We value your time. Every project follows a clear schedule with defined milestones.",
  },
  {
    Icon: ShieldCheck,
    title: "Verified Professionals",
    text: "Every technician, painter, designer, and mover on our platform undergoes thorough vetting and skill checks.",
  },
  {
    Icon: Handshake,
    title: "Single Point of Accountability",
    text: "You won't have to manage multiple vendors. We handle everything end-to-end.",
  },
];

const FOUNDERS = [
  {
    photo: founderAkash,
    name: "Akash Mahla",
    role: "Director & Co-Founder",
    prefix: "Having previously worked at",
    highlight: "Urban Company",
    text: "Akash brings deep domain expertise in scaling home services, building technology-driven workflows, and establishing rigorous service standards that prioritise customer delight.",
  },
  {
    photo: founderSatish,
    name: "Satish Kumar",
    role: "Director & Co-Founder",
    prefix: "A veteran of the",
    highlight: "Indian Army",
    text: "Satish infuses Homjee with military-grade discipline, punctual execution, strict safety standards, and an unwavering commitment to integrity across every level of our operations.",
  },
];

const About = ({ handleShow }) => {
  usePoppins();

  return (
    <div className="hj-page">
      <HjStyles />
      <style>{`
        /* ═════════ Hero: collage + content ═════════ */
        .ab-hero {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: 70px;
          align-items: center;
        }

        /* ── photo collage ── */
        .ab-media { position: relative; padding: 0 0 90px 0; }
        .ab-img { margin: 0; overflow: hidden; background: #f3f3f3;
          border-top-left-radius: 60px; border-bottom-right-radius: 60px;
          box-shadow: 0 10px 30px rgba(0,0,0,.10);
        }
        .ab-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ab-img-1 { height: 300px; margin-right: 70px; }
        .ab-img-2 {
          height: 250px; width: 62%;
          position: absolute; right: 0; bottom: 0;
          border: 6px solid #fff;
        }
        /* rating badge: two concentric circles on the seam of the photos */
        .ab-badge {
          position: absolute; left: 8%; bottom: 26px;
          width: 132px; height: 132px; border-radius: 50%;
          background: #fff; border: 2px solid ${RED};
          display: flex; align-items: center; justify-content: center;
          z-index: 2;
          box-shadow: 0 8px 24px rgba(0,0,0,.10);
        }
        .ab-badge-ring {
          width: 108px; height: 108px; border-radius: 50%;
          border: 1.5px solid ${RED};
          display: flex; align-items: center; justify-content: center;
          text-align: center;
        }
        .ab-badge span { font-size: 13.5px; font-weight: 500; color: ${INK}; line-height: 1.45; }
        .ab-badge strong { font-size: 21px; font-weight: 700; color: ${RED}; }

        /* ── copy ── */
        .ab-eyebrow {
          display: flex; align-items: center; gap: 12px;
          font-size: 15px; font-weight: 600; color: ${RED} !important;
          margin: 0 0 14px;
        }
        .ab-dash { width: 34px; height: 1.5px; background: ${RED}; display: inline-block; }
        .ab-title {
          font-size: 32px; font-weight: 700; color: ${INK};
          line-height: 1.25; margin: 0 0 18px;
        }
        .ab-title span { color: ${RED}; }
        .ab-copy > p { font-size: 15.5px; margin: 0 0 26px; }

        .ab-highlights {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 14px 26px; margin-bottom: 30px;
        }
        .ab-hl {
          display: flex; align-items: center; gap: 11px;
          font-size: 15px; font-weight: 500; color: ${INK};
        }
        .ab-hl-icon {
          flex: 0 0 auto; width: 32px; height: 32px; border-radius: 9px;
          background: #fdeaea; display: flex; align-items: center; justify-content: center;
        }
        .ab-cta { display: inline-flex; align-items: center; gap: 9px; }

        @media (max-width: 991px) {
          .ab-hero { grid-template-columns: 1fr; gap: 46px; }
          .ab-title { font-size: 28px; }
          .ab-img-1 { margin-right: 40px; height: 250px; }
          .ab-img-2 { height: 200px; }
        }
        @media (max-width: 640px) {
          .ab-media { padding-bottom: 0; }
          .ab-img-1 { margin-right: 0; height: 210px; }
          .ab-img-2 { position: static; width: 100%; height: 190px; margin-top: 16px; border: 0; }
          .ab-badge { width: 104px; height: 104px; left: auto; right: 10px; bottom: auto; top: 160px; }
          .ab-badge span { font-size: 11px; }
          .ab-badge strong { font-size: 16px; }
          .ab-title { font-size: 23px; }
          .ab-highlights { grid-template-columns: 1fr; gap: 12px; }
        }

        .ab-story { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .ab-story img {
          width: 100%; min-height: 340px; height: 100%;
          object-fit: cover; border-radius: 15px; display: block;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .ab-pull {
          font-size: 18px; font-weight: 600; color: ${INK} !important;
          border-left: 4px solid ${RED}; padding-left: 18px; margin: 0 0 22px;
        }
        .ab-card img { width: 100%; height: 180px; object-fit: cover; display: block; }
        .ab-card-body { padding: 22px 20px 26px; }
        .ab-card h3 { font-size: 18px; font-weight: 600; margin: 0 0 8px; color: ${INK}; }
        .ab-card p { font-size: 14.5px; margin: 0; }

        /* Logo inline in the CTA heading, sized to the text and dropped a
           touch so its baseline sits with the words around it. */
        .ab-cta-logo {
          height: 1.7em;
          width: auto;
          vertical-align: -0.42em;
          display: inline-block;
        }

        .ab-founder { padding: 32px 28px; }
        .ab-avatar {
          width: 112px; height: 112px; border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid ${RED};
          padding: 3px;
          margin-bottom: 18px;
          background: #fff;
        }
        .ab-avatar img {
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }
        .ab-founder h3 { font-size: 20px; font-weight: 600; margin: 0 0 4px; color: ${INK}; }
        .ab-role {
          font-size: 13px; font-weight: 600; letter-spacing: 1.2px;
          text-transform: uppercase; color: ${RED} !important; margin: 0 0 14px;
        }
        .ab-founder p { font-size: 15px; margin: 0; }
        .ab-founder strong { color: ${INK}; font-weight: 600; }

        .ab-promise { display: flex; gap: 18px; padding: 28px 26px; text-align: left; }
        .ab-promise-icon {
          flex: 0 0 auto; width: 48px; height: 48px; border-radius: 12px;
          background: #fdeaea; display: flex; align-items: center; justify-content: center;
        }
        .ab-promise h3 { font-size: 17px; font-weight: 600; margin: 0 0 6px; color: ${INK}; }
        .ab-promise p { font-size: 14.5px; margin: 0; }

        @media (max-width: 991px) {
          .ab-story { grid-template-columns: 1fr; gap: 30px; }
          .ab-story img { min-height: 240px; }
        }
      `}</style>

      {/* ═══════════ Hero: collage + content ═══════════ */}
      <section className="hj-sec blueprint">
        <div className="hj-wrap ab-hero">
          {/* ── Left: project photo collage ── */}
          <div className="ab-media">
            <figure className="ab-img ab-img-1">
              <img src={paintingImg} alt="Homjee painters at work" loading="lazy" />
            </figure>
            <figure className="ab-img ab-img-2">
              <img src={interiorImg} alt="A completed Homjee interior" loading="lazy" />
            </figure>
            <div className="ab-badge">
              <div className="ab-badge-ring">
                <span>
                  Rated
                  <br />
                  <strong>4.95/5</strong>
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: content ── */}
          <div className="ab-copy">
            <p className="ab-eyebrow">
              <span className="ab-dash" /> About Us
            </p>
            <h2 className="ab-title">
              Transforming How Homes
              <br />
              Are <span>Built, Beautified,</span>
              <br />
              <span>and Maintained</span>
            </h2>
            <p>
              At <strong>Homjee Services Pvt Ltd</strong>, we believe taking
              care of your home shouldn&apos;t be a source of stress. Whether
              you are moving into a new space, giving your home a fresh coat of
              paint, deep cleaning for a special occasion, or designing your
              dream interiors, Homjee is built to deliver uncompromised quality,
              complete transparency, and total peace of mind.
            </p>

            <div className="ab-highlights">
              {HIGHLIGHTS.map((h) => {
                // Destructured in the body, not the params: this eslint config
                // has no react plugin, so a component used only in JSX reads as
                // an unused argument.
                const { Icon, label } = h;
                return (
                  <div className="ab-hl" key={label}>
                    <span className="ab-hl-icon">
                      <Icon size={17} color={RED} strokeWidth={1.9} />
                    </span>
                    {label}
                  </div>
                );
              })}
            </div>

            <a
              className="hj-btn ab-cta"
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
      </section>

      {/* ═══════════ Our Story ═══════════ */}
      <section className="hj-sec alt">
        <div className="hj-wrap ab-story">
          <div>
            <h2 className="hj-h2" style={{ fontSize: 32 }}>
              Our Story
            </h2>
            <p className="ab-pull" style={{ marginTop: 22 }}>
              Homjee was founded with a single goal: to replace the chaos of
              traditional home services with trust, speed, and precision.
            </p>
            <p>
              For years, homeowners have faced the same persistent issues —
              unreliable contractors, surprise costs, delayed timelines, and
              inconsistent workmanship. We set out to change that by building a
              service ecosystem where quality is standardised, pricing is
              transparent, and every project is executed with total commitment
              to customer satisfaction.
            </p>
            <p style={{ marginBottom: 0 }}>
              From the first consultation to the final handoff, Homjee takes
              full ownership of the process so you can sit back and enjoy your
              home.
            </p>
          </div>
          <div>
            <img
              src="https://plus.unsplash.com/premium_photo-1663045749033-9e71cf3f5663?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A bright, well-maintained living space"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ What We Do ═══════════ */}
      <section className="hj-sec center">
        <SectionHeading
          title="What We Do"
          subtitle="An Integrated Suite Of Services For Every Phase Of Living"
        />
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          <div className="hj-g4" style={{ textAlign: "left" }}>
            {SERVICES.map((s) => (
              <article className="hj-card ab-card" key={s.title}>
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="ab-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ Founders ═══════════ */}
      <section className="hj-sec alt center">
        <SectionHeading
          title="Our Leadership"
          subtitle="Driven By Experience & Military Discipline"
        />
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          <div className="hj-g2" style={{ textAlign: "left" }}>
            {FOUNDERS.map((f) => (
              <article className="hj-card ab-founder" key={f.name}>
                <div className="ab-avatar">
                  <img src={f.photo} alt={f.name} loading="lazy" />
                </div>
                <h3>{f.name}</h3>
                <p className="ab-role">{f.role}</p>
                <p>
                  {f.prefix} <strong>{f.highlight}</strong>, {f.text}
                </p>
              </article>
            ))}
          </div>
          <p style={{ maxWidth: 800, margin: "36px auto 0" }}>
            Together, this unique leadership dynamic ensures that Homjee
            operates with both cutting-edge service innovation and airtight
            reliability on the ground.
          </p>
        </div>
      </section>

      {/* ═══════════ The Homjee Promise ═══════════ */}
      <section className="hj-sec center">
        <SectionHeading
          title="The Homjee Promise"
          subtitle="Four Commitments On Every Project We Take On"
        />
        <div className="hj-wrap" style={{ marginTop: 44 }}>
          <div className="hj-g2">
            {PROMISES.map((promise) => {
              // Destructured in the body, not the params: this eslint config
              // has no react plugin, so a component used only in JSX reads as
              // an unused *argument*.
              const { Icon, title, text } = promise;
              return (
              <article className="hj-card ab-promise" key={title}>
                <div className="ab-promise-icon">
                  <Icon size={24} color={RED} strokeWidth={1.9} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <div className="hj-cta">
        <h3>
          Ready to experience the{" "}
          <img className="ab-cta-logo" src={homjeeLogo} alt="Homjee" />
          difference?
        </h3>
        <p>
          Book a service in minutes and let our verified professionals take it
          from here — now serving near you.
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

export default About;
