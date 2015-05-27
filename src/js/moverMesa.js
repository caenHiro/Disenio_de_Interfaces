$(document).ready(function(){
	$(ini);
function ini(){
  $('#1').draggable({
    containment: $("table").parent(),//'parent',
    cursor: 'move',
    stop: handleDragStop
  });
  $('#2').draggable({
    containment: $("table").parent(),
    cursor: 'move',
    stop: handleDragStop
  });
  $('#3').draggable({
    containment: $("table").parent(),
    cursor: 'move',
    stop: handleDragStop 
  });
  $('#4').draggable({
    containment: $("table").parent(),
    cursor: 'move',
    stop: handleDragStop
  });

  $("#1").data('offset',{ top: $("#1").offset().top, left: $("#1").offset().left});
  $("#1").data('offset',{ top: $("#1").offset().top, left: $("#1").offset().left});
  $("#1").data('offset',{ top: $("#1").offset().top, left: $("#1").offset().left});
  $("#1").data('offset',{ top: $("#1").offset().top, left: $("#1").offset().left});

}

function handleDragStop( event, ui ) {
  var offsetXPos = parseInt( ui.offset.left );
  var offsetYPos = parseInt( ui.offset.top );
  console.log( "Drag stopped!\n\nOffset: (" + offsetXPos + ", " + offsetYPos + ")\n");
  console.log($("#1").offset().left+" y "+$("#1").data("offset").left);
  console.log(this.id);
  evitaTraslape(this.id,offsetXPos,offsetYPos);
}

function evitaTraslape(id,x,y){

switch(id){
	case 1:

	case 2:
	case 3:
	case 4:

}

}

});
var id = -1;
/*
Cambia el Color de la mesa
*/
function cambia(idN){

if(id==idN){
  if(id==1||id==2)
  $("#"+idN).attr('src','../images/mesa2.png');
  else
  $("#"+idN).attr('src','../images/mesa.png');  
  id=-1;
  return;
}

//Cambia color verde
switch(idN){
  case '1':
  $("#"+idN).attr('src','../images/mesa2V.jpg');
  break;

  case '2':
  $("#"+idN).attr('src','../images/mesa2V.jpg');
  break;

  case '3':
  $("#"+idN).attr('src','../images/mesaV.jpg');
  break;

  case '4':
  $("#"+idN).attr('src','../images/mesaV.jpg');
  break;
}
//Quita color verde

if(id==1||id==2)
$("#"+id).attr('src','../images/mesa2.png');
else
$("#"+id).attr('src','../images/mesa.png');

id = idN
  
}

       $("#nombre").focus(function(){
        console.log("Uju");
         if(!isNaN($("#nombre").val())){
           $("#nombre").removeClass('invalido');
         }else{
           $("#nombre").addClass('invalido');
           $("#nombre").removeClass('valido');
         }
       });
       

 
