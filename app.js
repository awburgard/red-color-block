$(document).ready(function() {
    $('#redBtn').on('click', whenIclickTheRedButton);

    $('#blueBtn').on('click', function(){
        blueCount++;
        $('#blueCount').text('Blue Count: ' + blueCount);
        $('#container').append('<div class="box blue"></div>');
    })
    $('#greenBtn').on('click', function (){
        greenCount++;
        $('#greenCount').text('Green Count: ' + greenCount);
        $('#container').append('<div class="box green"></div>');
    })
    $('#yellowBtn').on('click', function (){
        yellowCount++;
        $('#yellowCount').text('Yellow Count: ' + yellowCount);
        $('#container').append('<div class="box yellow"></div>');
    })
});

let redCount = 0;
let blueCount = 0;
let greenCount=0;
let yellowCount =0;

function whenIclickTheRedButton() {
    redCount++;
    $('#redCount').text('Red Count: ' + redCount);
    $('#container').append('<div class="box red"></div>');
}

console.log('Im running outside the document ready!');


/*
function onReady() {
    console.log('Code to run when it loads!');
}

let someFunction = function() {
    console.log('Hey, Im a function!');
}
*/