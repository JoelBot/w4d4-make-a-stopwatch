
// global variables
var timer
var timeCounter = 0
var readout = document.getElementById('readout')
var paused = true
var colorAugmentator = 0
var resetTimeoutReset
var timerMin = 0
var timerSec = 0
var timerTenth = 0
var placeholderSec = ''
var placeholderMin= ''



// function mechanics
function startTimer() {
    timer = setInterval(incrementTimer, 100)
}

function incrementTimer() {
    drawTime()
    timeCounter++
    time_o_maticConversion_o_tron(timeCounter)
    textColorAugmentations()
}

function drawTime() {
    readout.setAttribute('value', placeholderMin + timerMin + ':' + placeholderSec + timerSec + '.' + timerTenth)
}
function drawTimeCard(input) {
    var timeCard = document.createElement('p')
    timeCard.innerHTML = '&nbsp;' + placeholderMin + timerMin + ':' + placeholderSec + timerSec + '.' + timerTenth
    // console.dir(timeCard)
    input.appendChild(timeCard)
}
function textColorAugmentations() {
    if (colorAugmentator >= 255) {
        colorAugmentator = 0
    }
    else {
        colorAugmentator++
    }
    readout.style.color = 'rgba(' + colorAugmentator + ',0,0,1)'
    // 'rgba(' + colorAugmentator + ',' + colorAugmentator + ',' + colorAugmentator + ',1)'
}

function start() { // starts the timer and clears timeout reset
    startTimer()
    document.getElementById('start').innerHTML = 'Pause'
    readout.classList.remove('flash', 'animated', 'infinite')
    paused = false
    clearTimeout(resetTimeoutReset)
}

function stop() { // stops the timer and begins 15 second timeout reset
    clearInterval(timer)
    document.getElementById('start').innerHTML = 'Continue'
    resetTimeoutReset = setTimeout(function() {
        drawTimeCard(document.getElementById('previousTimes'))
        resetTimer()
        document.getElementById('start').innerHTML = 'Start'
    }, 15000)
    readout.classList.add('flash', 'animated', 'infinite')
    paused = true
}

function resetTimer() {
    timeCounter = 0
    timerMin = 0
    timerSec = 0
    timerTenth = 0
    incrementTimer()
}
function time_o_maticConversion_o_tron() {
    if (timeCounter%600 === 0) {
        timerMin++
        if (timerMin < 10) {
            placeholderMin = "0"
        }
    }
    if (timeCounter%10 === 0) {
        timerSec++
        if (timerSec === 60) {
            timerSec = 0
        }
        if (timerSec < 1) {
            placeholderSec = "0"
        }
        else {
            placeholderSec = ''
        }
    }
    if (timeCounter%1 === 0) {
        timerTenth++
        if (timerTenth === 10) {
            timerTenth = 0
        }
        // if (timerTenth < 10) {
        //     placeholderTenth = '0'
        // }
        else {
            placeholderTenth = ''
        }
    }
}
// Event Listener Functions
// Start and pause button
document.getElementById('start').addEventListener('click', function() {

    if (paused) { // this checks if paused is true then starts the timer interval again.  Then toggles the paused boolean in prep for the next click.
        start()
    }
    else { // stops the intercal timer and pauses
        stop()
    }
})

document.getElementById('start').addEventListener('dblclick', function() {
    drawTimeCard(document.getElementById('previousTimes'))
    resetTimer()
})
// Reset button only functions when timer is paused and it restarts the timeCounter to 0
document.getElementById('reset').addEventListener('click', function() {

    if (paused) {//  checks to see if paused flag is true and resets the counter.
        drawTimeCard(document.getElementById('previousTimes'))
        resetTimer()
    }
    else { // stops the intercal timer and pauses

    }
})

// startTimer()
