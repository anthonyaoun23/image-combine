import * as mi from '@magenta/image';
 
const model = new mi.ArbitraryStyleTransferNetwork();
const contentImg = document.getElementById('content') as HTMLImageElement;
const styleImg = document.getElementById('style') as HTMLImageElement;
const stylizedCanvas = document.getElementById('stylized') as HTMLCanvasElement;
 
function stylize() {
  model.stylize(contentImg, styleImg).then((imageData) => {
    stylizedCanvas.getContext('2d').putImageData(imageData, 0, 0);
  });
}
 
model.initialize().then(stylize);