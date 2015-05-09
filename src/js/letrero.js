var x = 20;
	
window.onload = ejecuta;


function ejecuta(){
setInterval(function(){

   if(x<79){		
   x+=1; 
   document.getElementById("letrero").style.left = x+"%";
   }else{
   	x = 20;
   }


},200);
}

