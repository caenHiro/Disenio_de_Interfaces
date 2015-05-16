$(document).ready(function(){
	$(ini);
function ini(){
  $('#1').draggable({
    containment: $("tr").parent(),//'parent',
    cursor: 'move',
    stop: handleDragStop
  });
  $('#2').draggable({
    containment: $("tr").parent(),//'parent',
    cursor: 'move',
    stop: handleDragStop
  });
  $('#3').draggable({
    containment: $("tr").parent(),//'parent',
    cursor: 'move',
    stop: handleDragStop 
  });
  $('#4').draggable({
    containment: $("tr").parent(),//'parent',
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
 
