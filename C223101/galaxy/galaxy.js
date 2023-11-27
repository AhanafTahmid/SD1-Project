// Rotation Velocity
function changeVel(value) {
    document.getElementById("all-galaxy").style.animationDuration =
        301 - value.value + "s";
    //console.log(value.value);
    //console.log(value);
    document.getElementById("value").innerHTML = calk(value.value) + "%";
}

//getting perchantage
function calk(val) {
    let vo = (val / 300) * 100;
    return vo.toFixed(0);//printing 0 number of digits
}



// ZOOM
function changeScale(value) {
    document.getElementById("planet").style.transform = `scale(${value.value})`;//template literal in JavaScript, animating using css
    let uy = (value.value * 100) / 1.2;//cause value 1-1.20
    document.getElementById("valueZomm").innerHTML = uy.toFixed(0) + "%";//initially 90%, from valueZomm
}







//using switch, not necessary but doing anyway for further understanding
//*************************------Andromeda------***************************
function changePlanet(v) {
    // go to previous or next planet
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'index.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'index.html';
        }
            break;
        case "homeeeeeee": {
            window.location.href = 'index.html';
        }
            break;
    }
}





//*************************------Andromeda------***************************
function changePlanet(v) {
    // go to previous or next planet
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'index.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'index.html';
        }
            break;
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}