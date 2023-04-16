//function using 'for' loop for countdown
// ADDED CHANGE ORDER REQUEST FOR HALFWAY ON COUNTDOWN
function countDown() 
//alert 
{alert("COUNTDOWN WILL NOW COMMENCE!")
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = " Blastoff in: " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}

