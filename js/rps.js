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
let click = 0;
let winner = '';

$(document).ready(function () {

    hideForGame();

    $('#end').click(function () {
        compScore = 0;
        playerScore = 0;
        shown = '';
        compShown = '';
        playerSelection = '';
        compSelection = '';
        click = 0;
        winner = '';
        reset();
    });

    $('#rock').click(function () {
        if (click == 0) {
            click = 1;
            if (playerScore < 5 && compScore < 5) {
                playerSelection = '.player-selection-rock';
                selectRPS(shown, playerSelection);
                shown = playerSelection;
                compSelection = computerPlay();
                singleRound(playerSelection, compSelection);
            }
            setTimeout(function () {
                click = 0;
                if (playerScore == 5 || compScore == 5) {
                    closeGame();
                }
            }, 1500);
        }
    });

    $('#paper').click(function () {
        if (click == 0) {
            click = 1;
            if (playerScore < 5 && compScore < 5) {
                playerSelection = '.player-selection-paper';
                selectRPS(shown, playerSelection);
                shown = playerSelection;
                compSelection = computerPlay();
                singleRound(playerSelection, compSelection);
            }
            setTimeout(function () {
                click = 0;
                if (playerScore == 5 || compScore == 5) {
                    closeGame();
                }
            }, 1500);
        }
    });

    $('#scissors').click(function () {
        if (click == 0) {
            click = 1;
            if (playerScore < 5 && compScore < 5) {
                playerSelection = '.player-selection-scissors';
                selectRPS(shown, playerSelection);
                shown = playerSelection;
                compSelection = computerPlay();
                singleRound(playerSelection, compSelection);
            }
            setTimeout(function () {
                click = 0;
                if (playerScore == 5 || compScore == 5) {
                    closeGame();
                }
            }, 1500);
        }
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
function hideForGame() {
    $('.player-selection-rock').hide();
    $('.player-selection-paper').hide();
    $('.player-selection-scissors').hide();
    $('.comp-selection-rock').hide();
    $('.comp-selection-paper').hide();
    $('.comp-selection-scissors').hide();
    $('#end').hide();
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
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        };
    };

    if (p == '.player-selection-paper') {
        if (c == '.comp-selection-rock') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            setTimeout(function () {
                $('p#results').text('TIE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        };
    };

    if (p == '.player-selection-scissors') {
        if (c == '.comp-selection-rock') {
            compScore++;
            setTimeout(function () {
                $('p#results').text('COMPUTER SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-paper') {
            playerScore++;
            setTimeout(function () {
                $('p#results').text('YOU SCORE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        } else if (c == '.comp-selection-scissors') {
            setTimeout(function () {
                $('p#results').text('TIE');
                $('p#score').text('YOUR SCORE: ' + playerScore + ' | COMPUTER SCORE: ' + compScore);
            }, 1100);
        };
    };
};

function closeGame() {
    $('#container').slideUp('fast', function () {
        if (playerScore == 5) {
            winner = 'YOU';
        } else {
            winner = 'COMPUTER'
        }
        $('#end').slideDown('slow');
        $('#endWinner').text('THE WINNER IS: ' + winner + '!');
        $('#endScore').text('FINAL SCORE: YOU: ' + playerScore + ' | COMPUTER: ' + compScore);
    });
};

function reset() {
    $('#end').hide('fast', function() {
        $('#container').slideDown('fast');
        hideForGame();
        $('p#results').text('');
        $('p#score').text('');
    });

};