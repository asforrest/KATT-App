$(document).ready(function(){
    // Materialize components
    $('.sidenav').sidenav({edge: "right"});
    $('.modal').modal();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "yyyy - mm - dd",
        yearRange: 100,
        firstDay: 0,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
  });


// The following code was adapted from an answer found on stackoverflow. The solution was
// giving by Bakudan and later edited by LWC. Here is the original source:
// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript

// CASE STUDY: The following also presents and interesting case as the original code
// counted the seconds inline. It was a case of refactoring going to far and losing
// some of the functionality.

// By splitting it out I was able to create a 'running' variable and from there ther
// buttons could control it by either turning 'running' on or off.

var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        if (running){
            sec ++}
        $("#seconds").html(pad(sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);

var running = false

// Creation of running functions

function restartTimer(){
    running = true;
    sec = 0;
}

function stopTimer(){
    running = false;
    sec = 0;
}

// Stopwatch button triggers

function currentlyStopped() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-ban"></i> No Activity Selected</h1>';
    stopTimer()
}

function currentlyWorking() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-briefcase"></i>  Working</h1>';
    restartTimer()
}

function currentlySleeping() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-bed"></i>  Sleep</h1>';
    restartTimer()
}

function currentlyChildcaring() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-baby"></i>  Childcare</h1>';
    restartTimer()
}

function currentlyStudying() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-graduation-cap"></i>  Study</h1>';
    restartTimer()
}

function currentlyStrengthing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-dumbbell"></i>  Strength</h1>';
    restartTimer()
}

function currentlyCardioing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-running"></i>  Cardio</h1>';
    restartTimer()
}

function currentlyMusicing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-guitar"></i>  Play Music</h1>';
    restartTimer()
}

function currentlyCleaning() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-soap"></i>  Cleaning</h1>';
    restartTimer()
}

function currentlyTraveling() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-compass"></i>  Travel</h1>';
    restartTimer()
}

function currentlyWatching() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-film"></i>  Watching</h1>';
    restartTimer()
}

function currentlyVideogaming() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-gamepad"></i>  Games</h1>';
    restartTimer()
}

function currentlyOthering() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-random"></i>  Other</h1>';
    restartTimer()
}