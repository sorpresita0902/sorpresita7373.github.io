onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};


let si = document.getElementById("si");
let musica = document.getElementById("musica");

si.addEventListener("click", function () {
  musica.play(); 
});

let no = document.getElementById("no");
no.addEventListener("mousemove", function (e) {
  let x = Math.round(Math.random() * 93);
  let y = Math.round(Math.random() * 93);
  no.style.left = x + "%";
  no.style.top = y + "%";
});

function showLoveMessage() {
  document.getElementById('question').style.display = 'none';
  document.getElementById('loveMessage').style.display = 'block';
  document.getElementById('no').disabled = true;
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});


