function nextStep() {
	var map = document.getElementById('new_pin_map');
	$('#new_pin_map').css("height", "40%");
	$('#map-navbar').toggle();
	$('#new-pin-form').toggle();
	$('#search-box').toggle();
	$( "#new_pin_map" ).attr( "onclick", "prevStep()" );
	var newPinMarker = $('#new_pin_marker');
	$('#map-longitude').val(newPinMarker.attr('longitude'));
	console.log(newPinMarker.attr('longitude'));
	$('#map-latitude').val(newPinMarker.attr('latitude')); 
	map.zoom = 18; 

}
function prevStep (argument) {
	var map = document.getElementById('new_pin_map');
	$('#new_pin_map').css("height", "100%");
	$('#map-navbar').toggle();
	$('#new-pin-form').toggle();
	$('#search-box').toggle();
	$( "#new_pin_map" ).attr( "onclick", "" );
	map.zoom = 17;
}