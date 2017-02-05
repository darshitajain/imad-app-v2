console.log('Loaded!');

//change the existing text

var element= document.getElementById('main-text');
element.innerHTML='Hi I am Madi!!';

//change the position of image on click

var img = document.getElementById('img');

img.onclick = function(){
    
    img.style.marginLeft = '100px';
    
};