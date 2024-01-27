
//date page
let date = document.getElementById("date")
setInterval(() => {
    let today = new Date().toDateString();
    date.innerHTML = today;
}, 1000);

