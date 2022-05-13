/*  
    0 = Rock
    1 = Paper
    2 = Scissors
*/

$(document).ready(function () {

    hideAll();

    let shown = '';
    let playerSelection = '';

    $('#rock').click(function () {
        playerSelection = '.player-selection-rock';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
    });

    $('#paper').click(function () {
        playerSelection = '.player-selection-paper';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
    });

    $('#scissors').click(function () {
        playerSelection = '.player-selection-scissors';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
    });

});

function selectRPS(shown, toShow) {
    if (shown !== '') {
        $(shown).hide('fast', function () {
            $(toShow).show("slide", { direction: "down" }, 1000);
        });
    } else { 
        $(toShow).show("slide", { direction: "down" }, 1000);
    }
}

function hideAll() {
    $('.player-selection-rock').hide();
    $('.player-selection-paper').hide();
    $('.player-selection-scissors').hide();
    $('.comp-selection-rock').hide();
    $('.comp-selection-paper').hide();
    $('.comp-selection-scissors').hide();
}