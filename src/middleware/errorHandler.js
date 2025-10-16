export default function errorHandler(err, req, res) {
  console.error("❌ Error:", err.message);

  res.status(500).json({
    status: "error",
    message: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  });
}
