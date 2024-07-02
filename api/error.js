import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
    // Read the image file from the public folder
    const imagePath = path.resolve('./public/sad-veggies.webp');

    // Check if the image file exists
    if (fs.existsSync(imagePath)) {
        // Render your custom 404 page with the image
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404 - Not Found</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #c63;
                        text-align: center;
                        letter-spacing: -0.03em;
                        margin-top: 10px;
                        font-size: 32px;
                        line-height: 1.2;
                    }
                        div{
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items:center;}
                </style>
            </head>
            <body>
                <div>
                <h1>404 - Not Found</h1>
                <img src="/sad-veggies.webp" height="400vh" width="400vw" alt="Sad Veggies" />
                <p>The page you are looking for does not exist.</p>
                </div>
            </body>
            </html>
        `;

        // Set status to 404 and send HTML response
        res.status(404).send(html);
    } else {
        // If image file does not exist, send a simpler response
        res.status(404).send('404 - Not Found');
    }
}
