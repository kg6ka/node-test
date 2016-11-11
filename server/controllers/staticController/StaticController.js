const fs = require('fs');
const path = require('path');

function renderStaticHtmlFile(path) {
    return function(req, res, next) {
        fs.createReadStream(__dirname + '/../../../frontend/' + path)
            .pipe(res);
    }
}

module.exports = {
    index: renderStaticHtmlFile('index.html')
};