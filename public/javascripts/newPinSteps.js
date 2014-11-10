function nextStep() {
	var map = document.getElementById('new_pin_map');
	$('#new_pin_map').css("height", "40%");
	$('#map-navbar').toggle();
	$('#new-pin-form').toggle();
	$('#search-box').toggle();
	$( "#new_pin_map" ).attr( "onclick", "prevStep()" );
	var mapLongitude = $('#map-longitude').value;
	var mapLatitude = $('#map-latitude').value;
	$('#new-pin-form').attr('longitude', mapLongitude); 
	$('#new-pin-form').attr('latitude', mapLatitude); 
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