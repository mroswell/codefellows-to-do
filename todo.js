$(document).ready(function () {
    $("#addtodo").click(function () {
        var todoitem = $('#todo').val();
		$('#todo').val('');
        $('#gohere').append('<li class="item">' + todoitem + '</li>');
        $('.item').click(function () {
            $(this).remove();
        });
    });
});