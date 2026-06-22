import React from "react";
import { Modal } from "react-bootstrap";

// Success states get a green tick icon + title only (no body, no Done
// button) — the tick IS the dismiss action. Failure states keep the
// title + explanation body + Done button so the customer sees what
// went wrong and can acknowledge it. The classifier matches on the
// title because the call sites already pass human-readable labels
// like "Booking confirmed" / "Payment successful" / "Payment Failed".
function isSuccessTitle(title) {
  const t = String(title || "").toLowerCase();
  return (
    t.includes("confirmed") ||
    t.includes("successful") ||
    t === "success"
  );
}

function PopupModal({ show, message, onSave }) {
  const success = isSuccessTitle(message?.promptTile);

  return (
    <div>
      <Modal show={show} centered backdrop="static">
        <div className="py-4 px-3" style={{ textAlign: "center" }}>
          {success ? (
            <>
              <button
                type="button"
                onClick={onSave}
                aria-label="Close"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#22c55e",
                  color: "#fff",
                  border: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  lineHeight: 1,
                  cursor: "pointer",
                  marginBottom: 12,
                  boxShadow: "0 2px 8px rgba(34,197,94,0.35)",
                }}
              >
                ✓
              </button>
              <h6 className="mt-2 mb-0" style={{ fontWeight: 600 }}>
                {message?.promptTile || "Booking Confirmed"}
              </h6>
            </>
          ) : (
            <>
              <h6 className="my-2">{message?.promptTile}</h6>
              {message?.promptBody && (
                <div className="mt-3">{message.promptBody}</div>
              )}
              <button
                className="mt-3"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "1px solid red",
                  borderRadius: "10px",
                  fontSize: "12px",
                  padding: "6px 14px",
                }}
                variant="danger"
                onClick={onSave}
              >
                Done
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default PopupModal;
