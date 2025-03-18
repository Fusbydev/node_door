const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios"); // For sending HTTP requests

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const ESP8266_IP = "http://192.168.172.222"; // Change this to your ESP8266's IP address

app.post("/unlock", async (req, res) => {
    console.log("Fingerprint Data Received:", req.body);

    try {
        // Send unlock signal to ESP8266
        const response = await axios.get(`${ESP8266_IP}/unlock`);
        console.log("ESP8266 Response:", response.data);

        res.json({ message: "Unlock signal sent to ESP8266!" });
    } catch (error) {
        console.error("Error sending unlock signal:", error.message);
        res.status(500).json({ error: "Failed to send unlock signal" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
