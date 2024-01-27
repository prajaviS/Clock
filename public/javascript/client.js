//clock page
let hour = document.getElementById("hour");
let minute = document.getElementById("minute")
let second = document.getElementById("second")
setInterval(() => {
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}, 1000)

