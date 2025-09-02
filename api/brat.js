export default function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "⚠️ Parameter 'text' wajib diisi, contoh: /api/brat?text=halo"
    });
  }

  res.status(200).json({
    success: true,
    brat: `🩷 Brat says: ${text}`
  });
}
