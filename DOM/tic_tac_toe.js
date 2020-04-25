// sulotion one
// var a = document.querySelector("#a")
// var b = document.querySelector("#b")
// var c = document.querySelector("#c")
// var d = document.querySelector("#d")
// var r = document.querySelector("#r")

// r.addEventListener('click', function() {
//     a.textContent = ' '
//     b.textContent = ' '
//     c.textContent = ' '
//     d.textContent = ' '
// })

// a.addEventListener('click', function() {
//     if (a.textContent == 'x')
//         a.textContent = 'o'
//     else if (a.textContent == 'o')
//         a.textContent = ' '
//     else
//         a.textContent = 'x'
// })

// b.addEventListener('click', function() {
//     if (b.textContent == 'x')
//         b.textContent = 'o'
//     else if (b.textContent == 'o')
//         b.textContent = ' '
//     else
//         b.textContent = 'x'
// })

// c.addEventListener('click', function() {
//     if (c.textContent == 'x')
//         c.textContent = 'o'
//     else if (c.textContent == 'o')
//         c.textContent = ' '
//     else
//         c.textContent = 'x'
// })

// d.addEventListener('click', function() {
//     if (d.textContent == 'x')
//         d.textContent = 'o'
//     else if (d.textContent == 'o')
//         d.textContent = ' '
//     else
//         d.textContent = 'x'
// })


// better method
var restart = document.querySelector("#r")
var cells = document.querySelectorAll("td")

function clear() {
    for (i of cells)
        i.textContent = ''
}

restart.addEventListener('click', clear)

function changeMarker() {
    if (this.textContent == '')
        this.textContent = 'X'
    else if (this.textContent == 'X')
        this.textContent = 'O'
    else
        this.textContent = ''
}

for (i of cells) {
    i.addEventListener('click', changeMarker)
}