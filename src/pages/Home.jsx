import React from "react";
import { useState, useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import vediopainting from "../assets/vediopainting.mp4";
import arrow from "../assets/arrow.png";
import brush from "../assets/brush.svg";
import cleaning from "../assets/cleaning.svg";
import tool from "../assets/tool.svg";
import home from "../assets/home.svg";
import setting from "../assets/setting.svg";
import bannerhome from "../assets/banner-home.png";
import verified from "../assets/verified.svg";
import iconQuality from "../assets/iconQuality.png";
import iconWarranty from "../assets/iconWarranty.png";
import iconDelivery from "../assets/iconDelivery.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import interior from "../assets/interior.png";
import falseceiling from "../assets/false-ceiling.png";
import stencil from "../assets/stencil.png";
import waterproofing from "../assets/waterproofing.png";
import fullhome from "../assets/full-home.png";
import kitchen from "../assets/kitchen.png";
import bathroom from "../assets/bathroom.png";
import fullinterior from "../assets/full-interior.png";
import modularkitchen from "../assets/modular-kitchen.png";
import makeover from "../assets/makeover.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import arrowicon from "../assets/arrowicon.png";
import icon1 from "../assets/ontime.png";
import icon2 from "../assets/warranty-icon.png";
import icon3 from "../assets/verified-icon.png";
import icon4 from "../assets/quote-icon.png";
import lookingImage from "../assets/looking-for.png";
import testimonialVideo from "../assets/testimonial.mp4";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import rev1 from "../assets/rev1.jpg";
import rev2 from "../assets/rev2.jpg";
import rev3 from "../assets/rev3.jpg";
import rev4 from "../assets/rev4.jpg";
import rev5 from "../assets/rev5.jpg";
import rev6 from "../assets/rev6.jpg";
import rev7 from "../assets/rev7.jpg";
import rev8 from "../assets/rev8.jpg";
import rev9 from "../assets/rev9.jpg";
import rev10 from "../assets/rev10.jpg";
import rev11 from "../assets/rev11.jpg";
import rev12 from "../assets/rev12.jpg";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import backgroundImage from "../assets/banner-bg.png";
import vectoricon from "../assets/vectoricon.png";
import bannerhomemobile from "../assets/bannerhomemobile.png";
import circleicon from "../assets/circleicon.png";
import lineicon from "../assets/lineicon.png";
import backgroundhome from "../assets/backgroundhome.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { createEnquiryLead } from "../utils/enquiryLead";

const Home = ({ handleShow }) => {
  const [activeCategory, setActiveCategory] = useState("Painting");

  // "Get a call back" enquiry forms (top + bottom)
  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [cb2Name, setCb2Name] = useState("");
  const [cb2Phone, setCb2Phone] = useState("");
  const [cbBusy, setCbBusy] = useState(false);
  const [cbPopup, setCbPopup] = useState(null); // { ok, message }

  // FAQ "Talk to Us" → land on the "Get a call back" section
  useEffect(() => {
    if (window.location.hash === "#get-callback") {
      setTimeout(() => {
        document
          .getElementById("get-callback")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    }
  }, []);

  const submitCallback = async (name, phone, reset) => {
    const digits = String(phone).replace(/\D/g, "");
    if (!name.trim() || digits.length < 10) {
      setCbPopup({ ok: false, message: "Please enter your name and a valid 10-digit phone number." });
      return;
    }
    setCbBusy(true);
    try {
      await createEnquiryLead({
        user: { userName: name.trim(), mobileNumber: digits },
        // Backend maps this to category "Not Specified" (callback lead, no
        // service chosen). Must match a key the backend accepts, or the
        // enquiry is rejected and never reaches the admin panel.
        serviceType: "not_specified",
        formName: "Website Home Callback Lead",
      });
      reset();
      setCbPopup({ ok: true, message: "Thank you! We'll call you back shortly." });
    } catch {
      setCbPopup({ ok: false, message: "Something went wrong. Please try again." });
    } finally {
      setCbBusy(false);
    }
  };

  const handleCallback = () =>
    submitCallback(cbName, cbPhone, () => {
      setCbName("");
      setCbPhone("");
    });
  const handleCallback2 = () =>
    submitCallback(cb2Name, cb2Phone, () => {
      setCb2Name("");
      setCb2Phone("");
    });
  const chunkArray = (arr, size) => {
    const out = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const videos = [testimonialVideo, testimonialVideo, testimonialVideo];
  const icons = [
    { src: brush, style: { top: "5%", left: "35%" } },
    { src: cleaning, style: { top: "30%", left: "42%" } },
    { src: tool, style: { top: "56%", left: "43%" } },
    { src: home, style: { top: "18px", right: "22%" } },
    { src: setting, style: { top: "65%", left: "66%" } },
    { src: verified, style: { top: "58%", right: "9%" } },
  ];

  const serviceSteps = {
    Painting: [
      "At Home Consultation",
      "Measurements & Quotations",
      "Confirm With Booking Amount",
      "Paint Begins With Packing & Masking",
      "Quality Work With Genuine Products",
      "Final Inspection & Handoff",
    ],
    Cleaning: [
      "Select Your Custom Package",
      "Schedule On Preferred Date & Slot",
      "Confirm With Booking Amount",
      "Professional Team Arrival",
      "Deep Cleaning With Modern Tools",
      "Final Inspection & Handoff",
    ],
    Shifting: [
      "Free Consultation & Home Survey",
      "Itemized Quote & Inventory List",
      "Confirm Schedule with Booking Amount",
      "Professional Multi-Layer Packing",
      "Safe Transit & Timely Transport",
      "Unloading, Reassembly & Final Handoff",
    ],
    Interiors: [
      "Site Visit & Design Consultation",
      "Estimate & Transparent Costing",
      "3D Design & Material Selection",
      "Factory Manufacturing & Precision Cutting",
      "On-Site Installation & Quality Checks",
      "Final Walkthrough & Key Handover",
    ],
  };

  const promises = [
    {
      icon: icon1,
      title: "On-time\nCompletion Guarantee",
      bg: "#f2e8fd",
    },
    {
      icon: icon2,
      title: "1-Year\nWarranty",
      bg: "#dff0ff",
    },
    {
      icon: icon3,
      title: "Verified\nProfessionals",
      bg: "#d5f7f8",
    },
    {
      icon: icon4,
      title: "Accurate Quotations, No\nHidden Charges",
      bg: "#f2e8fd",
    },
  ];

  // All 12 customer reviews (same as the Reviews page) — shown in the
  // "Experience We Offer" slider. Role = the service the customer took.
  const testimonials = [
    { name: "Ketan S.", role: "House Painting", image: avatar1, text: "We got our 3BHK painted through Homjee, and the entire team was exceptionally professional. They used dust-free sanding machines, protected all our furniture with plastic sheets, and finished the project right on time. The wall finish is flawless!", rating: 5 },
    { name: "Sanya K.", role: "Full Home Deep Cleaning", image: avatar2, text: "We booked Homjee for a pre-move-in deep cleaning. Their team brought professional scrubbing machines and specialised eco-friendly chemicals. The kitchen grease, bathroom limescale, and window tracks were cleaned to perfection. Highly recommended!", rating: 5 },
    { name: "Dhruv R.", role: "Complete Home Interiors", image: avatar3, text: "Homjee executed our complete modular kitchen and wardrobe design. The 3D designs were accurate, the woodwork finish was top-notch, and the delivery timeline promised was strictly met. Great job by the team!", rating: 5 },
    { name: "Sameer V.", role: "Residential Packers & Movers", image: avatar1, text: "Moving homes is usually stressful, but Homjee made it completely smooth. Multi-layer bubble wrapping for fragile items, careful handling of heavy furniture, and zero scratches. Everything reached intact.", rating: 5 },
    { name: "Rajesh M.", role: "House Painting & Waterproofing", image: avatar2, text: "The painters arrived on time every day, kept the workspace clean, and explained every step of the process. No hidden charges or extra material demands. Truly a 5-star service!", rating: 5 },
    { name: "Ananya P.", role: "Kitchen & Bathroom Deep Cleaning", image: avatar3, text: "The staff was polite, hardworking, and extremely thorough. They didn't rush through the job and left the apartment completely spotless. Worth every rupee!", rating: 5 },
    { name: "Priya & Amit K.", role: "Living Room & Bedroom Interiors", image: avatar1, text: "From wall panelling to custom furniture, Homjee's interior team handled everything seamlessly. They managed vendors, monitored quality on-site, and delivered a high-end luxury feel.", rating: 5 },
    { name: "Neha G.", role: "Household Shifting", image: avatar2, text: "Their team dismantled our beds and dining tables, packed everything methodically, and reassembled everything at the new location on the same day. Incredible discipline and teamwork.", rating: 5 },
    { name: "Meera D.", role: "House Painting", image: avatar3, text: "Choosing colours felt overwhelming, but the Homjee team guided us brilliantly. The execution was quick, clean, and delivered zero splatters on our flooring. Will definitely book again!", rating: 5 },
    { name: "Amitabh S.", role: "Sofa Shampooing & Deep Cleaning", image: avatar1, text: "The team brought industrial-grade equipment and used safe, eco-friendly agents. They paid special attention to sofa upholstery and balcony tiles. Fantastic experience!", rating: 5 },
    { name: "Rahul & Neha M.", role: "Modular Kitchen Interiors", image: avatar2, text: "Their attention to structural detail and material hardware is top class. They maximised our kitchen storage space while keeping the design clean and modern. Outstanding execution.", rating: 5 },
    { name: "Vikramaditya N.", role: "Full-Service Relocation", image: avatar3, text: "Relocating usually causes endless anxiety, but Homjee handled our appliances and delicate glassware with extreme care. On-time delivery and hassle-free loading.", rating: 5 },
  ];

  // Distinct face photo per reviewer (gender-matched to the name)
  const REV_FACES = [rev1, rev2, rev3, rev4, rev5, rev6, rev7, rev8, rev9, rev10, rev11, rev12];
  testimonials.forEach((t, i) => { t.avatar = REV_FACES[i % REV_FACES.length]; });

  return (
    <div style={{ overflow: "hidden" }}>
      {/* ═══ Hero — one responsive block (desktop ≥992px / mobile below) ═══ */}
      <section className="hm-hero">
        {/* Copy */}
        <div className="hm-hero-left">
          <div className="hm-hero-badge">One Stop Solution For</div>

          <h1 className="hm-hero-title">
            House{" "}
            <span className="hm-hero-underline">
              Painting
              <img src={vectoricon} alt="" />
            </span>
            ,<br />
            Cleaning, Shifting
            <br />& Interior Services
          </h1>

          <p className="hm-hero-tagline">Happy Home, Happy Family</p>

          <div className="hm-hero-cta">
            <Button variant="" className="hm-hero-book" onClick={handleShow}>
              BOOK NOW
            </Button>
            <img src={arrow} alt="Arrow" className="hm-hero-arrow" />
          </div>
        </div>

        {/* Line-art backdrop + looping video */}
        <div className="hm-hero-media">
          <img src={lineicon} alt="" className="hm-hero-lines" />
          <video
            src={vediopainting}
            autoPlay
            muted
            loop
            playsInline
            className="hm-hero-video"
          />
        </div>

        {/* Floating service icons (positions per breakpoint in CSS) */}
        {icons.map((icon, idx) => (
          <div key={idx} className={`hm-hero-float hm-hero-float-${idx}`}>
            <img src={icon.src} alt="" />
          </div>
        ))}

        <style>{`
          /* — mobile (base) — */
          .hm-hero { position: relative; background: #fff; padding: 20px; }
          .hm-hero-badge {
            background: #ffecec; display: inline-block; padding: 4px 10px;
            border-radius: 30px; font-size: 12px; font-weight: 500;
            color: #ff0000; margin-bottom: 15px;
          }
          .hm-hero-title {
            font-size: 32px; line-height: 1.4; font-weight: 700;
            font-family: 'Gotham Rounded', sans-serif; color: #111;
            margin-bottom: 20px;
          }
          .hm-hero-underline { position: relative; display: inline-block; font-weight: 600; }
          .hm-hero-underline img {
            position: absolute; bottom: -7px; left: 0; width: 100%;
            height: auto; pointer-events: none;
          }
          .hm-hero-tagline { font-family: Fasthand; font-size: 24px; margin-bottom: 25px; color: #222; }
          .hm-hero-cta { display: flex; align-items: center; gap: 12px; margin-bottom: 30px; }
          .hm-hero-book {
            padding: 10px 24px !important; border-radius: 30px !important;
            font-weight: 600 !important; background-color: red !important;
            color: #fff !important; font-size: 14px !important; border: none !important;
            box-shadow: 0 6px 20px rgba(255,0,0,.3) !important;
            transition: background-color .2s ease, transform .2s ease !important;
          }
          /* same hover as the About Us "Book Now" button */
          .hm-hero-book:hover {
            background-color: #c50000 !important; color: #fff !important;
            transform: translateY(-2px) !important;
          }
          .hm-hero-arrow { height: 60px; width: 55px; margin-top: -8%; }
          .hm-hero-media { border-radius: 15px; overflow: hidden; margin: -4% 0 20px; }
          .hm-hero-lines {
            position: absolute; top: 183px; left: 70px; width: 442px; height: 361px;
            object-fit: cover; z-index: 0; pointer-events: none;
          }
          .hm-hero-video {
            border-radius: 15px; width: 100%; height: 240px; object-fit: cover;
            position: relative; z-index: 1; display: block;
          }
          .hm-hero-float {
            position: absolute; width: 35px; height: 35px; background: #fff;
            border-radius: 50%; box-shadow: 0 4px 10px rgba(255,0,0,.2);
            display: none; align-items: center; justify-content: center; z-index: 1;
          }
          .hm-hero-float img { width: 18px; height: 18px; }
          /* phone shows only these three, repositioned */
          .hm-hero-float-1 { display: flex; top: 0; left: 57%; }
          .hm-hero-float-3 { display: flex; top: 41%; right: 10%; left: auto; }
          .hm-hero-float-4 { display: flex; top: 5%; left: 84%; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-hero {
              display: flex; align-items: center; justify-content: space-between;
              padding: 60px 40px; flex-wrap: wrap; overflow: hidden;
            }
            .hm-hero-left { max-width: 560px; z-index: 2; margin-top: -15%; }
            .hm-hero-badge { font-size: 10px; padding: 6px 12px; margin-bottom: 20px; }
            .hm-hero-title { font-size: 48px; line-height: 1.3; }
            .hm-hero-underline img { bottom: -14px; }
            .hm-hero-tagline { font-size: 30px; margin-bottom: 30px; }
            .hm-hero-cta { gap: 16px; margin-bottom: 0; }
            .hm-hero-book { padding: 12px 30px !important; font-size: 16px !important; }
            .hm-hero-arrow { height: 83px; width: 75px; margin-top: 0; }
            .hm-hero-media {
              position: relative; max-width: 620px; height: 882px;
              border-radius: 20px; margin: -17% 0 0; z-index: 1;
            }
            .hm-hero-lines { top: 0; left: 0; width: 100%; height: 87%; }
            .hm-hero-video { margin-top: 38%; border-radius: 20px; height: 360px; }
            .hm-hero-float { width: 50px; height: 50px; display: flex; z-index: 0; }
            .hm-hero-float img { width: 28px; height: 28px; }
            .hm-hero-float-0 { top: 5%; left: 35%; }
            .hm-hero-float-1 { top: 30%; left: 42%; }
            .hm-hero-float-2 { top: 56%; left: 43%; }
            .hm-hero-float-3 { top: 18px; right: 22%; left: auto; }
            .hm-hero-float-4 { top: 65%; left: 66%; }
            .hm-hero-float-5 { top: 58%; right: 9%; }
          }
        `}</style>
      </section>

      {/* ═══ Let's Create / Get a call back — one responsive block ═══ */}
      <section className="hm-canvas" id="get-callback" style={{ scrollMarginTop: "90px" }}>
        {/* Copy (mobile: banner strip with circle icon; desktop: left column) */}
        <div className="hm-canvas-top">
          <p className="hm-canvas-script">Let’s Create Beauty</p>
          <h2 className="hm-canvas-title">
            Your Home,
            <br /> Our Canvas
          </h2>
          <img
            src={circleicon}
            alt="circle icon"
            className="hm-canvas-circle"
          />
        </div>

        {/* Promise icons (mobile: floating card; desktop: bottom row) */}
        <div className="hm-canvas-icons">
          <div className="hm-canvas-icons-row">
            <div className="hm-canvas-ic">
              <img src={iconQuality} alt="Best Quality" />
              <p>Best Quality</p>
            </div>
            <div className="hm-canvas-ic">
              <img src={iconWarranty} alt="Warranty" />
              <p>1 Year Warranty</p>
            </div>
            <div className="hm-canvas-ic">
              <img src={iconDelivery} alt="Delivery" />
              <p>On Time Delivery</p>
            </div>
          </div>
        </div>

        {/* Call-back form (mobile: grey band below; desktop: card in banner) */}
        <div className="hm-canvas-body">
          <div className="hm-canvas-form">
            <h3>Get a call back</h3>
            <input
              type="text"
              placeholder="Enter Name"
              value={cbName}
              onChange={(e) => setCbName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter WhatsApp Phone Number"
              value={cbPhone}
              maxLength={10}
              onChange={(e) => setCbPhone(e.target.value.replace(/\D/g, ""))}
            />
            <button onClick={cbBusy ? undefined : handleCallback}>
              {cbBusy ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-canvas { padding: 20px; position: relative; border-radius: 30px; margin-top: -12%; }
          .hm-canvas-top {
            background-image: url(${bannerhomemobile});
            width: 100%; height: 250px; border-radius: 30px 30px 0 0;
            position: relative; overflow: hidden;
            display: flex; flex-direction: column; justify-content: center;
            align-items: center; text-align: center; padding: 20px;
          }
          .hm-canvas-script { font-family: Fasthand; font-size: 20px; color: #000; margin-bottom: 5px; }
          .hm-canvas-title { font-size: 22px; font-weight: bold; color: #fff; margin-bottom: 10px; line-height: 1.2; }
          .hm-canvas-title br { display: none; }
          .hm-canvas-circle { width: 103px; height: 103px; border-radius: 50%; }
          .hm-canvas-icons {
            width: 80%; padding: 20px 10px; border-radius: 20px;
            position: absolute; top: 210px; left: 50%;
            transform: translateX(-50%); z-index: 2;
          }
          .hm-canvas-icons-row {
            display: flex; justify-content: space-between; align-items: center;
            gap: 12px; white-space: nowrap; margin-top: 5%;
          }
          .hm-canvas-ic { text-align: center; }
          .hm-canvas-ic img { width: 40px; margin-bottom: 5px; }
          .hm-canvas-ic p { font-size: 10px; margin: 0; font-weight: 600; }
          .hm-canvas-body {
            background-color: #D8D8D8; padding-top: 120px; padding-bottom: 30px;
            border-radius: 0 0 30px 30px;
          }
          .hm-canvas-form {
            background: #fff; border-radius: 20px; padding: 25px 20px;
            width: 90%; margin: -70px auto 0;
            box-shadow: 0 4px 10px rgba(0,0,0,.08);
          }
          .hm-canvas-form h3 { font-size: 20px; margin-bottom: 20px; text-align: center; font-weight: 600; color: #000; }
          .hm-canvas-form input {
            width: 100%; padding: 12px; margin-bottom: 15px; background: #fff;
            border-radius: 12px; border: 1px solid #ccc; outline: none; font-size: 12px;
            color: #000; caret-color: #000;
          }
          .hm-canvas-form input::placeholder { color: #888; }
          .hm-canvas-form input + input { margin-bottom: 20px; }
          .hm-canvas-form button {
            width: 100%; padding: 12px; background: #fff; color: red;
            border: 1px solid red; border-radius: 30px; font-size: 16px; cursor: pointer;
          }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-canvas {
              background-image: url(${bannerhome});
              background-size: cover; background-position: center;
              border-radius: 30px; padding: 60px 90px;
              display: flex; justify-content: space-between; align-items: flex-start;
              flex-wrap: wrap; max-width: 1450px; margin: -14% auto 0;
              box-sizing: border-box;
            }
            .hm-canvas-top {
              background: none; width: auto; height: auto; border-radius: 0;
              overflow: visible; display: block; text-align: left; padding: 0;
              max-width: 500px; color: #fff;
            }
            .hm-canvas-script { font-size: 50px; margin-bottom: 0; }
            .hm-canvas-title { font-size: 70px; margin: 10px 0; }
            .hm-canvas-title br { display: inline; }
            .hm-canvas-circle { display: none; }
            .hm-canvas-icons {
              position: static; width: 100%; padding: 0; transform: none;
              margin-top: 40px; margin-left: 54%; order: 2;
            }
            .hm-canvas-icons-row {
              justify-content: center; gap: 50px; flex-wrap: wrap;
              margin-top: 0; white-space: normal;
            }
            .hm-canvas-ic { color: #fff; }
            .hm-canvas-ic img { width: 60px; margin-bottom: 0; }
            .hm-canvas-ic p { font-size: 16px; font-weight: 400; margin: 10px 0 0; }
            .hm-canvas-body { display: contents; }
            .hm-canvas-form {
              border-radius: 25px; padding: 30px; max-width: 500px; width: 100%;
              z-index: 2; margin: 20px 0 0;
              box-shadow: 0 6px 30px rgba(0,0,0,.1);
            }
            .hm-canvas-form h3 { font-size: 22px; text-align: left; font-weight: 700; }
            .hm-canvas-form input { padding: 12px 15px; font-size: 14px; }
            .hm-canvas-form button { font-weight: 700; font-size: 14px; }
          }
        `}</style>
      </section>
      <br />
      {/* ═══ Our Recent Projects — one responsive block ═══ */}
      <section className="hm-recent">
        {/* Heading row (mobile hides the top EXPLORE ALL — it moves below) */}
        <div className="hm-recent-head">
          <h2 className="hm-recent-title">
            Our Recent Projects
            <img src={vectoricon} alt="" className="hm-recent-underline" />
          </h2>
          <Button
            variant="outline-danger"
            className="hm-recent-explore"
            href="/projects"
          >
            EXPLORE ALL
          </Button>
        </div>

        {/* Smooth drag/swipe slider (swiggy-style) — one slider for all sizes */}
        <div className="hm-recent-slider">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            grabCursor={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              768: { slidesPerView: 2.2 },
              992: { slidesPerView: 3 },
            }}
          >
            {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="hm-recent-slide-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style>{`
          /* breakpoint utilities for widgets that genuinely differ */
          @media (max-width: 991.98px) { .hm-lg-only { display: none !important; } }
          @media (min-width: 992px) { .hm-sm-only { display: none !important; } }

          /* — mobile (base) — */
          .hm-recent { background: #fff; padding: 30px 15px; }
          .hm-recent-head { margin-bottom: 30px; position: relative; }
          .hm-recent-title {
            font-size: 24px; font-weight: bold; color: #111;
            font-family: 'Poppins', sans-serif; margin-bottom: 25px;
            text-align: left; position: relative; display: inline-block;
          }
          .hm-recent-underline {
            position: absolute; bottom: -11px; left: 140px; width: 100px;
            height: auto; border-radius: 10px; pointer-events: none;
          }
          .hm-recent-slider { padding-bottom: 10px; }
          .hm-recent-slide-img {
            width: 100%; height: 300px; border-radius: 20px; object-fit: cover; display: block;
          }
          .hm-recent-slider .swiper-pagination { position: static; margin-top: 16px; }
          .hm-recent-slider .swiper-pagination-bullet {
            width: 14px; height: 4px; border-radius: 4px; background: #ccc; opacity: 1;
          }
          .hm-recent-slider .swiper-pagination-bullet-active { width: 24px; background: #ff0000; }
          .hm-recent-explore {
            font-weight: 600 !important; border-radius: 30px !important;
            padding: 6px 16px !important; font-size: 12px !important;
          }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-recent {
              padding: 60px 40px; text-align: center;
              max-width: 1450px; margin: auto;
            }
            .hm-recent-head {
              display: flex; justify-content: space-between; align-items: center;
              margin-bottom: 30px; flex-wrap: wrap; max-width: 1350px;
            }
            .hm-recent-title { font-size: 36px; margin-bottom: 0; }
            .hm-recent-underline { bottom: -14px; left: 230px; width: 130px; }
            .hm-recent-explore {
              font-weight: 600 !important; border-radius: 30px !important;
              padding: 8px 24px !important; font-size: 14px !important;
            }
          }

          /* — desktop slider sizing — */
          @media (min-width: 992px) {
            .hm-recent-slide-img { height: 504px; }
          }
        `}</style>
      </section>

      {/* ═══ Product & Services · House Painters — one responsive block ═══ */}
      <section className="hm-ps">
        <h2 className="hm-ps-title">
          Product <span style={{ color: "#000" }}>&</span> Services
          <img src={vectoricon} alt="" className="hm-ps-underline" />
        </h2>

        <div className="hm-ps-card">
          <div className="hm-ps-cardhead">
            <h3>House Painters & Waterproofing</h3>
            <a href="/services">See All</a>
          </div>

          {/* Desktop: shows 3, slides one item at a time */}
          <div className="hm-lg-only">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              className="hm-prod-swiper"
            >
              {[
                { img: interior, alt: "Interior", title: "Interiors & exteriors", text: "Color Your Home Inside Out" },
                { img: falseceiling, alt: "False Ceiling", title: "Pop false ceiling", text: "Elevate Your Style, Beyond The Ceiling, Beyond Expectations" },
                { img: stencil, alt: "Stencil", title: "Texture and Stencils", text: "Elevate Your Space With Wall Beautification" },
                { img: waterproofing, alt: "Waterproofing", title: "Waterproofing", text: "Seal, Shield, & Sustain Your Home" },
              ].map((c, i) => (
                <SwiperSlide key={i}>
                  <div className="hm-ps-dcard">
                    <img src={c.img} alt={c.alt} />
                    <h5>{c.title}</h5>
                    <p>{c.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile: two static cards */}
          <div className="hm-sm-only">
            <div className="hm-ps-mgrid">
              {[
                { img: interior, alt: "Interiors & Exteriors", title: "Interiors & exteriors" },
                { img: falseceiling, alt: "Pop False Ceiling", title: "Pop false ceiling" },
              ].map((c, ci) => (
                <div key={ci} className="hm-ps-mcard">
                  <img src={c.img} alt={c.alt} />
                  <h5>{c.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-ps { background: #fff; padding: 30px 15px; }
          /* shared product slider (shows 3, moves one at a time) */
          .hm-prod-swiper { padding: 6px 4px 4px; }
          .hm-prod-swiper .swiper-button-prev,
          .hm-prod-swiper .swiper-button-next {
            top: 45%; width: 38px; height: 38px; border-radius: 50%;
            background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,.15); color: #B45835;
            margin-top: 0; transform: translateY(-50%);
          }
          .hm-prod-swiper .swiper-button-prev { left: -6px; }
          .hm-prod-swiper .swiper-button-next { right: -6px; }
          .hm-prod-swiper .swiper-button-prev::after,
          .hm-prod-swiper .swiper-button-next::after { font-size: 16px; font-weight: 700; }
          .hm-prod-swiper .swiper-button-disabled { opacity: .3; }
          .hm-prod-swiper .hm-ps-dcard,
          .hm-prod-swiper .hm-dc-dcard,
          .hm-prod-swiper .hm-hi-dcard,
          .hm-prod-swiper .hm-pm-dcard { width: 100%; padding: 0; }
          .hm-ps-title {
            font-size: 28px; font-weight: bold; font-family: 'Poppins', sans-serif;
            color: #111; margin-bottom: 10px; position: relative; display: inline-block;
          }
          .hm-ps-underline {
            position: absolute; bottom: -9px; left: 60%; transform: translateX(-50%);
            width: 100px; height: auto; border-radius: 10px; pointer-events: none;
          }
          .hm-ps-card {
            background: #fff5f1; padding: 20px; border-radius: 20px; margin-top: 20px;
          }
          .hm-ps-cardhead {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
          }
          .hm-ps-cardhead h3 { font-size: 18px; font-weight: 600; margin-bottom: 0; text-align: left; }
          .hm-ps-cardhead a { color: #B45835; font-size: 14px; white-space: nowrap; }
          .hm-ps-mgrid {
            display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap;
          }
          .hm-ps-mcard { flex: 1; min-width: 0; text-align: center; }
          .hm-ps-mcard img { width: 157px; height: 118px; border-radius: 15px; object-fit: cover; max-width: 100%; }
          .hm-ps-mcard h5 { font-weight: 600; font-size: 14px; margin-top: 10px; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-ps { padding: 60px 40px; max-width: 1450px; margin: 0 auto; }
            .hm-ps-title { font-size: 36px; margin-bottom: 20px; }
            .hm-ps-underline { bottom: -14px; left: 200px; transform: none; width: 150px; }
            .hm-ps-card { padding: 40px; border-radius: 30px; margin-top: 30px; }
            .hm-ps-cardhead { margin-bottom: 30px; }
            .hm-ps-cardhead h3 { font-size: 28px; font-weight: 700; }
            .hm-ps-cardhead a { color: #963600; font-size: 16px; font-weight: bold; }
            .hm-ps-dcard { width: 32%; padding: 10px; }
            .hm-ps-dcard img { width: 100%; height: 250px; border-radius: 15px; object-fit: cover; }
            .hm-ps-dcard h5 { font-weight: 700; margin-top: 15px; }
            .hm-ps-dcard p { font-size: 14px; color: #444; }
          }

          /* — carousel chrome — */
          .product-carousel .carousel-control-prev,
          .product-carousel .carousel-control-next {
            width: 40px; height: 40px; top: 50%; transform: translateY(-50%);
            background-color: #fff; border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15); opacity: 1;
          }
          .product-carousel .carousel-control-prev { left: -20px; margin-top: -5%; }
          .product-carousel .carousel-control-next { right: -20px; margin-top: -5%; }
          .carousel-control-prev-icon.custom-icon-painters {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-next-icon.custom-icon-painters {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-prev-icon.custom-icon-painters,
          .carousel-control-next-icon.custom-icon-painters {
            background-color: #B45835;
          }
        `}</style>
      </section>

      {/* ═══ Deep Cleaning Service — one responsive block ═══ */}
      <section className="hm-dc">
        <div className="hm-dc-card">
          <div className="hm-dc-cardhead">
            <h3>Deep Cleaning Service</h3>
            <a href="/deepcleaning">See All</a>
          </div>

          {/* Desktop: shows 3, slides one item at a time */}
          <div className="hm-lg-only">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              className="hm-prod-swiper"
            >
              {[
                { img: fullhome, alt: "Full Home Cleaning", title: "Full Home Cleaning", text: "For A Home That Looks Brand New" },
                { img: kitchen, alt: "Kitchen Cleaning", title: "Kitchen Cleaning", text: "Say Goodbye To Tough Oil & Grease" },
                { img: bathroom, alt: "Bathroom Cleaning", title: "Bathroom Cleaning", text: "Hard Water Stains? Grout Grime? Gone!" },
                { img: fullhome, alt: "Sofa Cleaning", title: "Sofa Cleaning", text: "We Clean Where You Lounge" },
              ].map((c, i) => (
                <SwiperSlide key={i}>
                  <div className="hm-dc-dcard">
                    <img src={c.img} alt={c.alt} />
                    <h5>{c.title}</h5>
                    <p>{c.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile: two static cards */}
          <div className="hm-sm-only">
            <div className="hm-dc-mgrid">
              {[
                { img: bathroom, alt: "Bathroom Cleaning", title: "Bathroom Cleaning" },
                { img: kitchen, alt: "Kitchen Cleaning", title: "Kitchen Cleaning" },
              ].map((c, ci) => (
                <div key={ci} className="hm-dc-mcard">
                  <img src={c.img} alt={c.alt} />
                  <h5>{c.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-dc { background: #fff; padding: 30px 15px; }
          .hm-dc-card { background: #e7f6ff; padding: 25px; border-radius: 20px; }
          .hm-dc-cardhead {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
          }
          .hm-dc-cardhead h3 {
            font-size: 18px; font-weight: 600; margin-bottom: 0;
            font-family: 'Poppins', sans-serif;
          }
          .hm-dc-cardhead a { color: #378FBD; font-size: 14px; white-space: nowrap; }
          .hm-dc-mgrid { display: flex; gap: 12px; justify-content: space-between; }
          .hm-dc-mcard { flex: 1; text-align: center; }
          .hm-dc-mcard img { width: 100%; height: 120px; object-fit: cover; border-radius: 15px; }
          .hm-dc-mcard h5 { font-weight: 600; margin-top: 10px; font-size: 14px; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-dc { padding: 60px 40px; max-width: 1450px; margin: -4% auto 0; }
            .hm-dc-card { padding: 40px; border-radius: 30px; }
            .hm-dc-cardhead { margin-bottom: 30px; }
            .hm-dc-cardhead h3 { font-size: 28px; font-weight: 700; }
            .hm-dc-cardhead a { color: #0071bc; font-size: 16px; font-weight: bold; }
            .hm-dc-dcard { width: 32%; padding: 10px; }
            .hm-dc-dcard img { width: 100%; height: 250px; border-radius: 15px; object-fit: cover; }
            .hm-dc-dcard h5 { font-weight: 700; margin-top: 15px; }
            .hm-dc-dcard p { font-size: 14px; color: #444; }
          }

          /* — carousel chrome — */
          .cleaning-carousel .carousel-control-prev,
          .cleaning-carousel .carousel-control-next {
            width: 40px; height: 40px; top: 50%; transform: translateY(-50%);
            background-color: #fff; border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15); opacity: 1;
          }
          .cleaning-carousel .carousel-control-prev { left: -20px; margin-top: -5%; }
          .cleaning-carousel .carousel-control-next { right: -20px; margin-top: -5%; }
          .carousel-control-prev-icon.custom-icon-cleaning {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-next-icon.custom-icon-cleaning {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-prev-icon.custom-icon-cleaning,
          .carousel-control-next-icon.custom-icon-cleaning {
            background-color: #378FBD;
          }
        `}</style>
      </section>

      {/* ═══ Home Interior — one responsive block ═══ */}
      <section className="hm-hi">
        <div className="hm-hi-card">
          <div className="hm-hi-cardhead">
            <h3>Home Interior</h3>
            <a href="/home-interior">See All</a>
          </div>

          {/* Desktop: shows 3, slides one item at a time */}
          <div className="hm-lg-only">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              className="hm-prod-swiper"
            >
              {[
                { img: fullinterior, alt: "Full Interior", title: "Full Home Interior", text: "Dream Home Design, Where Imagination Meets Reality" },
                { img: modularkitchen, alt: "Kitchen", title: "Modular Kitchen", text: "Smarter Kitchens, Where Functionality Meets Modern Design" },
                { img: makeover, alt: "Bedroom", title: "Bedroom Makeover", text: "Wake Up To Inspiration: Create A Bedroom That Energies You" },
                { img: fullinterior, alt: "Bathroom", title: "Bathroom Renovation", text: "Spa-Like Serenity, Design Your Bathroom Oasis" },
              ].map((c, i) => (
                <SwiperSlide key={i}>
                  <div className="hm-hi-dcard">
                    <img src={c.img} alt={c.alt} />
                    <h5>{c.title}</h5>
                    <p>{c.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile: two static cards */}
          <div className="hm-sm-only">
            <div className="hm-hi-mgrid">
              {[
                { img: fullinterior, alt: "Full Home Interior", title: "Full Home Interior" },
                { img: modularkitchen, alt: "Modular Kitchen", title: "Modular Kitchen" },
              ].map((c, ci) => (
                <div key={ci} className="hm-hi-mcard">
                  <img src={c.img} alt={c.alt} />
                  <h5>{c.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-hi { background: #fff; padding: 30px 15px; }
          .hm-hi-card { background: #f4e8ff; padding: 25px; border-radius: 20px; }
          .hm-hi-cardhead {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
          }
          .hm-hi-cardhead h3 {
            font-size: 18px; font-weight: 600; margin-bottom: 0;
            font-family: 'Poppins', sans-serif;
          }
          .hm-hi-cardhead a { color: #6f2dbd; font-size: 14px; white-space: nowrap; }
          .hm-hi-mgrid { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; }
          .hm-hi-mcard { flex: 1; min-width: 0; text-align: center; }
          .hm-hi-mcard img { width: 100%; height: 120px; object-fit: cover; border-radius: 15px; }
          .hm-hi-mcard h5 { font-weight: 600; margin-top: 10px; font-size: 14px; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-hi { padding: 60px 40px; max-width: 1450px; margin: -4% auto 0; }
            .hm-hi-card { padding: 40px; border-radius: 30px; }
            .hm-hi-cardhead { margin-bottom: 30px; }
            .hm-hi-cardhead h3 { font-size: 28px; font-weight: 700; }
            .hm-hi-cardhead a { color: #6f2dbd; font-size: 16px; font-weight: bold; }
            .hm-hi-dcard { width: 32%; padding: 10px; }
            .hm-hi-dcard img { width: 100%; height: 250px; border-radius: 15px; object-fit: cover; }
            .hm-hi-dcard h5 { font-weight: 700; margin-top: 15px; }
            .hm-hi-dcard p { font-size: 14px; color: #444; }
          }

          /* — carousel chrome — */
          .interior-carousel .carousel-control-prev,
          .interior-carousel .carousel-control-next {
            width: 40px; height: 40px; top: 50%; transform: translateY(-50%);
            background-color: #fff; border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15); opacity: 1;
          }
          .interior-carousel .carousel-control-prev { left: -20px; margin-top: -5%; }
          .interior-carousel .carousel-control-next { right: -20px; margin-top: -5%; }
          .carousel-control-prev-icon.custom-icon-interior {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M10.5 2L4.5 8L10.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-next-icon.custom-icon-interior {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path d='M5.5 2L11.5 8L5.5 14' stroke='%23B45835' stroke-width='2' fill='none'/></svg>");
            width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
          }
          .carousel-control-prev-icon.custom-icon-interior,
          .carousel-control-next-icon.custom-icon-interior {
            background-color: #7E44AC;
          }
        `}</style>
      </section>

      {/* ═══ Packers & Movers — one responsive block ═══ */}
      <section className="hm-pm">
        <div className="hm-pm-card">
          <div className="hm-pm-cardhead">
            <h3>Packers & Movers</h3>
            <a href="/packers-movers">See All</a>
          </div>

          {/* Desktop: shows 3, slides one item at a time */}
          <div className="hm-lg-only">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              className="hm-prod-swiper"
            >
              {[
                { img: fullinterior, alt: "Hire Vehicle", title: "Hire Vehicle", text: "Rent the perfect truck for your smooth, efficient move" },
                { img: modularkitchen, alt: "Packers & Movers", title: "Packers & Movers", text: "From packing to transport, we make shifting effortless and worry-free" },
                { img: makeover, alt: "Warehouse & Storage", title: "Warehouse & Storage", text: "Secure, flexible storage for your goods" },
                { img: fullinterior, alt: "Loading & Unloading", title: "Loading & Unloading", text: "Our experts ensure safe, efficient loading and unloading of all your items" },
              ].map((c, i) => (
                <SwiperSlide key={i}>
                  <div className="hm-pm-dcard">
                    <img src={c.img} alt={c.alt} />
                    <h5>{c.title}</h5>
                    <p>{c.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile: two static cards */}
          <div className="hm-sm-only">
            <div className="hm-pm-mgrid">
              {[
                { img: makeover, alt: "Warehouse & Storage", title: "Warehouse & Storage" },
                { img: modularkitchen, alt: "Packers & Movers", title: "Packers & Movers" },
              ].map((c, ci) => (
                <div key={ci} className="hm-pm-mcard">
                  <img src={c.img} alt={c.alt} />
                  <h5>{c.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-pm { background: #fff; padding: 30px 15px; }
          .hm-pm-card { background: #D7FFF6; padding: 25px; border-radius: 20px; }
          .hm-pm-cardhead {
            display: flex; justify-content: space-between; align-items: center;
            margin-bottom: 20px;
          }
          .hm-pm-cardhead h3 {
            font-size: 18px; font-weight: 600; margin-bottom: 0;
            font-family: 'Poppins', sans-serif;
          }
          .hm-pm-cardhead a { color: #7E44AC; font-size: 14px; font-weight: 600; white-space: nowrap; }
          .hm-pm-mgrid { display: flex; gap: 12px; justify-content: space-between; flex-wrap: wrap; }
          .hm-pm-mcard { flex: 1; min-width: 0; text-align: center; }
          .hm-pm-mcard img { width: 100%; height: 150px; object-fit: cover; border-radius: 15px; }
          .hm-pm-mcard h5 { font-weight: 600; margin-top: 10px; font-size: 14px; white-space: nowrap; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-pm { padding: 60px 40px; max-width: 1450px; margin: -4% auto 0; }
            .hm-pm-card { padding: 40px; border-radius: 30px; }
            .hm-pm-cardhead { margin-bottom: 30px; }
            .hm-pm-cardhead h3 { font-size: 28px; font-weight: 700; }
            .hm-pm-cardhead a { color: #6f2dbd; font-size: 16px; font-weight: bold; }
            .hm-pm-dcard { width: 32%; padding: 10px; }
            .hm-pm-dcard img { width: 100%; height: 250px; border-radius: 15px; object-fit: cover; }
            .hm-pm-dcard h5 { font-weight: 700; margin-top: 15px; }
            .hm-pm-dcard p { font-size: 14px; color: #444; }
          }
        `}</style>
      </section>

      {/* ═══ How It Work — one responsive block ═══ */}
      <section className="hm-how">
        <h2 className="hm-how-title">
          How It Work
          <img src={vectoricon} alt="" className="hm-how-underline" />
        </h2>

        <p className="hm-how-sub">Just A Few Steps To Transform Your Home</p>

        {/* Filter — grey track with a red pill that slides to the active tab */}
        <div className="hm-how-pills">
          <span
            className="hm-how-pill-slider"
            style={{
              transform: `translateX(${["Painting", "Cleaning", "Shifting", "Interiors"].indexOf(activeCategory) * 100}%)`,
            }}
          />
          {["Painting", "Cleaning", "Shifting", "Interiors"].map(
            (item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(item)}
                className={`hm-how-pill${
                  activeCategory === item ? " active" : ""
                }`}
              >
                {item}
              </button>
            ),
          )}
        </div>

        <h3 className="hm-how-proc">Our Smooth Process</h3>

        <div key={activeCategory} className="hm-how-catwrap">
        {/* Desktop: Bootstrap carousel — same design as Deep Cleaning */}
        <div className="d-none d-lg-block">
          <div className="how-carousel-wrap">
            <Carousel
              key={activeCategory}
              indicators={true}
              controls={true}
              interval={4000}
              className="how-carousel"
              nextIcon={<span className="carousel-control-next-icon custom-icon" />}
              prevIcon={<span className="carousel-control-prev-icon custom-icon" />}
            >
              {chunkArray(serviceSteps[activeCategory] || [], 3).map((group, ci) => (
                <Carousel.Item key={ci}>
                  <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ padding: "0 5%" }}>
                    {group.map((step, i) => {
                      const gi = ci * 3 + i;
                      return (
                        <React.Fragment key={i}>
                          <div
                            style={{
                              width: "25%",
                              backgroundColor: i % 2 === 0 ? "red" : "#000",
                              borderRadius: "25px",
                              padding: "20px",
                              color: "#fff",
                              transform: i === 0 ? "rotate(-2deg)" : i === 2 ? "rotate(2deg)" : "none",
                            }}
                          >
                            <img
                              src={gi % 3 === 0 ? step1 : gi % 3 === 1 ? step2 : step3}
                              alt={`Step ${gi + 1}`}
                              style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "15px" }}
                            />
                            <h5 style={{ marginTop: "18px", fontSize: "18px", minHeight: "4.4em" }}>
                              0{gi + 1} <br />
                              <strong>{step}</strong>
                            </h5>
                          </div>
                          {i < group.length - 1 && (
                            <img src={arrowicon} alt="arrow" style={{ width: "70px", margin: "0 15px" }} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Mobile: horizontal scroll strip — same as Deep Cleaning */}
        <div className="d-block d-lg-none">
          <div
            style={{
              overflowX: "auto",
              display: "flex",
              gap: "16px",
              paddingLeft: "15px",
              scrollSnapType: "x mandatory",
            }}
          >
            {(serviceSteps[activeCategory] || []).map((step, idx) => (
              <div
                key={idx}
                style={{
                  minWidth: "85%",
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  backgroundColor: idx % 2 === 0 ? "red" : "#000",
                  borderRadius: "25px",
                  padding: "20px",
                  color: "#fff",
                }}
              >
                <img
                  src={idx % 3 === 0 ? step1 : idx % 3 === 1 ? step2 : step3}
                  alt={`Step ${idx + 1}`}
                  style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "15px" }}
                />
                <h5 style={{ marginTop: "18px", fontSize: "16px", minHeight: "4.4em" }}>
                  0{idx + 1} <br />
                  <strong>{step}</strong>
                </h5>
              </div>
            ))}
          </div>
        </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-how { background: #fff; padding: 30px 15px; text-align: center; overflow-x: hidden; }
          .hm-how-catwrap { animation: hmCatSlide 0.45s ease both; }
          @keyframes hmCatSlide {
            from { opacity: 0; transform: translateX(45px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          /* Bootstrap carousel chrome — scoped to .how-carousel (matches Deep Cleaning) */
          .how-carousel-wrap { padding: 20px; text-align: center; }
          .how-carousel .carousel-control-prev,
          .how-carousel .carousel-control-next {
            width: 40px; height: 40px; top: 50%; transform: translateY(-50%);
            background-color: #fff; border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15); opacity: 1;
          }
          .how-carousel .carousel-control-prev { left: -10px; }
          .how-carousel .carousel-control-next { right: -10px; }
          .how-carousel .custom-icon {
            display: inline-block; width: 20px; height: 20px;
            mask-size: contain; mask-repeat: no-repeat; mask-position: center;
            background-color: #e60000;
          }
          .how-carousel .carousel-control-prev-icon.custom-icon {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 16'><path d='M11 1L3 8l8 7' stroke='red' stroke-width='2' fill='none'/></svg>");
          }
          .how-carousel .carousel-control-next-icon.custom-icon {
            mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 16 16'><path d='M5 1l8 7-8 7' stroke='red' stroke-width='2' fill='none'/></svg>");
          }
          .how-carousel .carousel-indicators { bottom: -63px; }
          .how-carousel .carousel-indicators [data-bs-target] {
            width: 30px; height: 4px; border-radius: 5px; background-color: #ccc; margin: 0 5px;
          }
          .how-carousel .carousel-indicators .active { background-color: red; width: 40px; }
          .hm-how-title {
            font-size: 28px; font-weight: bold; font-family: 'Poppins', sans-serif;
            color: #111; margin-bottom: 10px; position: relative; display: inline-block;
          }
          .hm-how-underline {
            display: none; position: absolute; bottom: -14px; left: 50px;
            width: 180px; height: auto; border-radius: 10px; pointer-events: none;
          }
          .hm-how-sub { font-weight: 600; font-size: 16px; margin-top: 20px; margin-bottom: 30px; }
          .hm-how-proc { font-weight: 700; font-size: 20px; margin-bottom: 20px; }
          .hm-how-pills {
            position: relative; display: flex; justify-content: space-between; align-items: center;
            gap: 0; margin-bottom: 30px; background-color: #f5f5f5;
            border-radius: 999px; padding: 5px;
            box-shadow: 0 6px 18px rgba(0,0,0,.06);
          }
          /* the red pill that slides between tabs (swiggy Delivery 1/2 style) */
          .hm-how-pill-slider {
            position: absolute; top: 5px; bottom: 5px; left: 5px;
            width: calc((100% - 10px) / 4);
            background: red; border-radius: 999px; z-index: 0;
            box-shadow: 0 4px 12px rgba(255,0,0,.25);
            transition: transform .35s cubic-bezier(.4, 0, .2, 1);
          }
          .hm-how-pill {
            position: relative; z-index: 1;
            flex: 1; padding: 9px 8px; border-radius: 999px;
            font-weight: 600; font-size: 12px; border: none;
            background-color: transparent; color: #9b9b9b; cursor: pointer;
            transition: color .25s ease;
          }
          .hm-how-pill.active { color: #fff; font-weight: 700; }
          .hm-how-slider { padding: 22px 6px 40px; }
          /* clip horizontally so the next card never peeks, but keep vertical
             visible so the tilt + drop shadow are not cut off */
          .hm-how-slider .swiper { overflow-x: clip; overflow-y: visible; }
          .hm-how-arrow { display: none; }
          .hm-how-nav { display: none; }
          /* cards fade in when the category tab changes (slider remounts) */
          @keyframes hmCardIn { from { opacity: 0; } to { opacity: 1; } }
          .hm-how-card {
            border-radius: 25px; padding: 20px; color: #fff; height: 100%;
            box-shadow: 0 12px 26px rgba(0,0,0,.12);
            animation: hmCardIn .45s ease both;
          }
          .hm-how-cardimg {
            width: 100%; height: 300px; object-fit: cover;
            border-radius: 15px; display: block;
          }
          .hm-how-cardfoot {
            display: flex; flex-direction: column; align-items: flex-start;
            gap: 2px; padding: 18px 6px 6px;
          }
          .hm-how-num { font-size: 18px; font-weight: 400; line-height: 1.2; }
          .hm-how-label {
            font-size: 18px; font-weight: 700;
            line-height: 1.3; text-align: left; white-space: normal; overflow-wrap: break-word;
          }
          .hm-how-slider .swiper-pagination { position: static; margin-top: 24px; }
          .hm-how-slider .swiper-pagination-bullet {
            width: 20px; height: 4px; border-radius: 4px; background: #ccc; opacity: 1;
          }
          .hm-how-slider .swiper-pagination-bullet-active { width: 30px; background: red; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-how { padding: 60px 20px; }
            .hm-how-title { font-size: 40px; }
            .hm-how-underline { display: block; }
            .hm-how-sub { font-size: 26px; }
            .hm-how-proc { font-size: 26px; margin-bottom: 30px; }
            .hm-how-pills { margin: 0 auto 40px; max-width: 820px; }
            .hm-how-pill { padding: 9px 24px; font-size: 16px; }
            .hm-how-pill.active { box-shadow: 0 6px 16px rgba(255,0,0,.25); }
            .hm-how-slider { padding: 0 0 40px; max-width: 1200px; margin: 0 auto; position: relative; }
            .hm-how-cardimg { height: 340px; }
            .hm-how-num { font-size: 18px; }
            .hm-how-label { font-size: 18px; }
            /* decorative arrows between the three visible cards */
            .hm-how-arrow {
              display: block; position: absolute; top: 45%; transform: translateY(-50%);
              z-index: 3; pointer-events: none; color: #111;
            }
            .hm-how-arrow img { width: 60px; height: auto; }
            .hm-how-arrow-1 { left: 32%; margin-left: -30px; }
            .hm-how-arrow-2 { left: 68%; margin-left: -30px; }
            /* circular prev/next nav buttons on the slider edges */
            .hm-how-nav {
              display: flex; align-items: center; justify-content: center;
              position: absolute; top: 45%; transform: translateY(-50%);
              width: 48px; height: 48px; border-radius: 50%;
              background: #fff; border: none; cursor: pointer; z-index: 4;
              color: #e60000; box-shadow: 0 4px 14px rgba(0,0,0,.15);
              transition: background .2s ease;
            }
            .hm-how-nav:hover { background: #fff5f5; }
            .hm-how-nav svg { width: 18px; height: 18px; }
            .hm-how-nav-prev { left: -12px; }
            .hm-how-nav-next { right: -12px; }
            .hm-how-nav.swiper-button-disabled { opacity: .35; cursor: default; }
          }
        `}</style>
      </section>

      {/* ═══ Our Promises — one responsive block ═══ */}
      <section className="hm-prom">
        <div className="hm-prom-inner">
          <h2 className="hm-prom-title">
            Our Promises
            <img src={vectoricon} alt="" className="hm-prom-underline" />
          </h2>

          <div className="hm-prom-grid">
            {promises.map((item, index) => (
              <div
                key={index}
                className="hm-prom-card"
                style={{ backgroundColor: item.bg }}
              >
                <img src={item.icon} alt={`Icon ${index + 1}`} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-prom { background: #f8f8f8; padding: 30px 15px; text-align: center; }
          .hm-prom-title {
            font-size: 28px; font-weight: bold; text-align: center;
            margin-bottom: 30px; font-family: 'Poppins', sans-serif;
            position: relative; display: inline-block;
          }
          .hm-prom-underline {
            position: absolute; bottom: -14px; left: 50%; transform: translateX(-50%);
            width: 120px; height: auto; border-radius: 10px; pointer-events: none;
          }
          .hm-prom-grid {
            padding: 30px 20px; border-radius: 30px;
            display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
          }
          .hm-prom-card {
            border-radius: 20px; padding: 20px 10px; text-align: center; height: 165px;
          }
          .hm-prom-card img { height: 60px; width: 60px; margin-bottom: 10px; }
          .hm-prom-card p { font-weight: 700; font-size: 13px; margin: 0; white-space: pre-line; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-prom { background: #fff; padding: 60px 20px; margin-top: -4%; }
            .hm-prom-inner {
              background: #f8f8f8; padding: 40px; text-align: center;
              border-radius: 40px; max-width: 1200px; margin: 0 auto;
            }
            .hm-prom-title { font-size: 32px; margin-bottom: 40px; }
            .hm-prom-underline { left: 40px; transform: none; width: 170px; }
            .hm-prom-grid {
              padding: 0; border-radius: 0;
              display: flex; justify-content: space-between; flex-wrap: nowrap;
              gap: 20px; margin-top: 50px;
            }
            .hm-prom-card { flex: 1 1 0; min-width: 0; padding: 25px 16px; height: auto; }
            .hm-prom-card img { height: 80px; width: 80px; margin-bottom: 15px; }
            .hm-prom-card p { font-size: 16px; margin: 0 0 1rem; }
          }
        `}</style>
      </section>

      {/* ═══ What Are You Looking For — one responsive block ═══ */}
      <section className="hm-look">
        <div className="hm-look-left">
          <div className="hm-look-copy">
            <h3 className="hm-look-hey">
              <span>Hey!</span>{" "}
              <span role="img" aria-label="raised hand">
                ✋
              </span>
            </h3>
            <h1 className="hm-look-q">
              What are you looking for?
              <img src={vectoricon} alt="" className="hm-look-underline" />
            </h1>
            <p className="hm-look-sub">We are here to help you</p>
          </div>
        </div>

        <div className="hm-look-right">
          <img
            src={lookingImage}
            alt="Looking For Help"
            className="hm-look-img"
          />
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-look {
            background-color: #000;
            padding: 40px 20px; text-align: center; color: #fff;
          }
          .hm-look-hey { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 10px; }
          .hm-look-hey span:first-child { color: red; font-size: 30px; }
          .hm-look-q {
            font-size: 24px; font-weight: 800; margin: 0 0 20px; line-height: 1.3;
            white-space: nowrap; position: relative; display: inline-block; color: #fff;
          }
          .hm-look-underline {
            position: absolute; bottom: -10px; left: 70%; transform: translateX(-50%);
            width: 120px; height: auto; pointer-events: none;
          }
          .hm-look-sub { font-size: 16px; font-weight: 500; margin-top: -8px; margin-bottom: 30px; color: #fff; }
          .hm-look-img {
            width: 100%; height: 270px; border-radius: 20px;
            max-width: 350px; margin: 0 auto; display: block;
          }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-look {
              background-image: none; padding: 60px 40px;
              display: flex; justify-content: space-between; align-items: center;
              flex-wrap: wrap;
            }
            .hm-look-left {
              position: relative; max-width: 600px;
              margin: 0 auto; padding: 60px 30px; border-radius: 20px;
              text-align: center;
            }
            .hm-look-copy { position: relative; z-index: 1; }
            .hm-look-hey { font-size: 35px; white-space: nowrap; }
            .hm-look-hey span:first-child { font-size: 46px; }
            .hm-look-q { font-size: 42px; margin: 0; line-height: 1.2; }
            .hm-look-underline { display: none; }
            .hm-look-sub { font-size: 32px; margin-top: 20px; margin-bottom: 1rem; white-space: nowrap; }
            .hm-look-img { max-width: 400px; height: auto; margin: 30px 0 0; }
          }
        `}</style>
      </section>

      {/* ═══ Testimonials — one responsive block ═══ */}
      <section className="hm-testi">
        <h2 className="hm-testi-title">
          Testimonials
          <img src={vectoricon} alt="" className="hm-testi-underline" />
        </h2>

        <p className="hm-testi-sub">What People Say About Us</p>

        {/* Desktop: 3-up video carousel */}
        <div className="hm-lg-only">
          <div style={{ margin: "0 40px" }}>
            <Carousel
              indicators={true}
              controls={false}
              interval={6000}
              className="testimonial-carousel"
            >
              {[0, 1].map((slide) => (
                <Carousel.Item key={slide}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      padding: "0 5%",
                      gap: "30px",
                      flexWrap: "nowrap",
                      overflowX: "hidden",
                    }}
                  >
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx}>
                        <video
                          src={testimonialVideo}
                          width="644"
                          height="312"
                          controls
                          muted
                          preload="auto"
                          style={{
                            objectFit: "cover",
                            borderRadius: "20px",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Mobile: swiper with live indicator bar */}
        <div className="hm-sm-only">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={10}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{ paddingLeft: "20px", marginBottom: "20px" }}
          >
            {videos.map((vid, index) => (
              <SwiperSlide key={index}>
                <video
                  src={vid}
                  height="220"
                  controls
                  muted
                  style={{
                    borderRadius: "15px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {videos.map((_, index) => (
              <div
                key={index}
                style={{
                  width: activeIndex === index ? "30px" : "20px",
                  height: "4px",
                  backgroundColor: activeIndex === index ? "red" : "#ccc",
                  borderRadius: "5px",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-testi { background: #fff; padding: 40px 20px; text-align: center; }
          .hm-testi-title {
            font-size: 30px; font-weight: bold; font-family: 'Poppins', sans-serif;
            margin-bottom: 10px; position: relative; display: inline-block;
          }
          .hm-testi-underline {
            position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
            width: 130px; height: auto; pointer-events: none;
          }
          .hm-testi-sub { font-weight: 600; font-size: 16px; margin-top: 2px; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-testi { padding: 60px 20px; }
            .hm-testi-title { font-size: 40px; }
            .hm-testi-underline {
              bottom: -14px; left: 35px; transform: none;
              width: 180px; border-radius: 10px;
            }
            .hm-testi-sub { font-size: 20px; margin-top: 20px; margin-bottom: 40px; }
          }

          /* — desktop carousel indicators — */
          .testimonial-carousel .carousel-indicators { bottom: -60px; }
          .testimonial-carousel .carousel-indicators [data-bs-target] {
            width: 30px; height: 4px; border-radius: 5px;
            background-color: #ccc; margin: 0 5px;
          }
          .testimonial-carousel .carousel-indicators .active {
            background-color: red; width: 40px;
          }
        `}</style>
      </section>

      {/* ═══ Experience We Offer — one responsive block ═══ */}
      <section className="hm-exp">
        <h2 className="hm-exp-title">
          Experience <span style={{ color: "#000" }}>We Offer</span>
          <img src={vectoricon} alt="underline" className="hm-exp-underline" />
        </h2>

        {/* Desktop: 3-up card carousel */}
        <div className="hm-lg-only">
          <Carousel
            indicators={true}
            controls={false}
            interval={6000}
            className="experience-carousel"
          >
            {Array.from(
              { length: Math.ceil(testimonials.length / 3) },
              (_, g) => testimonials.slice(g * 3, g * 3 + 3)
            ).map((group, gi) => (
              <Carousel.Item key={gi}>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  {group.map((item, index) => (
                    <div key={index} className="hm-exp-card">
                      <div>
                        <div className="hm-exp-cardhead">
                          <img src={item.avatar} alt={item.name} />
                          <div>
                            <strong>{item.name}</strong>
                            <div className="hm-exp-role">{item.role}</div>
                          </div>
                        </div>
                        <p className="hm-exp-text">“{item.text}”</p>
                      </div>
                      <div className="hm-exp-stars">{"★".repeat(item.rating)}</div>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Mobile: swiper + live indicator bar */}
        <div className="hm-sm-only">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginBottom: "20px",
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="hm-exp-card">
                  <div>
                    <div className="hm-exp-cardhead">
                      <img src={item.avatar} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <div className="hm-exp-role">{item.role}</div>
                      </div>
                    </div>
                    <p className="hm-exp-text">“{item.text}”</p>
                  </div>
                  <div className="hm-exp-stars">{"★".repeat(item.rating)}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                style={{
                  width: activeIndex === index ? "30px" : "20px",
                  height: "4px",
                  backgroundColor: activeIndex === index ? "red" : "#ccc",
                  borderRadius: "5px",
                  transition: "width 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-exp { background-color: #eadcf8; padding: 40px 20px; text-align: center; }
          .hm-exp-title {
            font-size: 26px; font-weight: bold; font-family: 'Poppins', sans-serif;
            text-align: center; margin-bottom: 40px; position: relative;
            display: inline-block; color: #000;
          }
          .hm-exp-underline {
            position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
            width: 140px; height: auto; pointer-events: none;
          }
          .hm-exp-card {
            background-color: #fff; border-radius: 20px; padding: 25px 20px;
            margin: 0 auto; text-align: left;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08); width: 100%;
            display: flex; flex-direction: column; justify-content: space-between;
            height: 100%;
          }
          .hm-exp-cardhead { display: flex; align-items: center; margin-bottom: 15px; }
          .hm-exp-cardhead img {
            width: 50px; height: 50px; border-radius: 50%;
            margin-right: 10px; object-fit: cover;
          }
          .hm-exp-cardhead strong { font-size: 16px; font-weight: bold; color: #000; }
          .hm-exp-role { font-size: 13px; color: #777; }
          .hm-exp-text { font-size: 14px; color: #555; margin-bottom: 20px; line-height: 1.5; }
          .hm-exp-stars { color: #ffc107; font-size: 18px; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-exp {
              border-radius: 30px; padding: 60px 20px; width: 90%;
              max-width: 1300px; margin: 40px auto;
            }
            .hm-exp-title { font-size: 36px; margin-bottom: 60px; }
            .hm-exp-underline { bottom: -14px; width: 180px; }
            .hm-exp-card {
              border-radius: 25px; padding: 35px 30px;
              max-width: 300px; min-width: 300px; height: 470px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.1); margin: 0;
            }
            /* fixed height keeps cards equal (no slider jump); full text shown */
            .hm-exp-cardhead { margin-bottom: 20px; }
            .hm-exp-cardhead img { width: 60px; height: 60px; margin-right: 15px; }
            .hm-exp-cardhead strong { font-size: 18px; }
            .hm-exp-role { font-size: 14px; }
            .hm-exp-text { font-size: 15px; line-height: 1.6; }
          }

          /* — desktop carousel indicators — */
          .experience-carousel .carousel-indicators { bottom: -60px; }
          .experience-carousel .carousel-indicators [data-bs-target] {
            width: 30px; height: 4px; border-radius: 5px;
            background-color: #ccc; margin: 0 5px; transition: all 0.3s;
          }
          .experience-carousel .carousel-indicators .active {
            background-color: red; width: 40px;
          }
        `}</style>
      </section>

      {/* ═══ Inspiration Gallery — one responsive block ═══ */}
      <section className="hm-gal">
        <h2 className="hm-gal-title">
          INSPIRATION FROM OUR GALLERY
          <img src={vectoricon} alt="" className="hm-gal-underline" />
        </h2>

        <div className="hm-gal-grid">
          <img src={gallery1} alt="Gallery 1" className="hm-gal-1" />
          <img src={gallery2} alt="Gallery 2" className="hm-gal-2" />
          {/* these two exist only in the desktop layout */}
          <img src={gallery4} alt="Gallery 4" className="hm-gal-4 hm-lg-only" />
          <img src={gallery3} alt="Gallery 3" className="hm-gal-3 hm-lg-only" />

          {/* 3000+ Happy Homes overlay card */}
          <div className="hm-gal-cta">
            <img src={gallery5} alt="Gallery" />
            <div className="hm-gal-overlay">
              <div className="hm-gal-orow">
                <div className="hm-gal-count">
                  <h3>3000+</h3>
                  <p>Happy Homes</p>
                </div>
                <a href="/projects">See All</a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-gal { padding: 40px 15px; background-color: #fff; text-align: center; }
          .hm-gal-title {
            font-size: 26px; font-weight: bold; font-family: 'Poppins', sans-serif;
            margin-bottom: 30px; position: relative; display: inline-block;
            text-align: left;
          }
          .hm-gal-underline {
            position: absolute; bottom: -10px; left: 15%; transform: translateX(-50%);
            width: 120px; height: auto; pointer-events: none;
          }
          .hm-gal-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 15px;
            max-width: 500px; margin: 0 auto;
          }
          .hm-gal-1 { grid-row: 1/3; width: 100%; height: 270px; object-fit: cover; border-radius: 20px; }
          .hm-gal-2 { width: 171px; height: 150px; object-fit: cover; border-radius: 20px; }
          .hm-gal-cta {
            position: relative; border-radius: 20px; overflow: hidden;
            width: 100%; height: 114px;
          }
          .hm-gal-cta > img { width: 171px; height: 105px; border-radius: 10px; object-fit: cover; }
          .hm-gal-overlay {
            position: absolute; top: 0; left: 0; right: 0; bottom: 0;
            padding: 15px 20px; color: #fff;
          }
          .hm-gal-orow {
            display: flex; justify-content: space-between; align-items: center;
            margin-top: 39%;
          }
          .hm-gal-count h3 { font-size: 14px; font-weight: 700; margin: 0; text-align: left; }
          .hm-gal-count p { font-size: 10px; margin: 0; white-space: nowrap; text-align: left; }
          .hm-gal-overlay a {
            font-size: 13px; font-weight: 600; white-space: nowrap;
            color: #fff; text-decoration: underline;
          }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-gal {
              padding: 60px 20px; max-width: 1350px; margin: 40px auto;
              border-radius: 30px;
            }
            .hm-gal-title { font-size: 32px; margin-bottom: 60px; }
            .hm-gal-underline { bottom: -14px; left: 50%; width: 130px; border-radius: 10px; }
            .hm-gal-grid {
              grid-template-columns: 1.5fr 1fr 1fr; grid-template-rows: 1fr 1fr;
              gap: 20px; padding: 0 20px; max-width: 1200px;
            }
            .hm-gal-1 { grid-row: 1 / span 2; width: 400px; height: 658px; border-radius: 25px; }
            .hm-gal-2 { width: 435px; height: 220px; border-radius: 25px; }
            .hm-gal-4 { width: 300px; height: 414px; object-fit: cover; border-radius: 25px; }
            .hm-gal-3 { width: 431px; height: 414px; object-fit: cover; border-radius: 25px; margin-top: -45%; }
            .hm-gal-cta { border-radius: 25px; height: 220px; }
            .hm-gal-cta > img { width: 100%; height: 100%; border-radius: 25px; }
            .hm-gal-overlay { padding: 20px 25px; }
            .hm-gal-orow { margin-top: 40%; }
            .hm-gal-count h3 { font-size: 42px; }
            .hm-gal-count p { font-size: 18px; }
            .hm-gal-overlay a { font-size: 18px; font-weight: 500; }
          }
        `}</style>
      </section>

      {/* ═══ Your Home, Our Canvas (bottom call-back) — one responsive block ═══ */}
      <section className="hm-yh">
        <div className="hm-yh-inner">
          {/* Copy */}
          <div className="hm-yh-copy">
            <h1>
              Your Home, Our <br /> Canvas
            </h1>
            <p>
              Please Enter Your Name And WhatsApp Phone Number To Receive A
              Call Back From Us
            </p>
          </div>

          {/* Frosted-glass form */}
          <div className="hm-yh-form">
            <h3>Get a call back</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!cbBusy) handleCallback2();
              }}
            >
              <input
                type="text"
                placeholder="Enter Name"
                className="white-placeholder"
                value={cb2Name}
                onChange={(e) => setCb2Name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter WhatsApp Phone Number"
                className="white-placeholder"
                inputMode="numeric"
                maxLength={10}
                value={cb2Phone}
                onChange={(e) => setCb2Phone(e.target.value.replace(/\D/g, ""))}
              />
              <button type="submit">{cbBusy ? "SUBMITTING..." : "SUBMIT"}</button>
            </form>
          </div>
        </div>

        <style>{`
          /* — mobile (base) — */
          .hm-yh { padding: 20px; }
          .hm-yh-inner {
            background-image: url(${backgroundhome});
            background-size: cover; background-position: center;
            border-radius: 25px; overflow: hidden;
            padding: 60px 20px 40px; min-height: 90vh;
            display: flex; flex-direction: column; justify-content: space-between;
            color: #fff; text-align: center;
          }
          .hm-yh-copy h1 {
            font-size: 36px; font-weight: 600; text-align: left;
            font-family: 'Poppins', sans-serif; line-height: 1.3;
            margin-bottom: 16px;
          }
          .hm-yh-copy p {
            font-size: 15px; line-height: 1.6; text-align: left;
            max-width: 320px; margin: 0 auto 30px;
          }
          .hm-yh-form {
            background-color: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(8px);
            border-radius: 20px; padding: 30px 20px;
            max-width: 381px; margin: 0 auto;
          }
          .hm-yh-form h3 { font-size: 20px; font-weight: 600; margin-bottom: 20px; text-align: left; }
          .hm-yh-form form { display: flex; flex-direction: column; gap: 14px; }
          .hm-yh-form input {
            padding: 14px 16px; border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.5);
            background: transparent; color: #fff; font-size: 12px; outline: none;
          }
          .hm-yh-form button {
            padding: 12px; border-radius: 50px; border: none;
            background: linear-gradient(to right, #ffffff, #e6e6e6);
            color: #000; font-weight: 600; font-size: 13px;
            margin-top: 10px; cursor: pointer;
          }
          .white-placeholder::placeholder { color: #ffffff; opacity: 1; }

          /* — desktop — */
          @media (min-width: 992px) {
            .hm-yh { padding: 0; }
            .hm-yh-inner {
              background-image: url(${backgroundImage});
              border-radius: 0; padding: 60px 100px; min-height: 0;
              margin-top: -16%;
              flex-direction: row; justify-content: space-between;
              align-items: center; flex-wrap: wrap; text-align: left;
            }
            .hm-yh-copy { max-width: 500px; }
            .hm-yh-copy h1 { font-size: 48px; font-weight: bold; line-height: 1.2; margin-bottom: 20px; }
            .hm-yh-copy h1 br { display: none; }
            .hm-yh-copy p { font-size: 16px; font-weight: 400; max-width: none; margin: 0 0 1rem; }
            .hm-yh-form {
              background-color: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              border-radius: 25px; padding: 30px;
              max-width: 360px; width: 100%; margin: 0;
            }
            .hm-yh-form form { gap: 20px; }
            .hm-yh-form input {
              padding: 12px 16px;
              border: 1px solid rgba(255,255,255,0.4); font-size: 15px;
            }
            .hm-yh-form button {
              border-radius: 40px;
              background: linear-gradient(to right, #fff, #f0f0f0);
              font-weight: bold; font-size: 16px; margin-top: 0;
            }
          }
        `}</style>
      </section>

      {/* Call-back confirmation popup */}
      {cbPopup && (
        <div
          onClick={() => setCbPopup(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 3000,
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "18px", padding: "34px 28px",
              maxWidth: "360px", width: "100%", textAlign: "center",
              boxShadow: "0 12px 44px rgba(0,0,0,0.28)",
            }}
          >
            <div style={{ marginBottom: "12px", lineHeight: 0 }}>
              {cbPopup.ok ? (
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#E6F7EE" />
                  <path
                    d="M7 12.5l3 3 7-7"
                    stroke="#1FA463"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span style={{ fontSize: "46px" }}>⚠️</span>
              )}
            </div>
            <p style={{ fontSize: "16px", color: "#222", margin: "0 0 22px", fontWeight: 500, lineHeight: 1.5 }}>
              {cbPopup.message}
            </p>
            <button
              onClick={() => setCbPopup(null)}
              style={{
                background: "#e60000", color: "#fff", border: "none", borderRadius: "999px",
                padding: "10px 34px", fontWeight: 600, fontSize: "15px", cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <br />
    </div>
  );
};

export default Home;
