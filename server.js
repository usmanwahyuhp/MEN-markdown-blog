import express from 'express';

const app = express();
const PORT = 5000;

app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));

app.get("/", (req, res) => res.send("Hello World!"));