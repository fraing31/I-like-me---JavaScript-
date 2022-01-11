let addLike = 9;
let addLike1 = 12;
let addLike2 = 9;

let addLikeAll = document.querySelectorAll(".like");

console.log(addLikeAll);

function userLike() {

    for( let k = 0; k < addLikeAll.length; k++ ) {

        addLikeAll[k].innerText = addLikeAll + "like(s)";
    
}
