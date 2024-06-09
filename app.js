
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
});

/////////
let arr = [123, true, {}]
arr[arr.length] = "Hi mr"
arr[arr.length] = [1, 2, 3]
console.log(arr)
arr.push('hi mr Dev')
console.log(arr)
arr.unshift("first el")
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.includes(123))
let arr = [1, 2, 3, 4];
arr.forEach((el) => {
    console.log(el * 2)
})
let res = arr.map((x) => x * 2)
// console.log(arr.find(x=>x>5))
let res3 = arr.concat([5, 6, 7, 8, 9])

console.log(res3)
