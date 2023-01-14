let productsCountEl = document.getElementById('productsCount');
let addToCartBtns = document.querySelectorAll('.btn-last-form');
let counter = 0;

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
       counter++;
       productsCountEl.innerHTML = counter;
    // productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}


let likeBtn = document.querySelectorAll('.like-img');
likeBtn.forEach((btn) => btn.addEventListener('click', function(e){
    // if (btn.classList.contains('liked')) {
    //     btn.classList.remove('liked');
    // } else {
    //     btn.classList.add('liked');
    // }
    // btn.classList.toggle('liked');
}))


