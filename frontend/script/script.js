var h1 = document.getElementById("h1");
h1.style.color = "whitesmoke";
h1.innerHTML = " Selamat Datang Di Web Saya";

let pala = document.querySelectorAll("ul.pala li");
for (let i = 0; i < pala.length; i++) {
    pala[i].style.display = "inline"
}

const a = document.querySelectorAll("ul.pala li a");
for (let y=0; y < a.length; y++) {
    a[y].style.textDecoration = "none"
    a[y].style.color = "whitesmoke"
}
