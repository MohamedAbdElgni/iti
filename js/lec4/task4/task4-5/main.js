const images = document.getElementsByTagName('img')
const newimg = document.createElement('img')
const imagesource = images[0].src
newimg.src=imagesource
const myheader = document.getElementById('header')

myheader.appendChild(newimg)

images[0].style.position='absolute';
images[0].style.bottom='0';
images[0].style.left='0';

images[1].style.position='relative';
myheader.style.textAlign='right';


