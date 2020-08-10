const happyFlip = {};

// Start game
happyFlip.title = function () {
    $('mainBgm').hide();
    $('.beginBtn').click(function(){
        $('.headerBgm').hide();
        $('mainBgm').show();
    })
}

happyFlip.init = () => {
    happyFlip.title();
}

$(document).ready(happyFlip.init());