import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Joseph Emmi";
  const subtitle =
    searchParams.get("subtitle") ?? "Product Builder. Designer. Founder.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#16130f",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(217,119,6,0.35), transparent 55%), radial-gradient(circle at 85% 85%, rgba(56,189,248,0.18), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#f59e0b",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          josephemmi.com
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              color: "#f7f4ee",
              fontWeight: 500,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#a8a29e" }}>
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
