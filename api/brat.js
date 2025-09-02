import { createCanvas, loadImage } from "canvas";

export default async function handler(req, res) {
  try {
    const { text = "brat 😎" } = req.query;

    // buat canvas
    const canvas = createCanvas(800, 400);
    const ctx = canvas.getContext("2d");

    // background warna
    ctx.fillStyle = "#fce7f3"; // pink muda
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // teks
    ctx.fillStyle = "#111"; // warna teks
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // kirim hasil
    res.setHeader("Content-Type", "image/png");
    res.send(canvas.toBuffer("image/png"));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
