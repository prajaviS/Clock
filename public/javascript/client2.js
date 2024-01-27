//timer page
let cnt = 60;
let timer = document.getElementById("timer");
let intervalid = setInterval(() => {
    cnt--;
    timer.innerHTML = `${cnt}`
    if (cnt == 0) {
        alert("Time's up")
        clearInterval(intervalid)
    }
}, 1000);
