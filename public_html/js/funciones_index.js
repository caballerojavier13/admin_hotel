$(function() {
    var listadoHoteles = "";
    $.getJSON("http://hotelserver-54636.sae1.actionbox.io:3000/hotels", function(data){
        $.each(data, function(index, item) {
            var urlView = "view.html?id=" + item["_id"];
            var id = item["_id"];
            listadoHoteles += '<tr id="' + item["_id"] + '">\n\
                                <td>' + item.id_hotel + '</td>\n\
                                <td>' + item.nombre + '</td>\n\
                                <td>' + item.estrella + '</td>\n\
                                <td> \n\
                                    <a class="btn btn-primary" href=' + urlView + '>Ver</a>\n\
                                </td>\n\
                                <td> \n\
                                    <button href="#" class="btn btn-danger delete" onclick="deleteHotel(' + '\'' + id + '\'' + ')">Eliminar</button>\n\
                                </td>\n\
                            </tr>';
        });
        $('#datos_tabla').html(listadoHoteles);
        $('#tabla').show("blind", 500);
        $('#loading').hide("blind", 500);
    });
});


function deleteHotel(id) {
    var url = "http://hotelserver-54636.sae1.actionbox.io:3000/hotels/" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        success: function(result) {
            $('#'+id).hide(1000);
        }
    });
}