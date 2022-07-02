targetItemHome = document.getElementById("target-item-home")
targetItemGuest = document.getElementById("target-item-guest")

let count = 0

function homeOne() {
    count += 1
    targetItemHome.textContent = count
}

function homeTwo() {
    count += 2
    targetItemHome.textContent = count
}

function homeThree() {
    count += 3
    targetItemHome.textContent = count
}

function guestOne() {
    count += 1
    targetItemGuest.textContent = count
}

function guestTwo() {
    count += 2
    targetItemGuest.textContent = count
}

function guestThree() {
    count += 3
    targetItemGuest.textContent = count
}

/**
 * **Strtch goals that I hope to acheive**
 * 
 * PS: Only if you want to go abouve and beyond
 * 1) Add a "New Game button"
 * 2) Highlight the leader
 * 3) Add a few more counters (e,g period, fouls, timer)
 * 4) Change the design
 * 
`**/