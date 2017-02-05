console.log('Loaded!');

//change the existing text

var element= document.getElementById('main-text');
element.innerHTML='Hi I am Madi!!';

//change the position of image on click

var img = document.getElementById('madi');


var marginLeft = 0;
function moveRight(){
    
     marginLeft += 10;
     img.style.marginLeft = marginLeft+'px';
    
    
}

img.onclick = function(){
    
    var interval = setInterval(moveRight,50);
    
};

var button = document.getElementById('counter');
var counter = 0;

 button.onclick = function(){
    
    // Make a request to the counter endpoint
    
    
    // Capture the response and store in the variable
    
    // render the variable in the correct span
    counter ++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
    
    
        
};



