// first example
// var navi = 'Hey, listen!'
//
// function runsLater() {
//     alert(navi)
// }
// // set timeouts to variables to call and cancel them later
// var firstTimeout = setTimeout(runsLater, 3000) // setTimeout is built into to the window object
// var secondTimeout = setTimeout(function() {
//     alert('Hey, Function!')
// }, 6000)
//
// console.dir(firstTimeout)
// // console.dir(window.setTimeout())
// console.log(secondTimeout
// )
// clearTimeout(firstTimeout) // send in the variable name that holds the timeout and it will cancel the timeout.
// clearTimeout(secondTimeout)

// second example
// This will be helpful for homework for timeout
var actionTimer
document.getElementById('action').addEventListener('click', function() {
    this.innerHTML = "HEY!"
    console.log(actionTimer)
    clearTimeout(actionTimer) // Restarts the timeout 2000 each click so that we don't fight the timer.
    actionTimer = setTimeout(() => {
        this.innerHTML = "LISTEN!"
    }
    , 2000)
})

// third example // todo tidy up this so it stops the timer
var counter = 0
function doThis() {
    counter++
    console.log(counter)
}
var timer

function start() {
    timer = setInterval(doThis, 1000)
}

document.getElementById('action').addEventListener('click', function() {
    clearInterval(timer)
    if (this.innerHTML === 'paused') {
        this.innerHTML = 'pause'
    }
    else {
        this.innerHTML = 'paused'
        start()
    }

})
start()


// fourth example for high accuracy timing (ID games/animations

// var animationID // called globally to keep recaling and incrementing it
// function animationLoop() { // the animation loop
//     var button = document.getElementById('action')
//
//     var width = Number(getComputedStyle(button).width.replace('px', ''))
//
// // console.dir(button
//     if (width >= 200) {
//         width = 0
//     }
//
//     button.style.borderRadius = '50%'
//     button.style.width = width + 1 + 'px'
//     button.style.height = button.style.width
//
//     animationID = requestAnimationFrame(animationLoop) // this is the request to keep doing the loop
//
// }
// animationLoop() // kicks off the function, just runs once.
