var id;
var map;
$(function(){
    id = GetURLParameter('id');
    url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/" + id;
    $.getJSON(url, function(data) {
        $("#inputId").val(data.id_hotel);
        $("#inputNombre").val(data.nombre);
        $("#inputDescripcion").val(data.descripcion);
        $("#inputImagen").val(data.imagen);http://localhost:3000/
        $("#inputLogo").val(data.logo);
        $("#inputLongitud").val(data.longitud);
        $("#inputLatitud").val(data.latitud);
        $("#inputEstrella").val(data.estrella);
        $("#page").show();
        $("#loading").hide();
        cargarMapa(data.latitud,data.longitud);
    });
});

function guardar(){
    $("#text_loading").html("Guardando...");
    $("#page").hide();
    $("#loading").show();
    
    var url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/" + id;
    var serializedForm = $("#form").serialize();//Obtienes los campos del formulario
    $.ajax({
        url: url,
        type: 'PUT',
        data:serializedForm,
        success: function(result) {
            $(location).attr('href',"view.html?id="+id); 
        }
    });
    return false;
}

function cargarMapa(latitud, longitud){
    var center;
    if(latitud == "" || longitud == ""){
        center = new google.maps.LatLng(-32.89023576013358, -68.84169995498655);
    }else{
        center = new google.maps.LatLng(latitud, longitud);
    }
    
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
}
function vistaPrevia() {
    var var_input1 = document.getElementById("inputImagen");
    var var_input2 = document.getElementById("inputLogo");
    var var_imagen1 = document.getElementById("prev_img");
    var var_imagen2 = document.getElementById("prev_logo");
    var_imagen1.setAttribute("src", var_input1.value);
    var_imagen2.setAttribute("src", var_input2.value);

}