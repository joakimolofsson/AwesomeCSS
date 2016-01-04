//hamburgerBarOne
document.querySelector('.hamburgerBarOne').addEventListener( "click", function() {
    this.classList.toggle('active');
});



//hamburgerBarTwo
document.querySelector('.hamburgerBarTwo').addEventListener( "click", function() {
    if(this.classList.contains('active')) {
        this.classList.add('unActive');
        this.classList.remove('active');
    }
    else if (this.classList.contains('active')) {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
    else {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
});





//hamburgerBarThree
document.querySelector('.hamburgerBarThree').addEventListener( "click", function() {
    if(this.classList.contains('active')) {
        this.classList.add('unActive');
        this.classList.remove('active');
    }
    else if (this.classList.contains('active')) {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
    else {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
});





//hamburgerBarFour
document.querySelector('.realHamburgerBar').addEventListener( "click", function() {
    if(this.classList.contains('active')) {
        this.classList.add('unActive');
        this.classList.remove('active');
    }
    else if (this.classList.contains('active')) {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
    else {
        this.classList.add('active');
        this.classList.remove('unActive');
    }
});





//blueRangeBox
function blueRangeBox() {
    var blueRangeBox = document.getElementById('blueRangeBox').value;
    //console.log(blueRangeBox);
}





//powerRanger
function powerRanger() {
    var powerRangerInput = document.getElementById('powerRangerInput').value;
    //console.log(powerRangerInput);
}





//redRange
function redRange() {
    var redRange = document.getElementById('redRangeIn').value,
        redRangeOut = document.getElementById('redRangeOut');
    
    redRangeOut.innerHTML = redRange;
}





//raging
function raging() {
    var ragingInput = document.getElementById('ragingInput').value;
    console.log(ragingInput);
}







