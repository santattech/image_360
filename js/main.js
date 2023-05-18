const threeImage = new PANOLENS.ImagePanorama( "images/image.jpg" );
const imgDivContainer = document.querySelector('.tsd');

const viewer = new PANOLENS.Viewer({
  output: 'console',
});

viewer.add(threeImage);