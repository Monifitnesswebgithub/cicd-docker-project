const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>CI/CD Pipeline is Working!</h1><p>Deploying via Jenkins & Docker Compose.</p>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
