//TODO: Implementar código dentro del elemento google-map de Polymer.
var map = document.querySelector("#map");
navigator.geolocation.getCurrentPosition(GetLocation);
function GetLocation(location) {
    var geo = function(latitude, longitude, accuracy){
    this.latitude = location.coords.latitude
    this.longitude = location.coords.longitude
    this.accuracy = location.coords.accuracy
}
    map.location = new geo();
    console.log(map.location);
}