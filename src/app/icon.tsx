import { ImageResponse } from "next/og";

/** 96x96: Google recomienda >48px para favicon en SERP; los navegadores escalan bien */
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#18181b",
          color: "#fafafa",
          fontSize: 48,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          borderRadius: 12,
        }}
      >
        M
      </div>
    ),
    { ...size }
  );
}
