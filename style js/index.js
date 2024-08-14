// Option - 2
function bgBlack() {
document.getElementById('main').style.backgroundColor = 'black';    
}

// option - 3 
const blueBTN = document.getElementById('bg-Blue');

blueBTN.addEventListener('click', blueClick)

function blueClick() {
document.getElementById('main').style.backgroundColor = 'blue'  
}


// option - 4: another way
const yellowColor = document.getElementById('bg-yellow');

yellowColor.addEventListener('click', function colorbg() {
    document.getElementById('main').style.backgroundColor = 'yellow';
})


//option - 5:final with anonymous function
const orangeColor = document.getElementById('bg-orange');

orangeColor.addEventListener('click', function () {
    document.getElementById('main').style.backgroundColor = 'orange';
})
