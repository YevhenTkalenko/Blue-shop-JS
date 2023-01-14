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
    // if (btn.classList.contains('liked')){
    //     btn.classList.remove('liked')
    // } else {
    //     btn.classList.add('liked')
    // }
    // console.log(e.target);
    e.target.classList.toggle('liked');
    e.target.style.transition = 'all 200ms ease-out';
}))


let btnDetails = document.querySelectorAll('.new-form');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.btn-close');
let sendBtn = document.querySelector('.button-on-form');
sendBtn.addEventListener('click', function(e){
    e.preventDefault();
})

btnDetails.forEach((item) => item.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal)

function openModal(){
    modal.classList.add('show');
}

function closeModal(){
    modal.classList.remove('show');
}


modal.addEventListener('click', function(e){
    if (e.target === modal || e.target === sendBtn) {
        closeModal()
    }
})


function scrolling() {
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight/2) {
        openModal()
    }
}


window.addEventListener('scroll' , scrolling);