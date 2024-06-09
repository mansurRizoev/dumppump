let btn = document.querySelector('.btn');
console.log(btn)
let audio = document.querySelector('.boom');
btn.addEventListener('click', () => {
    console.log('clicked');
    audio.play();
});

window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
    audio.play();
});