var hone = document.querySelector('#one')
var htwo = document.querySelector('#two')
var hthree = document.querySelector('#three')

hone.addEventListener('mouseover', function() {
    hone.textContent = 'mouse is over me'
    hone.style.color = 'red'
})

hone.addEventListener("mouseout", function() {
    hone.textContent = "HOVER OVER ME"
    hone.style.color = 'black'
})

htwo.addEventListener("click", function() {
    if (htwo.textContent == "CLICK ME!") {
        htwo.textContent = "CLICKED ON"
        htwo.style.color = 'blue'
    } else {
        htwo.textContent = "CLICK ME!"
        htwo.style.color = 'black'
    }
})

hthree.addEventListener("dblclick", function() {
    if (hthree.textContent == "DOUBLE TAP ME") {
        hthree.textContent = "Tapped"
        hthree.style.color = 'orange'
    } else {
        hthree.textContent = "DOUBLE TAP ME"
        hthree.style.color = 'black'
    }
})