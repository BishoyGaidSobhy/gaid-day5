let mywin;

function openwin(){
    mywin = window.open("","","width=250", "heighy=250");

}


function movewin(){
    console.log("iti")
    var x=20;
    var y = setInterval(function()
    {
        mywin.moveBy(x, x);
        x+=300;
    },3000)
}

function stop(){
    clearInterval(y);
}