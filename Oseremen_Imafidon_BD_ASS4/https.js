const https = require('https');
const fs = require('fs');
const stream = fs.createWriteStream('./public/Tunde_Onakoya.html')

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
    stream.write(data);    
    });
    response.on('complete', () => {
        console.log('Request completed')
    });
    response.on('close', () => {
        console.log('connecction closed')
    });
}).on('error', (error) => {
    console.log(error)
})