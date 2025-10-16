import express from "express";
import morgan from "morgan";
import meRoute from "./routes/me.routes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/me", meRoute);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cat Fact Profile API" });
});

// Error handling
app.use(errorHandler);

export default app;
