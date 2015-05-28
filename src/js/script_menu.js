$(document).ready(function(){
	$("#cafe").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#cafe").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/cafe/cafe04.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Expresso:</strong> shot de café puro que consiste de una onza y media. Excelente para los amantes del café y un disparo de energía al cuerpo.<br><br><strong>Expresso doble:</strong> 3 onzas de café puro para los temerarios y adoradores del sabor del café.<br><br><strong>Expresso cortado:</strong>  Misma cantidad de café puro. Se le llama cortado ya que se agrega un toque de leche a la preparación.");
	}),

	$("#capp").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#capp").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/cappuccino/cappu02.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Cappuccino:</strong> preparación a base de leche espumada con café a la que se le puede agregar esencias de sabores o tomarse al natural agregándole como toque decorativo, polvo de canela.<br><br><strong>Latte:</strong> Esta bebida también se prepara con shot de café al gusto (ligero, regular, cargado) y leche. La diferencia con el cappuccino radica en la preparación de la leche que en este caso va cremada, proporcionándole al café un toque más dulce y suave. También puede prepararse con esencias de sabores o al natural.");
	}),
	$("#frap").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#frap").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/frappe/frapp02.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Frappé:</strong>Bebida a base de hielo escarchado combinado con sabores frutales o cremosos y leche. Para decorar se le agrega crema batida y variedad de toppings al gusto.<br><br><strong>Frappuccino:</strong> Bebida a base de hielo escarchado con esencia sabor a café capuchino y leche. Como toque pueden agregarse granos de café para proporcionar una consistencia crujiente. Para decorar se agrega crema batida y toppings variados.");
	}),
	$("#smoot").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#smoot").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/snacks/snack03.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Smoothie:</strong> Hielo escarchado con agua (para los intolerantes a la leche puede ser buena opción), esencias generalmente frutales o cremosas si se prefiere y una base neutra para darle consistencia espumosa. Selección exquisita para la época de calor.");
	}),
	$("#soda_ita").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#soda_ita").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/soda_italiana/soda_ita03.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Soda Italiana:</strong> Bebida consentida por los niños. La combinación consiste en una gran cantidad de hielo con esencia de sabor frutal al gusto, refresco de limón y un toque de agua mineral para darle una textura gaseosa. Fresca bebida en época de calor.");
	}),
	$("#malteada").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#malteada").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/cafe/cafe02.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Malteada:</strong> Leche combinada con esencias de sabores cremosos y licuada con hielo.");
	}),
	$("#chamo").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#chamo").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/soda_italiana/soda_ita05.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Chamoyada:</strong> Hielo escarchado combinado con agua, chamoy en polvo y salsas de sabores (mango, tamarindo y fresa).");
	}),
	$("#infusi").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#infusi").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/snacks/ensalada04.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Infusiones:</strong> Preparación con agua caliente a la que se le agrega frutas naturales deshidratadas de diferentes sabores exóticos y dulces al paladar para relajarse. Buena selección para los intolerantes a la cafeína.");
	}),
	$("#te_chai").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#te_chai").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/snacks/snack03.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Té Chaí:</strong> Variedad.");
	}),
	$("#snack").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#snack").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/snacks/snack05.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html('<strong>Chapatas:</strong> Pan artesanal sin levadura preparado con frijoles, aderezo de la casa, (pechuga de pavo o atún o lomo o pollo), horneado y después complementado con jitomate, aguacate y lechuga. Se sirve acompañado de papas fritas.<br><br><strong>Croissants:</strong> Pan preparado con frijoles, aderezo de la casa, (pechuga de pavo o atún o lomo o pollo a la parrilla), horneado y después complementado con jitomate, aguacate y lechuga. Se sirve acompañado de papas fritas.<br><br><label id="mas">Más...</label>');
	}),

	$("#postre").click(function(){
		$(".lin").css({"background-color" : "#ec8b2e"});
		$("#postre").css({"background-color" : "#d9222e"});
		$("#image_menu").attr("src", "../images/menu/postre/postre03.jpg");
		$("#descripcion_menu").empty();
		$("#descripcion_menu").html("<strong>Postres:</strong>Variedad de postres para cada gusto...");
	});

});