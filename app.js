$('.main-slider').slick({
    dots: true
});



//ДЗ к задаче 17
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
}))

// Тут уже урок
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
    if (window.scrollY >= document.documentElement.scrollHeight/2) {
        openModal()
        window.removeEventListener('scroll', scrolling)
    }
}


window.addEventListener('scroll' , scrolling);


// setInterval(openModal, 4000); // будет бесконечно раз срабатывать по такому интервалу
// setTimeout(openModal, 3000); //сработает функция через х-секунд

// class Car {
//     constructor(model, color, year) {
//         this.model = model;
//         this.color = color;
//         this.year = year;
//     }
//     hi = function(){
//         console.log('Hi ' + this.model)
//     }
//     hello = function(){
//         console.log('Hello ' + this.color + " " + this.year)
//     }
// }

// let audi = new Car ('A4' , 'black' , 2008);
// let bmw = new Car ('ES250' , 'white' , 2020);
// let lexus = new Car ('328' , 'grey' , 2011);

// console.log(audi);
// console.log(bmw);
// console.log(lexus);

// audi.hi();
// bmw.hi();
// lexus.hi();

// audi.hello();
// bmw.hello();
// lexus.hello();


let decrementBtns = document.querySelectorAll('.decrement-btn')[0];
let incrementBtns = document.querySelectorAll('.increment-btn')[0];
let productsCount = document.querySelectorAll('.product-quantity')[0];


function Counter(decrementBtn, incrementBtn, inputField){
    //Короткий варіант запису. Якщо ключ === значенню, то можна використати тільки назву ключа;
    this.domRefs = {
        decrementBtn,
        incrementBtn, 
        inputField
    }
    this.toggleButtonState = function(){
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    }
    this.toggleButtonState();


    this.increment = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
    }
    this.decrement = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
    }
    
    this.domRefs.incrementBtn.addEventListener('click' , this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener('click' , this.decrement.bind(this));
}

const counter1 = new Counter(decrementBtns, incrementBtns, productsCount);






