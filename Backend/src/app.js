import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: "process.env.CORS_ORIGIN",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes

import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import restaurantRouter from "./routes/restaurant.routes.js";

// routes

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/restaurant", restaurantRouter);
export { app };
