import express from "express";
import cors from "cors";
import "./db"
import routes from "./routes";
import { PORT } from "./config";

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes)

app.listen(PORT, () => {
    console.log("Server is running on port 4000");
});
