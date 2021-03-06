$(document).ready(function(){
    // Materialize components
    $('.sidenav').sidenav({edge: "right"});
    $('.modal').modal();
    $('select').formSelect();
    $('.timepicker').timepicker();
    $('.datepicker').datepicker({
        format: "yyyy - mm - dd",
        yearRange: 100,
        firstDay: 0,
        showClearBtn: true,
        autoClose: true,
        i18n: {
            done: "Select"
        }
    });


    
    // The following validation is code is from the Code Institute and solves an issue within
    // Materialize that doesn't use proper validation on drop down menus
    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
  });

// Global Vars
var currentDate = new Date();

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

function startTime(a){
    currentDate = new Date();
    start_time = currentDate.toLocaleTimeString();
    activity_name = a
    /* Page 0 introduction */
}

function writeActivity(){
    currentDate = new Date();
    month = ("0" + (currentDate.getMonth() + 1)).slice(-2)
    day = ("0" + currentDate.getDate()).slice(-2)
    date = currentDate.getFullYear() + " - " + month + " - " + day;
    end_time = currentDate.toLocaleTimeString();
    console.log(day)
    console.log(month)
    console.log(end_time)
    console.log(start_time)
    console.log(activity_name) // MUST DEFINE AT THE TOP LEVEL
    

    const formData = new FormData();

    formData.append('end_time', end_time);
    formData.append('start_time', start_time);
    formData.append('category_name', activity_name);
    formData.append('date', date);


    fetch('/add_activity', {
        method: 'POST', // or 'PUT'
        body: formData
    });
}

// The following was adapted from a W3Schools tutorial. Source:
// https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function showHideActivities() {
    var x = document.getElementById("activity-selection-section");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



// Stopwatch button triggers

function currentlyStopped() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-ban"></i> No Activity Selected</h1>';
    stopTimer();
    writeActivity();
    showHideActivities();
}

function currentlyWorking() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-briefcase"></i>  Working</h1>';
    restartTimer();
    startTime('work');
    showHideActivities();
}

function currentlySleeping() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-bed"></i>  Sleep</h1>';
    restartTimer();
    startTime('sleep');
    showHideActivities();
}

function currentlyChildcaring() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-baby"></i>  Childcare</h1>';
    restartTimer();
    startTime('childcare');
    showHideActivities();
}

function currentlyStudying() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-graduation-cap"></i>  Study</h1>';
    restartTimer();
    startTime('study');
    showHideActivities();
}

function currentlyStrengthing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-dumbbell"></i>  Strength</h1>';
    restartTimer();
    startTime('strength');
    showHideActivities();
}

function currentlyCardioing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-running"></i>  Cardio</h1>';
    restartTimer();
    startTime('cardio');
    showHideActivities();
}

function currentlyMusicing() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-guitar"></i>  Play Music</h1>';
    restartTimer();
    startTime('music');
    showHideActivities();
}

function currentlyCleaning() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-soap"></i>  Cleaning</h1>';
    restartTimer();
    startTime('clean');
    showHideActivities();
}

function currentlyTraveling() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-compass"></i>  Travel</h1>';
    restartTimer();
    startTime('travel');
    showHideActivities();
}

function currentlyWatching() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-film"></i>  Watching</h1>';
    restartTimer();
    startTime('watch');
    showHideActivities();
}

function currentlyGaming() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-gamepad"></i>  Games</h1>';
    restartTimer();
    startTime('game');
    showHideActivities();
}

function currentlyOthering() {
    document.getElementById("current_activity").innerHTML = '<h1 style="font-weight: 600;"><i class="fas fa-random"></i>  Other</h1>';
    restartTimer();
    startTime('Other');
    showHideActivities();
}