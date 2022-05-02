function EnterEqual(){
    var E = document.getElementById("Answer").value
    if (E){
        document.getElementById("Answer").value = eval(E)
    }
}
var Y=""
function EnterNumber(num){
    console.log(num) ; 
    Y+=num
    document.getElementById("Answer").value = Y ; 
    
}

function EnterClear(){
     document.getElementById("Answer").value=""

}


