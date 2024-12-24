import http from "http";
import connectDb from "./db/connectDb.js";
import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server running on http://localhost:${PORT}`);
});
