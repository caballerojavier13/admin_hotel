var id;
$(function() {
    id = GetURLParameter('id');
    url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/" + id;
    $.getJSON(url, function(data) {
        $('title').text(data.nombre);
        $('#titulo').html(data.nombre);
        $('#info').html(data.descripcion);
        document.getElementById("icono").setAttribute("src",data.logo);
        document.getElementById("imagen").setAttribute("src",data.imagen);
        var latitud = data.latitud;
        var longitud = data.longitud;
        var url_mapa = "http://maps.googleapis.com/maps/api/staticmap?center="+latitud+","+longitud+"&markers=color:red%7Clabel:H%7C"+latitud+","+longitud+"&zoom=15&size=500x500&sensor=false";
        document.getElementById("mapa").setAttribute("src",url_mapa);
        var url_editar = "edit.html?id=" + id;
        document.getElementById("editar").setAttribute("href",url_editar);
        setEstrella(data.estrella);
        $("#loading").hide();
        $("#page").show();
    });
    
});

function deleteHotel() {
    var url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result) {
            $(location).attr('href',"index.html"); 
        }
    });
}
function setEstrella(estrella){
    estrella = parseInt(estrella);
    var imagen = "<img src='./images/star.png' alt=''>"
    for(i=0;i<estrella;i++){
        $("#estrella").append(imagen);
    }
}
