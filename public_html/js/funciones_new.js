function vistaPrevia() {
    var var_input1 = document.getElementById("inputImagen");
    var var_input2 = document.getElementById("inputLogo");
    var var_imagen1 = document.getElementById("prev_img");
    var var_imagen2 = document.getElementById("prev_logo");
    var_imagen1.setAttribute("src", var_input1.value);
    var_imagen2.setAttribute("src", var_input2.value);

}

$(function() {
    var center = new google.maps.LatLng(-32.89023576013358, -68.84169995498655);
    var myOptions = {
        zoom: 16,
        center: center,
        panControl: true,
        zoomControl: true,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    // Create map object with options
    map = new google.maps.Map(document.getElementById("mapa"), myOptions);
    // Create and set the marker
    var marker = new google.maps.Marker({
        map: map,
        draggable: true,
        position: center
    });

    google.maps.event.addListener(marker, 'dragend', function() {
        var lat = marker.position.lat().toFixed(5);
        var lng = marker.position.lng().toFixed(5);
        marker.position.lng().toFixed(5);
        // Get the Current position, where the pointer was dropped
        document.getElementById('inputLatitud').value = lat;
        document.getElementById('inputLongitud').value = lng;
        marker.position = new google.maps.LatLng(lat, lng);
    });

});

function guardar() {
    $("#text_loading").html("Guardando...");
    $("#loading").show("clip", 500);
    $("#page").hide("clip", 500);
    var url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/";
    var serializedForm = $("#form").serialize();//Obtienes los campos del formulario
    $.post(url, serializedForm,
            function(data) {
                $(location).attr('href', "index.html");

            });
    return false;

}
