const express = require("express");
const router = express.Router();
const Favorite = require("../models/Favorite");
const protect = require("../middleware/authMiddleware");

// POST /api/favorites → ajouter un favori
router.post("/", protect, async (req, res) => {
  try {
    const { repositoryId } = req.body;
    const favorite = await Favorite.create({
      userId: req.user.id,
      repositoryId,
    });
    res.status(201).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/favorites → récupérer les favoris de l'utilisateur connecté
router.get("/", protect, async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.id }).populate("repositoryId");
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/favorites/:id → supprimer un favori
router.delete("/:id", protect, async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);
    if (!favorite) {
      return res.status(404).json({ message: "Favori introuvable" });
    }
    if (favorite.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non autorisé à supprimer ce favori" });
    }
    await favorite.deleteOne();
    res.json({ message: "Favori supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;