$(window).load(function() {
    alert("window load occurred!");



console.log("Javascript is working!")
$("#myButton").toggle(function(){
    $("#content").slideDown();
    $(this).val("Slide up ↑");
},function(){
    $("#content").slideUp();
    $(this).val("Slide down ↓")
});


});