console.log('Loaded!');

var element=document.getElementById('main-text');
element.innerHTML='New Value';

var img=document.getElementById('img');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft = marginleft+'px';
}
img.onclick=function(){
  var interval = setInterval(moveRight,50);  
};