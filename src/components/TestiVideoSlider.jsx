import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// One testimonial video: play/pause ONLY (no fullscreen/zoom), starts WITH audio,
// and auto-pauses when scrolled out of view (no phantom off-screen audio).
function OneVideo({ src }) {
  const ref = useRef(null);
  const wrapRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && ref.current && !ref.current.paused) ref.current.pause();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="tv-item" ref={wrapRef} onClick={toggle}>
      <video
        ref={ref}
        src={src}
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="tv-video"
      />
      {!playing && (
        <span className="tv-play" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </span>
      )}
    </div>
  );
}

// Testimonials slider: shows 3 (desktop) / 1 (mobile), moves ONE video per arrow,
// loops (last → first). Arrows sit OUTSIDE the videos; dots below.
export default function TestiVideoSlider({ videos = [] }) {
  const swiperRef = useRef(null);
  return (
    <div className="tv-wrap">
      <div className="tv-row">
        <button
          type="button"
          className="tv-arrow tv-prev"
          aria-label="Previous"
          onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
        >
          <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
        </button>

        <Swiper
          modules={[Pagination]}
          onSwiper={(s) => (swiperRef.current = s)}
          pagination={{ clickable: true, el: ".tv-dots" }}
          loop={videos.length > 3}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{ 992: { slidesPerView: 3, spaceBetween: 24 } }}
          className="tv-swiper"
        >
          {videos.map((v, i) => (
            <SwiperSlide key={i}>
              <OneVideo src={v} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="tv-arrow tv-next"
          aria-label="Next"
          onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        >
          <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* pagination dots (below) */}
      <div className="tv-dots" />

      <style>{`
        .tv-wrap { max-width: 1250px; margin: 0 auto; padding: 6px 0 4px; }
        .tv-row { position: relative; padding: 0 44px; }
        .tv-item { position: relative; cursor: pointer; }
        .tv-video {
          width: 100%; height: 340px; object-fit: cover; border-radius: 16px;
          display: block; background: #000;
        }
        .tv-play {
          position: absolute; inset: 0; margin: auto; width: 60px; height: 60px;
          border-radius: 50%; background: rgba(0,0,0,.55);
          display: flex; align-items: center; justify-content: center; pointer-events: none;
        }
        .tv-play svg { width: 24px; height: 24px; fill: #fff; margin-left: 3px; }
        .tv-arrow {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 40px; height: 40px; border-radius: 50%; border: none; padding: 0;
          background: #fff; box-shadow: 0 2px 10px rgba(0,0,0,.18); color: #B45835;
          display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 5;
        }
        .tv-arrow svg { width: 20px; height: 20px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        .tv-arrow:active { transform: translateY(-50%) scale(.94); }
        .tv-prev { left: 0; }
        .tv-next { right: 0; }
        .tv-dots { display: flex; justify-content: center; gap: 6px; margin-top: 20px; }
        .tv-dots .swiper-pagination-bullet {
          width: 20px; height: 4px; border-radius: 5px; background: #ccc;
          opacity: 1; margin: 0; transition: all .3s; cursor: pointer;
        }
        .tv-dots .swiper-pagination-bullet-active { width: 34px; background: red; }
        @media (min-width: 992px) {
          .tv-row { padding: 0 60px; }
          .tv-video { height: 560px; border-radius: 20px; }
        }
      `}</style>
    </div>
  );
}
