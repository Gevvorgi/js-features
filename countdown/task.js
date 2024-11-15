const timeControl = document.getElementById("timer").textContent;

function interval(n){
    if(n > 0) {
        n -= 1;
        setTimeout(interval, 1000, n);
    }
    document.getElementById("timer").innerText = n;
};

interval(timeControl);