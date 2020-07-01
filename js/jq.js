$(document).ready(function() {
    $("img").hover(makeBigger, returnOriginal);

    $('div.divimg').hover(function() {
        $('div.divimg').css({opacity:'0.6'});
        $(this).css({opacity:'1'});
    }, function() {
        $('div.divimg').css({opacity:'1'});
    });
});

function makeBigger() {
    $(this).animate({height: '+=10%', width:'+=10%'});
};

function returnOriginal() {
    $(this).animate({height:"-=10%", width:"-=10%"});
};