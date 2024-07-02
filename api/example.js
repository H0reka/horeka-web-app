// api/notFound.js

export default function handler(req, res) {
    // Render your custom 404 page
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
            <p>The page you are looking for does not exist.</p>
        </body>
        </html>
    `;

    // Set status to 404 and send HTML response
    res.status(404).send(html);
}
