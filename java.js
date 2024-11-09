var dark =document.getElementById("dark")

dark.addEventListener("click",darkmode)
var isdark =false

function darkmode(){
   if(isdark===false){
    document.body.style.backgroundColor="  rgb(10, 113, 231)"
    document.body.style.color="white"
    isdark=true
   }
   else{
    document.body.style.backgroundColor=" rgb(175, 220, 219)"
    document.body.style.color="black"
    isdark=false
   }
}











