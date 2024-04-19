$(document).keypress(function (event){
    console.log(event.key);
    $("h1").before("<button>" + event.key + "</button>")
})