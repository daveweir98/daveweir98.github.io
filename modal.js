document.addEventListener('DOMContentLoaded', function(){
    var finalYearModal = document.querySelector('#final-year-modal');
    var finalYearProject = document.querySelector('#final-year');
    var thirdYearModal = document.querySelector('#third-year-modal');
    var thirdYearProject= document.querySelector('#third-year');
    var matchTrackerModal = document.querySelector('#match-tracker-modal');
    var matchTrackerProject = document.querySelector('#match-tracker');
    var closeFinal = document.querySelector('#close-final');
    var closeThird = document.querySelector('#close-third');
    var closeMatch = document.querySelector('#close-match');

    finalYearProject.addEventListener('click', function(){
        show(finalYearModal);
    });

    thirdYearProject.addEventListener('click', function(){
        show(thirdYearModal);
    });

    matchTrackerProject.addEventListener('click', function(){
        show(matchTrackerModal);
    });
    
    closeFinal.addEventListener('click', function () {
        hide(finalYearModal);
    });

    closeThird.addEventListener('click', function () {
        hide(thirdYearModal);
    });

    closeMatch.addEventListener('click', function () {
        hide(matchTrackerModal);
    })

    document.addEventListener('keydown', function(event){
        if(event.keyCode == 27) {
            hide(finalYearModal);
            hide(thirdYearModal);
            hide(matchTrackerModal);
        }
    } );
    

});

function show(el){
    el.style.display = 'flex';
}

function hide(el){
    el.style.display = 'none';
}