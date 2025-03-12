const express = require("express");
const app = express();
const cors = require ("cors");
const corsOptions = {
    origin: ["http://localhost:5178"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
res.json({animals: ["Dog", "Cat", "Snake", "Bird"]})
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})