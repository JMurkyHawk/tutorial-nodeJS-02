const fs = require('fs');

// if (!fs.existsSync('./new')) {
//     fs.mkdir('./new', (err) => {
//         if (err) throw err;
//         console.log('Directory created');
//     });
// }
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', () => {
        try {
            console.log('Directory created');
        } catch (err) {
            console.error(err);
        }
    });
}

// if (fs.existsSync('./new')) {
//     fs.rmdir('./new', (err) => {
//         if (err) throw err;
//         console.log('Directory removed');
//     });
// }
if (fs.existsSync('./new')) {
    fs.rmdir('./new', () => {
        try {
            console.log('Directory removed');
        } catch (err) {
            console.error(err);
        }
    });
}