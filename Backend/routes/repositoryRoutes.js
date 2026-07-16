const express = require("express");
const router = express.Router();
const Repository = require("../models/Repository");

// GET /api/repos → récupérer tous les repos
router.get("/", async (req, res) => {
  try {
    const repos = await Repository.find();
    res.json(repos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/repos/:id → récupérer un seul repo par son id
router.get("/:id", async (req, res) => {
  try {
    const repo = await Repository.findById(req.params.id);
    if (!repo) {
      return res.status(404).json({ message: "Repo introuvable" });
    }
    res.json(repo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;