export default function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({
      success: false,
      message: "Masukkan parameter ?text= di URL",
    });
  }

  res.status(200).json({
    success: true,
    message: `Teks kamu: ${text}`,
  });
}
