$(document).ready(function() {
    $("img.imgfluid").hover(makeBigger, returnOriginal);

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

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }