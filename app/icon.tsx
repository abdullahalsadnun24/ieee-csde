import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#3157D5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 1,
          borderRadius: 14,
        }}
      >
        CS
      </div>
    ),
    size,
  );
}
