const { readFile } = require('fs');

function doWork(path, encode) {
    return new Promise((resolve, reject) => {
        readFile(path, encode, (error, data) => {
            if (error) reject(error);

            resolve(data);
        });
    });
}

doWork('./test.txt', 'utf-8')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
