const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's dynamic port

app.use(cors());
app.use(bodyParser.json());

app.post("/unlock", (req, res) => {
    console.log("Fingerprint Data Received:", req.body);
    res.json({ message: "Unlock signal received by Node.js server!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
