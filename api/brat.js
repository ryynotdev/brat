export default async function handler(req, res) {
  const { text } = req.query;

  // Pecah teks jadi array kata
  const words = (text || "brat").split(" ");

  // Bikin baris baru per kata
  const lines = words.map((word, i) => {
    return `<tspan x="50%" dy="${i === 0 ? "0" : "1.2em"}">${word}</tspan>`;
  }).join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
      <!-- Background putih -->
      <rect width="512" height="512" fill="white"/>
      
      <!-- Teks di tengah -->
      <text 
        x="50%" 
        y="50%" 
        font-size="80" 
        text-anchor="middle" 
        fill="black" 
        font-family="Arial, sans-serif" 
        font-weight="bold"
        dominant-baseline="middle">
        ${lines}
      </text>
    </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
}
