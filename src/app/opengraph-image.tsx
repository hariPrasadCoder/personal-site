import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Hari Prasad Renganathan — Founder, AI Engineer, Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imageBuffer = readFileSync(
    join(process.cwd(), "public/images/profile/my_profile.png")
  );
  const imageBase64 = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          backgroundColor: "#f5f5f3",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#999",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            hariprasad.xyz
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: "700",
              color: "#1a1a1a",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Hi, I&apos;m Hari.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#555",
              lineHeight: 1.5,
              marginBottom: "36px",
            }}
          >
            Founder at Antler London · AI Engineer · Builder
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {["Columbia", "YC Engineer", "Take-Two"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  backgroundColor: "#ebebea",
                  borderRadius: "999px",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right — profile photo */}
        <div
          style={{
            width: "420px",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
          }}
        >
          <img
            src={imageBase64}
            style={{
              width: "420px",
              height: "630px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
