import { createCanvas } from "canvas";

export default async function handler(req, res) {
  const { text } = req.query;

  const canvas = createCanvas(512, 512);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#ff69b4"; // warna pink brat
  ctx.fillRect(0, 0, 512, 512);

  // Teks
  ctx.fillStyle = "#fff";
  ctx.font = "bold 30px Arial";
  ctx.fillText(text || "Brat 💗", 50, 100);

  // Return image
  res.setHeader("Content-Type", "image/png");
  res.send(canvas.toBuffer("image/png"));
}
