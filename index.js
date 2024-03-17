const express = require("express");
const { PythonShell } = require("python-shell");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware setup
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

// Root route
app.get("/", (req, res) => {
  res.render("spell-correct.ejs");
});

// Spell correction route

app.post("/correct", async (req, res) => {
  const inputText = req.body.text;

  PythonShell.run(
    "spell_correction.py",
    { args: [inputText] },
    function (err, result) {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to correct spelling" });
      } else {
        console.log("Corrected text:", result[0]);
        res.json({ correctedText: result[0] });
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
