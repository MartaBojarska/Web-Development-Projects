/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
    name: "url",
    type: "input",
    message: "Please enter your url to generate as QR code: "
},
])
.then((answer) => {
    var qr_svg = qr.image(answer.url, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('url.svg'));

    fs.writeFile('url.txt', answer.url, (err) => {
        if (err) throw err;
        console.log('Successfully wrote to the file!');
    });
});
