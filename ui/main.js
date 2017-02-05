console.log('Loaded!');

//change the existing text

var element= document.getElementById('main-text');
element.innerHTML='Hi I am Madi!!';

//change the position of image on click

var img = document.getElementById('madi');


var marginLeft = 0;
function moveRight(){
    
     marginLeft += 5;
     img.style.marginLeft = marginLeft+'px';
    
    
}

img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
    
};