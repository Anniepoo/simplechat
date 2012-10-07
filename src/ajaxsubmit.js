// Taken from
//    http://www.anujgakhar.com/2009/04/16/jquery-form-plugin-and-return-key-submit/

// not all that useful - going to roll own
var options = {
    success: showResponse  // post-submit callback      
};
 
// provide for a chat button
$('#chatbutton').click(function(){
    $('#chatform').ajaxSubmit(options);
    return false; // prevent default behaviour
});
 
// post-submit callback
function showResponse(responseText, statusText)  {
    
    if(jQuery.trim(responseText) == "Success"){
        $('#chatarea').html(responseText);
    } else {
        $('#chatinput').html(responseText);
    }
}

//capture the return key
$(".txtLoginForm").bind("keydown", function(e) {
if (e.keyCode == 13) {
$('.frmLogin').ajaxSubmit(options);
return false; //prevent default behaviour
}
});