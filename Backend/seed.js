const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Repository = require("./models/Repository");

dotenv.config();
console.log("URI lue :", process.env.MONGODB_URI); // debug temporaire

const repos = [
  {
    name: "react",
    owner: "facebook",
    description: "A JavaScript library for building user interfaces",
    language: "JavaScript",
    stars: 218000,
    forks: 45000,
  },
  {
    name: "vue",
    owner: "vuejs",
    description: "Progressive JavaScript Framework",
    language: "JavaScript",
    stars: 206000,
    forks: 33000,
  },
  {
    name: "nextjs",
    owner: "vercel",
    description: "The React Framework for the Web",
    language: "JavaScript",
    stars: 120000,
    forks: 26000,
  },
  {
    name: "django",
    owner: "django",
    description: "The Web framework for perfectionists with deadlines",
    language: "Python",
    stars: 77000,
    forks: 31000,
  },
  {
    name: "flask",
    owner: "pallets",
    description: "The Python micro framework for building web applications",
    language: "Python",
    stars: 66000,
    forks: 16000,
  },
  {
    name: "tailwindcss",
    owner: "tailwindlabs",
    description: "A utility-first CSS framework",
    language: "CSS",
    stars: 78000,
    forks: 4000,
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connecté avec succès");

    await Repository.deleteMany({});
    console.log("Anciens repos supprimés");

    await Repository.insertMany(repos);
    console.log("6 repos insérés avec succès");

    mongoose.connection.close();
  } catch (error) {
    console.error("Erreur lors du seed :", error.message);
    process.exit(1);
  }
};

seedDB();