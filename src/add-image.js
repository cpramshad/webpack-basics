 import Kiwi from './kiwi.jpeg';
 
 function addImage() {
     const img = document.createElement('img');
     img.alt = 'kiwi';
     img.width = 300;
     img.src = Kiwi;

     const body = document.querySelector('body');
     body.appendChild(img);
 }

 export default addImage;