/**
 * Created by namai on 5/28/2017.
 */
function initMap() {
    var uluru = {lat: 55.724327, lng: 21.126806};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}