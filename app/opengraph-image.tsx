import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "IEEE CSDE 2027 at Fiji Marriott Resort Momi Bay";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#EAF3FF",
          display: "flex",
          flexDirection: "column",
          color: "#172554",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "28px 40px",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3157D5",
          }}
        >
          <span>IEEE CSDE</span>
          <span>2027 · FIJI</span>
        </div>
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", padding: 56 }}>
          <div style={{ fontSize: 72, lineHeight: 0.95, letterSpacing: -3, fontWeight: 800 }}>IEEE CSDE 2027</div>
          <div style={{ marginTop: 18, fontSize: 32, color: "#172554", maxWidth: 920, fontWeight: 600, lineHeight: 1.2 }}>
            Intelligent, Secure, and Sustainable Computing for a Connected World
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            padding: "0 40px 36px",
          }}
        >
          {["VENUE / FIJI MARRIOTT", "FORMAT / PHYSICAL + VIRTUAL", "PUBLICATION / IEEE XPLORE"].map((item) => (
            <div
              key={item}
              style={{
                flex: 1,
                background: "#FFFFFF",
                padding: "18px 24px",
                fontSize: 16,
                letterSpacing: 1,
                color: "#3157D5",
                borderRadius: 16,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
