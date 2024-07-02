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
                        font-size: 2em;
                    }
                </style>
            </head>
            <body>
                <h1>404 - Not Found</h1>
                <img src="/sad-veggies.webp" height="500em" width="500em" alt="Sad Veggies" />
                <p>The page you are looking for does not exist.</p>
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
