const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API backend en ligne");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/repos", require("./routes/repositoryRoutes"));
app.use("/api/favorites", require("./routes/favoriteRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});