let totalEl = document.getElementById("total-el")
let scoreEl = document.getElementById("score-el")
let currentInc = 1
let roundScore = 0
let runningTotal = 0

function increment() {
    roundScore += currentInc
    scoreEl.textContent = roundScore
}

function save() {
    runningTotal += roundScore
    console.log(runningTotal)
    totalEl.textContent = runningTotal
    scoreEl.textContent = 0
    roundScore = 0
}

function decrement() {
    roundScore = roundScore - currentInc
    console.log(currentInc)
    scoreEl.textContent = roundScore
}

function updateIncrement() {
    currentInc = parseInt(document.getElementById("inc").value)
}
function reset() {
    currentInc = 1
    roundScore = 0
    runningTotal = 0
    document.getElementById("inc").value = currentInc
    totalEl.textContent = runningTotal
    scoreEl.textContent = roundScore
}
