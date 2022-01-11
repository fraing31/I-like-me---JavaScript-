var addLike = 3;
var addLikeElement = document.querySelector( ".like");

console.log(addLikeElement);

function countLike() {
    addLike ++;
    addLikeElement.innerText =  addLike + " like(s)";
    console.log(addLike);
}