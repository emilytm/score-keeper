let totalEl = document.getElementById("total-el")
let scoreEl = document.getElementById("score-el")
let roundsEl = document.getElementById("rounds-el")
let currentInc = 1
let roundScore = 0
let runningTotal = 0
let roundNum = 0

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
    roundNum += 1
    roundsEl.textContent = roundNum
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
    roundNum = 0
    document.getElementById("inc").value = currentInc
    totalEl.textContent = runningTotal
    scoreEl.textContent = roundScore
    roundsEl.textContent = roundNum
}