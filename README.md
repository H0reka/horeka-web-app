# Horeka.app Website

This project was fabricated using ReactJS and Google Scripts API to create a full functional representative website for [Horeka.app](https://www.horeka.app) business.

## Folder Structure

- public folder contains all the assets/images used in this project.
- api folder contains a serverless function which is used to display error page when a user requests a non-existent URL. This serverless function is called by Vercel, on which the website is hosted
- src folder, except for having App files, is divided into two folders: Components(hold the pages) and Common(holds common components which are used across multiple pages).

## Additional Information
- All the css which was reused in this project multiple times is written in index.css and css for components which was specific to that components is written in a css file in that particular component's folder.

