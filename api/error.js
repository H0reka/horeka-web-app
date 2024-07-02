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
                .header-h1 {
  color: var(--brand);
  text-align: center;
  letter-spacing: -0.03em;
  margin-top: 10px;
  font-size: 32px;
  line-height: 1.2;
  margin-bottom:0;
}
  .image-error{
  height:500em;
  width:500em;
  }

            </style>
        </head>
        <body>
            <div>
                <h1 class='header-h1>404 - Not Found</h1>
            </div>
            <div class='container px-[10px]'>
                <img src="./sad-veggies.webp" class="image-error" alt="" />
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
