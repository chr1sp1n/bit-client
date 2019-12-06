
'use strict';

;(function(){

    var map = L.map('map').setView([44.4973187, 11.3420705], 16);

    // L.tileLayer(
    //     'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    //     {
    //         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //         maxZoom: 22,
    //         id: 'mapbox/streets-v11',
    //         accessToken: 'pk.eyJ1IjoiY2hyMXNwMW4iLCJhIjoiY2szdXFmc3FjMGV5aTN1cHMzdjg2Yjg3MyJ9.jSWZatgBnN-sx0y4Vp5Z2Q'
    //     }
    // ).addTo(mymap);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        inertia: true,
        zoomDelta: .5,
        zoomSnap: .5
    }).addTo(map);

    var latlng = L.latLng(44.4973187, 11.3420705);
    L.circleMarker(latlng).addTo(map);

}());

