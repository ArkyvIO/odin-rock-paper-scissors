/*  
    0 = Rock
    1 = Paper
    2 = Scissors
*/

let compScore = 0;
let playerScore = 0;
let shown = '';
let compShown = '';
let playerSelection = '';
let compSelection = '';

$(document).ready(function () {

    hideAll();

    $('#rock').click(function () {
        playerSelection = '.player-selection-rock';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
        compSelection = computerPlay();
        singleRound(playerSelection, compSelection);
    });

    $('#paper').click(function () {
        playerSelection = '.player-selection-paper';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
        compSelection = computerPlay();
        singleRound(playerSelection, compSelection);
    });

    $('#scissors').click(function () {
        playerSelection = '.player-selection-scissors';
        selectRPS(shown, playerSelection);
        shown = playerSelection;
        compSelection = computerPlay();
        singleRound(playerSelection, compSelection);
    });

});

// Show selection for player
function selectRPS(s, t) {
    if (s !== '') {
        $(s).hide('fast', function () {
            $(t).show("slide", { direction: "down" }, 1000);
        });
    } else {
        $(t).show("slide", { direction: "down" }, 1000);
    }
};

// Hide all selections until needed
function hideAll() {
    $('.player-selection-rock').hide();
    $('.player-selection-paper').hide();
    $('.player-selection-scissors').hide();
    $('.comp-selection-rock').hide();
    $('.comp-selection-paper').hide();
    $('.comp-selection-scissors').hide();
};

// Roll random selection for computer
function computerPlay() {
    let compPlay = (Math.floor(Math.random() * 3));
    switch (compPlay) {
        case 0:
            if (compShown == '') {
                compShown = ('.comp-selection-rock');
                $(compShown).show("slide", { direction: "up" }, 1000);
            } else {
                $(compShown).hide('fast', function () {
                    compShown = ('.comp-selection-rock');
                    $(compShown).show("slide", { direction: "up" }, 1000);
                });
            }
            return '.comp-selection-rock';
        case 1:
            if (compShown == '') {
                compShown = ('.comp-selection-paper');
                $(compShown).show("slide", { direction: "up" }, 1000);
            } else {
                $(compShown).hide('fast', function () {
                    compShown = ('.comp-selection-paper');
                    $(compShown).show("slide", { direction: "up" }, 1000);
                });
            }
            return '.comp-selection-paper';
        case 2:
            if (compShown == '') {
                compShown = ('.comp-selection-scissors');
                $(compShown).show("slide", { direction: "up" }, 1000);
            } else {
                $(compShown).hide('fast', function () {
                    compShown = ('.comp-selection-scissors');
                    $(compShown).show("slide", { direction: "up" }, 1000);
                });
            }
            return '.comp-selection-scissors';
    }
};

// Play a single round of RPS
function singleRound(p, c) {
    if (p == '.player-selection-rock') {
        if (c == '.comp-selection-rock') {
            setTimeout(function () {
                $('p#results').text('TIE');
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
            }, 1100);
        };
    };

    if (p == '.player-selection-paper') {
        if (c == '.comp-selection-rock') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            setTimeout(function () {
                $('p#results').text('TIE');
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
            }, 1100);        };
    };

    if (p == '.player-selection-scissors') {
        if (c == '.comp-selection-rock') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            setTimeout(function () {
                $('p#results').text('TIE');
            }, 1100);
        };
    };
};