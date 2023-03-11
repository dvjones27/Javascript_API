 
var showText = document.querySelectorAll(".container_1 div");

for(var i = 0; i<showText.length;i++){
    showText[i].onclick=function(){
        this.classList.toggle("show");
    }
}

  