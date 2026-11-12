// Central place for the Google Maps key (client's own Cloud project,
// created 22 Jul 2026 — trial upgrades due before 21 Oct 2026).
//
// The key also still appears hardcoded in the older page files — a value swap
// was safer there than editing 5,000-line files. NEW code should import from
// here instead of pasting the literal, so the next key rotation is one line:
//   import { GOOGLE_MAPS_KEY } from "../config";
//
// Note: a frontend Maps key is public by nature (it ships in the JS bundle).
// What protects the client's bill is the key's website + API restrictions in
// Google Cloud Console, not secrecy.
export const GOOGLE_MAPS_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_KEY ||
  "AIzaSyCo2SFPxHrv9Hf9Jroo6X_eb7YgnMVUwJI";
