import React from "react";
import "./loader.css";

// Matches the Android app loader (PageLoader/ResponseLoader): the Homjee icon
// gently bouncing up and down over a translucent overlay, instead of a CSS
// spinner — so web and app feel like one product. Icon lives in /public.
const GlobalLoader = () => {
  return (
    <div className="global-loader-overlay">
      <div className="global-loader-bounce">
        <img src="/icon.png" alt="Loading" className="global-loader-icon" />
      </div>
    </div>
  );
};

export default GlobalLoader;
