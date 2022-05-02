


var index = 0 ;
var img = document.getElementById('image') ;
var timer = 0;
var images = ["./1.jpg" , "./2.jpg " , "./3.jpg","./4.jpg","./5.jpg","./6.jpg"]
function Start(){
    console.log(img)
 timer = setInterval(Show , 2000) ;
}

function Show(){
    index++ ;
    if (index>images.length-1) {
        index=0
    }
    img.src=images[index]

}
function Stop() {
    clearInterval (timer)
}

function Previous() {
    console.log(img)
timer = setInterval(Start,2000);
}











































//function next(){
  //  document.images.src="./1.jpg"
//}