


$(function () {
    $("#addbtn").click(function () {
        additem();
    });
    $("#addinput").keyup(function (event) {
        if(event.keyCode === 13){
            additem();
        }
    });
});

function additem() {

    var thelabel = $("#addinput").val();

    if(thelabel !== ""){
        var inputdiv = "<div class='todorow'><span class='todolable'>" + thelabel + "</span><div><button class='delbtn' onclick='deleteitem(this)'>X</button><button class='combtn' onclick='completeitem(this)'>Done</button><button class='openbtn' onclick='addchildlist(this)'>Add Item</button></div><div class='items'></div></div>";
        $(".todocontainer").append(inputdiv);
        $("#addinput").val("");
    }
}

function deleteitem(element) {
    console.log($(element).parent());
    $(element).parent().parent().remove();

}
function completeitem(element) {
    var grandpa = $(element).parent().parent();
    $(grandpa).find('.combtn').remove();
    $(".completebox").append(grandpa);
}

function addchildlist(element) {
    console.log(element);
    var grandma = $(element).parent().parent();
    $(grandma).find(".items").append("<div contenteditable='true'>Edit this item</div>");

}