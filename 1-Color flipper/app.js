const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(' .color');

randomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function() {
    const num = randomNumber();

    document.body.style.background = colors[num];
    color.textContent = colors[num];
} );