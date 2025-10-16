import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 5000);

    // Fetch random cat fact
    const response = await fetch("https://catfact.ninja/fact", {
      signal: controller.signal,
    });

    clearTimeout(timeout); // clear timeout if request completes

    if (!response.ok) throw new Error("Failed to fetch cat fact");

    const data = await response.json();

    // Successful JSON response
    return res.status(200).json({
      status: "success",
      user: {
        email: "abdulkadirshehu53.sa@gmail.com",
        name: "Shehu Abdulkadir",
        stack: "Node.js, Express.js",
      },
      timestamp: new Date().toISOString(),
      fact: data.fact,
    });
  } catch (error) {
    // Pass error to global handler
    next(error);
  }
});

export default router;
