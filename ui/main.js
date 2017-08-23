console.log('Loaded!');
// change the text from main-text id in index.html

var element= document.getElementById('main-text');

element.innerHTML = 'New value';

// make the picture move

var img= document.getElementById('madi');

img.onclick=function(){
    img.style.marginleft = '100px';
};