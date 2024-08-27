const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Or any port number you prefer

let viewCount = 0;

app.use(cors());
app.use(express.json());

app.post('/increment-view', (req, res) => {
    const { viewCount: newViewCount } = req.body;
    viewCount = newViewCount;
    res.json({ message: 'View count updated successfully', viewCount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
