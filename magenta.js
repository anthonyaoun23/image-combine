// var mi = require();
import mi from './node_modules/@magenta/image/';
 
const model = new mi.ArbitraryStyleTransferNetwork();
const contentImg = document.getElementById('content');
const styleImg = document.getElementById('style');
const stylizedCanvas = document.getElementById('stylized');
 
function stylize() {
  model.stylize(contentImg, styleImg).then((imageData) => {
    stylizedCanvas.getContext('2d').putImageData(imageData, 0, 0);
  });
}
 
model.initialize().then(stylize);