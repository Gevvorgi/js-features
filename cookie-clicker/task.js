const clickerCounter = document.getElementById("cookie");
const cookies = document.getElementById("cookie");

clickerCounter.addEventListener('click', function() {
    let clicks = clickerCounter.textContent++;
    document.getElementById("clicker__counter").innerText = clicks;

    if(clicks % 2 == 0){
        cookies.width = 150;
    } else {
        cookies.width = 200;
    };

});



