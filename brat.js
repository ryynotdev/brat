import { createCanvas } from "canvas";

export default async function handler(req, res) {
  const { text, apikey } = req.query;

  // 🔑 cek apikey
  const validKeys = process.env.API_KEYS?.split(",") || [];
  if (!validKeys.includes(apikey)) {
    return res.status(403).json({ error: "API Key tidak valid" });
  }

  if (!text) {
    return res.status(400).json({ error: "Parameter 'text' wajib diisi" });
  }

  try {
    const canvas = createCanvas(500, 200);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 30px Sans";
    ctx.fillText(text, 50, 100);

    res.setHeader("Content-Type", "image/png");
    canvas.pngStream().pipe(res);
  } catch (err) {
    res.status(500).json({ error: "Gagal generate gambar", detail: err.message });
  }
}
