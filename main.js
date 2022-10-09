$(document).ready(function() {

    $('form').on ('submit', function(e){
        e.preventDefault();

        const newItemCamp = $('#new-item').val();
        const newItem = $(`<li> ${newItemCamp}</li>`);

        $(newItem).appendTo('ul');
        $('#new-item').val('');

        $("#lista-tarefas").on("click", "li", function (e) {
            $(e.target).addClass("hidden");
          });
    })
})