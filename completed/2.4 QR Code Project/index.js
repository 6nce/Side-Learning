/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// inquirer.prompt([
//     {
//         name: 'URL',
//         message: 'Please insert an URL',
//         type: 'input'
//     }
// ])
// .then(function(answer){
//     console.log(answer);
// })
 



inquirer.prompt([
    {
        name: "URL",
        message: "type in URL",
        type: 'input',
    },
]).then((answers) => {
            // var qr_generated = qr.image(answer, {type:'svg'});
            // qr_generated.pipe(fs.createWriteStream('test.svg'));
            // var svg_string = qr.imageSync(answer, {type:'svg'});
            var qr_svg = qr.image(answers.URL);
            qr_svg.pipe(fs.createWriteStream('QRimage.png'));
            fs.writeFile("URL.txt", answers.URL, err => {
                if(err) {
                    console.error(err);
                } else {

                }
            })
    }).catch((error) => {
        if (error.isTtyError) {

        }else {

        }
    });
