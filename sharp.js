// Refer to https://web.dev/serve-responsive-images/#sharp
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/assets';
// const directory = './src/assets/Bocagrande1018';
// const directory = './src/assets/Sibate0419';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(640, 320) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });
