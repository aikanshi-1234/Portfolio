
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

const dataFilePath = path.join(__dirname, 'viewCount.json');


let viewCount = 0;


try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    viewCount = JSON.parse(data).viewCount;
} catch (error) {
    console.log('No existing view count found, starting from 0');
}

app.use(cors());
app.use(express.json());

app.post('/increment-view', (req, res) => {
    const { viewCount: newViewCount } = req.body;
    viewCount = newViewCount;


    fs.writeFileSync(dataFilePath, JSON.stringify({ viewCount }), 'utf8');

    res.json({ message: 'View count updated successfully', viewCount });
});

app.get('/view-count', (req, res) => {
    res.json({ viewCount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});