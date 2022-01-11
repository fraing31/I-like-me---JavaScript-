let addLike = 9;
let addLike1 = 12;
let addLike2 = 9;

let addLikeAll = document.querySelectorAll(".like");

let span1 = document.querySelector("#NeLike");
let span2 = document.querySelector("#NiLike");
let span3 = document.querySelector("#jiLike");



console.log(addLikeAll);

function userLike() {

    span1.innerText = parseInt(span1.textContent) + 1;

}

function userLike1() {

    span2.innerText = parseInt(span2.textContent) + 1;

}

function userLike2() {

    span3.innerText = parseInt(span3.textContent) + 1;


}