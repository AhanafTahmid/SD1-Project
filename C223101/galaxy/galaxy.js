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


//C223101





//using switch, not necessary but doing anyway for further understanding
//*************************------Milky way------***************************
function mchangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = '../index.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'andromeda.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}





//*************************------Andromeda------***************************
function achangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'milkyway.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'triangulum.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}



//*************************------Triangulum------***************************
function tchangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'andromeda.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'sombrero-galaxy.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}



//*************************------Sombrero------***************************
function schangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'triangulum.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'black-eye-galaxy.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}


//*************************------Black Eye------***************************
function bchangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'sombrero-galaxy.html';
        }
            break;
        //next
        case ">": {
            window.location.href = 'pinwheel-galaxy.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}


//*************************------Pinwheel------***************************
function pchangeGalaxy(v) {
    // go to previous or next Galaxy
    switch (v) {
        //previous
        case "<": {
            window.location.href = 'black-eye-galaxy.html';
        }
            break;
        //next
        case ">": {
            window.location.href = '../quiz.html';
        }
            break;
        //Home
        case "homeeeeeee": {
            window.location.href = '../index.html';
        }
            break;
    }
}


//C223101
