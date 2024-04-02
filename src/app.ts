import express from "express";
import router from "./app/routes";
const app = express();

app.use("/api/v1/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
