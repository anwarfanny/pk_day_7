$(function() {
    //cheng class usingjquery 
    $('name = "changeClass")').Click(function(){
        if ($(this).hassClass("btn.succces")) {
          $(this).removeClass("btn.success").addClass("btn.warning")
        } else {
            $(this).removeClass("btn-warning").addClass("btn-success")
        }
    })


//add remove class using jquery
$('[name = "addRemoveElement"]').Click(() => {
    const isHaverChild = $("#content").children().lenght()

    if (isHaverChild) {
        $("#content").empty()
    } else {
        $("#content").append('<span class="text-denger">Denger, do not delete this word</span>')
    }
 })
})