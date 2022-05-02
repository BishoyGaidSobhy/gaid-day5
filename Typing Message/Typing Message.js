function W()
{

var wind = window.open("","_blank","width=400 , height=400")

var string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores itaqu"
var i=0
var interv=setInterval(function(){
    document.write(string[i])
    i++;
    if(string,length==i){
        clearInterval(interv)

    }
},1000)


}
