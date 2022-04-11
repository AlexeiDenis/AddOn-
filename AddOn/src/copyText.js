let txt = document.getElementById('text');
let btn = document.getElementById('btn')
let usf = document.getElementById('useful')
let x = txt.innerText;
let susf = document.getElementById('usf');
let y= susf.innerText;
function copyAll() {
    navigator.clipboard.writeText(x)
        .then(() => {
            btn.innerText = 'Text Copied!';
        })
        .catch(err => {
            btn.style.color = "red";
            btn.innerText = 'Not Copied!';
        });
}

function copyText () {
    navigator.clipboard.writeText(y)
    .then(() => {
        usf.innerText = 'Text Copied!';
    })
    .catch(err => {
        usf.style.color = "red";
        usf.innerText = 'Not Copied!';
    });
}
btn.addEventListener('click', copyAll);
usf.addEventListener('click', copyText);