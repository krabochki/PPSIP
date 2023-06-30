var buttonPrev = document.getElementsByTagName("button")[0];
var buttonNext = document.getElementsByTagName("button")[1];
var image = document.getElementsByTagName("img")[0];

var photos = ["me.jpg", "me2.jpg", "me3.jpg", "me4.png"];
let current = 0;

function next() {
    if(current!=3){
    current++;}
    else{current=0;}
    image.setAttribute("src", "Photo/"+photos[current])
  }
function prev() {
    if(current!=0){
        current--;}
        else{current=3;}
        image.setAttribute("src", "Photo/"+photos[current])
  }

  buttonNext.addEventListener('click', next);
  buttonPrev.addEventListener('click', prev);
