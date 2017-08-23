console.log('Loaded!');
// change the text from main-text id in index.html

var element= document.getElementById('main-text');

element.innerHTML = 'New value';

// make the picture move

var img= document.getElementById('madi');

img.onclick=function(){
    v
    img.style.marginLeft = '100px';
};
var marginLeft= 0;
// make img move like animation
function moveRight(){
    img.style.marginLeft= marginLeft+ 5;
    marginLeft= marginLeft+ 'px';
}
img.onclick=function(){
    var interval= setInterval(moveRight,100);
};
    