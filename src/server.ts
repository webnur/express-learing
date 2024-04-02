import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
const port = 3000;
main();

let server: Server;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tests");
    console.log("database connected successfully");
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(`fail to connect database ${err}`);
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
