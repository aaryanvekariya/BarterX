import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

// Log requests to a file
const logRequest = (url) => {
    const logFilePath = path.join('log.txt');
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${url}\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        }
    });
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const urlPath = parsedUrl.pathname;
    let response;

    // Log the request
    logRequest(urlPath);

    switch (urlPath) {
        case '/':
            response = "Welcome to BarterX";
            break;
        case '/products':
            response = "Here are the products up for Sale in BarterX";
            break;
        case '/login':
            response = "Login to the BarterX";
            break;
        case '/signup':
            response = "Sign up to the BarterX";
            break;
        case '/profile':
            response = "Trader Profile";
            break;
        case '/cart':
            response = "Your Shopping Cart is here";
            break;
        case '/checkout':
            response = "Let's start shipping";
            break;
        case '/orders':
            response = "Your Orders are here";
            break;
        case '/categories':
            response = "Browse Categories";
            break;
        case '/chat':
            response = "Your Chat with fellow Traders";
            break;
        case '/contact':
            response = "Contact Us at";
            break;
        case '/about':
            response = "The modern approach to trading our commodities";
            break;
        default:
            response = "Page not found";
            break;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response);
});

const port = 8050;

server.listen(port, () => {
    console.log(`Server initiated on port ${port}...`);
    console.log(`http://localhost:${port}`);
});




