
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
//$(function() {
//    $(".delete").click(function() {
//        alert("Hola");
////        url = $("#form_comment").attr('action');//obtiene el url declarado en el form en la propiedad action
////        var serializedForm = $("#form_comment").serialize();//Obtienes los campos del formulario
////        $.post(url, serializedForm,
////                function(data) {
////                    $("#form_comment").show();
////                    $("#comment_loading").hide();
////                });
////        return false;
//    });
//});
//function deleteHotel(id) {
//    var url = "http://localhost:3000/hotels/" + id;
//    $.ajax({
//        url: url,
//        type: 'DELETE',
//        success: function(result) {
//            alert("bien");
//        }
//    });
//}