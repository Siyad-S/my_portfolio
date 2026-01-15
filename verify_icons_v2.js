
const https = require('https');

const urls = [
    'https://cdn.simpleicons.org/css3/1572B6',
    'https://cdn.simpleicons.org/html5/E34F26',
    'https://cdn.simpleicons.org/javascript/F7DF1E',
    'https://cdn.simpleicons.org/express/000000',
    'https://cdn.simpleicons.org/bootstrap/7952B3',
    'https://cdn.simpleicons.org/jsonwebtokens/000000',
    'https://cdn.simpleicons.org/postman/FF6C37',
    'https://cdn.simpleicons.org/aggregationpipeline/47A248'
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${url}: ${res.statusCode}`);
        res.resume();
    }).on('error', (e) => {
        console.error(`${url}: Error - ${e.message}`);
    });
});
