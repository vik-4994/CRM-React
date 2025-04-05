import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/clients.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

