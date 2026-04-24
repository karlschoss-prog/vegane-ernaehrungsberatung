import { createCanvas, loadImage, GlobalFonts } from "@napi-rs/canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const FONTS = join(__dirname, "fonts");

// Register website fonts
GlobalFonts.registerFromPath(join(FONTS, "CormorantGaramond-Light.woff2"),  "CormorantLight");
GlobalFonts.registerFromPath(join(FONTS, "CormorantGaramond-Regular.woff2"), "CormorantRegular");
GlobalFonts.registerFromPath(join(FONTS, "NunitoSans-Regular.woff2"),        "NunitoSans");

const W = 1200;
const H = 630;
const SPLIT = 640; // where photo begins

const CREAM     = "#FAF3E3";
const CHARCOAL  = "#1A2E1C";
const SAGE      = "#6BA46E";
const SAGE_DARK = "#2E5C32";
const SOFT_GRAY = "#5C6E5E";

const canvas = createCanvas(W, H);
const ctx    = canvas.getContext("2d");

// ─── Background ───────────────────────────────────────────────
ctx.fillStyle = CREAM;
ctx.fillRect(0, 0, W, H);

// ─── Photo (right panel, hard edge) ───────────────────────────
const photo = await loadImage(join(ROOT, "public/christin.jpg"));

ctx.save();
ctx.beginPath();
ctx.rect(SPLIT, 0, W - SPLIT, H);
ctx.clip();

// Center-crop photo into right panel
const pW = W - SPLIT;
const pAspect = photo.width / photo.height;
const aAspect = pW / H;
let sx, sy, sw, sh;
if (pAspect > aAspect) {
  sh = photo.height;
  sw = sh * aAspect;
  sx = (photo.width - sw) * 0.35; // shift slightly left to favor torso/face
  sy = 0;
} else {
  sw = photo.width;
  sh = sw / aAspect;
  sx = 0;
  sy = (photo.height - sh) * 0.1;
}
ctx.drawImage(photo, sx, sy, sw, sh, SPLIT, 0, pW, H);

// Subtle dark vignette at right & bottom edges for depth
const vigRight = ctx.createLinearGradient(W - 80, 0, W, 0);
vigRight.addColorStop(0, "rgba(0,0,0,0)");
vigRight.addColorStop(1, "rgba(0,0,0,0.18)");
ctx.fillStyle = vigRight;
ctx.fillRect(W - 80, 0, 80, H);

ctx.restore();

// Thin sage separator line (the only decoration)
ctx.strokeStyle = SAGE;
ctx.lineWidth = 1.5;
ctx.beginPath();
ctx.moveTo(SPLIT, 48);
ctx.lineTo(SPLIT, H - 48);
ctx.stroke();

// ─── Left text block — perfectly vertically centered ──────────
const PAD  = 72;
const BLOCK_H = 300; // approximate height of text block
const BASE_Y  = (H - BLOCK_H) / 2; // top of centered block

// Label — small caps style via uppercase + spacing
ctx.fillStyle = SAGE_DARK;
ctx.font = `400 12px NunitoSans, Arial, sans-serif`;
const labelWords = "ZERTIFIZIERTE VEGANE ERNÄHRUNGSBERATERIN";
// manual letter spacing by drawing char-by-char
let lx = PAD;
const TRACKING = 2.8;
for (const ch of labelWords) {
  ctx.fillText(ch, lx, BASE_Y);
  lx += ctx.measureText(ch).width + TRACKING;
}

// Short sage accent line
ctx.strokeStyle = SAGE;
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(PAD, BASE_Y + 16);
ctx.lineTo(PAD + 52, BASE_Y + 16);
ctx.stroke();

// Name — large, light-weight serif
ctx.fillStyle = CHARCOAL;
ctx.font = `300 76px CormorantLight, Georgia, serif`;
ctx.fillText("Christin Schoß", PAD, BASE_Y + 106);

// Tagline — two lines, generous spacing
ctx.fillStyle = SOFT_GRAY;
ctx.font = `300 26px CormorantLight, Georgia, serif`;
ctx.fillText("Sicher vegan durch Schwangerschaft,", PAD, BASE_Y + 162);
ctx.fillText("Stillzeit & Beikost.", PAD, BASE_Y + 198);

// ─── Domain + Instagram — anchored to bottom left ─────────────
// Domain dot
ctx.fillStyle = SAGE;
ctx.beginPath();
ctx.arc(PAD + 5, H - 52, 4, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = CHARCOAL;
ctx.font = `400 15px NunitoSans, Arial, sans-serif`;
ctx.fillText("christinschoss.com", PAD + 18, H - 47);

// Separator dot
const domainWidth = ctx.measureText("christinschoss.com").width;
const sepX = PAD + 18 + domainWidth + 16;
ctx.fillStyle = SOFT_GRAY;
ctx.globalAlpha = 0.4;
ctx.beginPath();
ctx.arc(sepX, H - 52, 2, 0, Math.PI * 2);
ctx.fill();
ctx.globalAlpha = 1;

// Instagram handle
ctx.fillStyle = SOFT_GRAY;
ctx.font = `400 15px NunitoSans, Arial, sans-serif`;
ctx.fillText("@tinboom.official", sepX + 12, H - 47);

// ─── Save ─────────────────────────────────────────────────────
const out = join(ROOT, "public/og-image.png");
writeFileSync(out, canvas.toBuffer("image/png"));
console.log(`og-image.png gespeichert: ${out}`);
