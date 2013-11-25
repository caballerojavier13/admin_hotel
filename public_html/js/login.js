$(function(){
    $('form').submit(function() {
        
        var user = $('#user').val();
        var pass = $('#pass').val();
        if(user == "admin"){
            if(pass == "admin"){
                $(location).attr('href',"index.html"); 
                
            }else{
                $('#form').removeClass("has-success");
                $('#form').addClass("has-error");
            }
        }else{
            $('#form').removeClass("has-success");
            $('#form').addClass("has-error");
        }
        return false;
    });
});
