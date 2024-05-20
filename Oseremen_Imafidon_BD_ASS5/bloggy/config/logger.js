const path = require('path');
const rfs = require('rotating-file-stream')

const generator = () => {
    const time = new Date();

    let year = time.getFullYear();
    let month = pad(time.getMonth() + 1);
    let day = pad(time.getDate());

    return `express-${year}-${month}-${day}.log`
};

const pad = (num) => {
    if (num < 10) {
        return `0${num}`
    }
    
    return num;
}

// create a writestream
const rotatingFileStream = rfs.createStream(generator, {
    interval: 'id', 
    path: path.join(__dirname, '../storage/logs')
})

module.exports = rotatingFileStream;