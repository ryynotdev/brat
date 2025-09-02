export default async function handler(req, res) {
  const { text } = req.query;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <rect width="512" height="512" fill="white"/>
      <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="black" dy=".3em" font-family="Arial, sans-serif">
        ${text || "Brat 💗"}
      </text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
}
