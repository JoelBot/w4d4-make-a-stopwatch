// global variables
var timer
var timeCounter = 0
var readout = document.getElementById('readout')
var paused = true
var colorAugmentator = 0
var resetTimeoutReset

// var timerMin = 0
// var timerSec = 0
// var timerTenth = 0

// function mechanics
function startTimer() {
    timer = setInterval(incrementTimer, 10)
}

function incrementTimer() {
    readout.setAttribute('value',timeCounter)
    timeCounter++
    // time_o_maticConversion_o_tron(timeCounter)
    textColorAugmentations()
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
    paused = false
    clearTimeout(resetTimeoutReset)
}

function stop() { // stops the timer and begins 15 second timeout reset
    clearInterval(timer)
    document.getElementById('start').innerHTML = 'Continue'
    resetTimeoutReset = setTimeout(function() {
        resetTimer()
        document.getElementById('start').innerHTML = 'Start'
    }, 15000)
    paused = true
}

function resetTimer() {
    timeCounter = 0
    incrementTimer()
}
// function time_o_maticConversion_o_tron(timeCount) {
//     while (timeCount >= 0) {
//         if (timeCount%6000) {
//             timerMin += 1
//         }
//         if (timeCount%100) {
//             timerSec += 1
//         }
//         if (timeCount%10) {
//             timerTenth += 1
//         }
//
//     }
//     console.log(timerTenth)
//     console.log(timerSec)
//     console.log(timerMin)
// }
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
    resetTimer()
})
// Reset button only functions when timer is paused and it restarts the timeCounter to 0
document.getElementById('reset').addEventListener('click', function() {

    if (paused) {//  checks to see if paused flag is true and resets the counter.
        resetTimer()
    }
    else { // stops the intercal timer and pauses

    }
})

// startTimer()
