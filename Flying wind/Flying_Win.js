var timer;
var mywin;
function x ()
{
    var y=0;
    mywin=window.open("","",'width=300,height=250');

        timer=setInterval(() => {

            mywin.moveBy(300,250);
            mywin.moveBy(y,y);
            if(y>100)
            {
                clearInterval(timer)
            }
        },1000);

}