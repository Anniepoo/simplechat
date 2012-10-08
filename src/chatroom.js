// chat room javascript

$(document).ready(function(){
    //capture the return key
    $('#chatentry').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            $.ajax('http://www.pathwayslms.com/shane/chat/add.php?msg='+$('#chatentry').value)
                .done(function(data) {
                   $('#chatarea').innerHTMl = data;
                });
                     
            e.preventDefault();
        }
    });

    setInterval(function(){
        $.ajax('http://www.pathwayslms.com/shane/chat/show.php)
            .done(function(data) {
               $('#chatarea').innerHTMl = data;
            });     
         },500);
});