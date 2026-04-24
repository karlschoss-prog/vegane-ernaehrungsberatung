import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const FONTS = join(__dirname, "fonts");

GlobalFonts.registerFromPath(join(FONTS, "CormorantGaramond-Regular.woff2"), "CormorantRegular");

const SAGE      = "#6BA46E";
const SAGE_DARK = "#2E5C32";
const CREAM     = "#FAF3E3";
const CHARCOAL  = "#1A2E1C";

// ─── Option A: Blatt-C (Blatt dessen Silhouette ein „C" ergibt) ─
{
  const S = 200;
  const c = createCanvas(S, S);
  const ctx = c.getContext("2d");

  // Cream-Hintergrund
  ctx.fillStyle = CREAM;
  ctx.beginPath();
  ctx.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2);
  ctx.fill();

  const cx = 108, cy = 100;

  // Blatt-C: breiter, eleganter, symmetrischer
  ctx.fillStyle = SAGE_DARK;
  ctx.beginPath();
  // Obere Spitze — schlanker und spitzer
  ctx.moveTo(cx + 18, cy - 78);
  // Äußere Kurve (Blattrücken)
  ctx.bezierCurveTo(cx - 10, cy - 78, cx - 72, cy - 44, cx - 72, cy);
  ctx.bezierCurveTo(cx - 72, cy + 44, cx - 10, cy + 78, cx + 18, cy + 78);
  // Untere Arm-Kurve (C-Öffnung, geschwungen nach innen)
  ctx.bezierCurveTo(cx + 38, cy + 68, cx + 44, cy + 50, cx + 22, cy + 36);
  // Innere Kurve aufwärts
  ctx.bezierCurveTo(cx - 8,  cy + 24, cx - 28, cy + 14, cx - 28, cy);
  ctx.bezierCurveTo(cx - 28, cy - 14, cx - 8,  cy - 24, cx + 22, cy - 36);
  // Oberer Arm zurück zur Spitze
  ctx.bezierCurveTo(cx + 44, cy - 50, cx + 38, cy - 68, cx + 18, cy - 78);
  ctx.closePath();
  ctx.fill();

  // Mittelrippe
  ctx.strokeStyle = CREAM;
  ctx.lineWidth = 2.2;
  ctx.globalAlpha = 0.4;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(cx + 16, cy - 74);
  ctx.bezierCurveTo(cx - 52, cy - 28, cx - 52, cy + 28, cx + 16, cy + 74);
  ctx.stroke();

  // Seitliche Adern — natürlicher geschwungen
  ctx.lineWidth = 1.4;
  ctx.globalAlpha = 0.22;
  [
    { from: [cx - 32, cy - 50], to: [cx + 20, cy - 42] },
    { from: [cx - 52, cy - 18], to: [cx + 18, cy - 10] },
    { from: [cx - 52, cy + 18], to: [cx + 18, cy + 10] },
    { from: [cx - 32, cy + 50], to: [cx + 20, cy + 42] },
  ].forEach(({ from: [x1, y1], to: [x2, y2] }) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo((x1 + x2) / 2, (y1 + y2) / 2 - 8, x2, y2);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  writeFileSync(join(ROOT, "public/favicon-preview-C.png"), c.toBuffer("image/png"));
  console.log("Option A (Blatt-C) gespeichert");
}

// ─── Option B: Blatt in Sage-Grün auf Cream ───────────────────
{
  const S = 200;
  const c = createCanvas(S, S);
  const ctx = c.getContext("2d");

  // Runder Cream-Hintergrund
  ctx.fillStyle = CHARCOAL;
  ctx.beginPath();
  ctx.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2);
  ctx.fill();

  // Blatt-Form (stilisiert)
  ctx.fillStyle = SAGE;
  ctx.save();
  ctx.translate(S / 2, S / 2);

  // Blatt: zwei Bézierkurven
  ctx.beginPath();
  ctx.moveTo(0, -68);
  ctx.bezierCurveTo(52, -40, 62, 20, 0, 68);
  ctx.bezierCurveTo(-62, 20, -52, -40, 0, -68);
  ctx.closePath();
  ctx.fill();

  // Mittelrippe
  ctx.strokeStyle = CHARCOAL;
  ctx.lineWidth = 3.5;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.moveTo(0, -60);
  ctx.quadraticCurveTo(8, 0, 0, 62);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Kleine Seitenrippen
  ctx.strokeStyle = CHARCOAL;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.2;
  [[-28, -20], [-38, 8], [-30, 36]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(0, y - 8);
    ctx.quadraticCurveTo(x / 2, y, x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, y - 8);
    ctx.quadraticCurveTo(-x / 2, y, -x, y);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;
  ctx.restore();

  writeFileSync(join(ROOT, "public/favicon-preview-leaf.png"), c.toBuffer("image/png"));
  console.log("Option B (Blatt) gespeichert");
}
