let homeScoreEl = document.getElementById("homescore-el")
let homeCount = 0

let guestScoreEl = document.getElementById("guestscore-el")
let guestCount = 0

function homeadd1() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function homeadd2() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function homeadd3() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function guestadd1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guestadd2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guestadd3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}