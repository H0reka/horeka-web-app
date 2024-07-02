// Assuming you want to convert your React component into an HTML string
function convertComponentToHTML() {
    const component = `
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
            <div class='mt-[10em]'>
                <h1 class='header-h1 mb-[0]'>404 - Not Found</h1>
            </div>
            <div class='container px-[10px]'>
                <img src="./sad-veggies.webp" height="500em" width="500em" alt="" />
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </body>
        </html>
    `;
    return component;
}

// Example usage in your serverless function
export default function handler(req, res) {
    // Render your custom 404 page
    const html = convertComponentToHTML();

    // Set status to 404 and send HTML response
    res.status(404).send(html);
}
