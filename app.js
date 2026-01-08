const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Animated CI/CD Pipeline</title>
        <style>
            body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: white;
            }
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .card {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                padding: 50px;
                border-radius: 20px;
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
                text-align: center;
                transform: translateY(20px);
                animation: fadeInUp 1s forwards;
            }
            @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
            }
            .status-dot {
                height: 15px;
                width: 15px;
                background-color: #00ff00;
                border-radius: 50%;
                display: inline-block;
                margin-right: 10px;
                box-shadow: 0 0 10px #00ff00;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 0, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(0, 255, 0, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 0, 0); }
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>🚀 CI/CD Pipeline v3.0</h1>
            <p><span class="status-dot"></span> System Status: <strong>Operational</strong></p>
            <hr style="border: 0.5px solid rgba(255,255,255,0.2)">
            <p>Deployed via Jenkins & Docker Compose on Ubuntu (WSL)</p>
        </div>
    </body>
    </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Animated app running on port ${PORT}`);
});
