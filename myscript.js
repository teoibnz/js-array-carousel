const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// let thumbnailsWrapper = document.getElementById('thumbnails-img')


let carouselContent = '';

for ( i = 0; i < items.length; i++){
    carouselContent += `
    <div id="img-element d-none">
        <img id="main-img-element" src="${items[i]}" alt="">
    </div>`
};

const mainImage = document.getElementById('main-img');

mainImage.innerHTML += carouselContent;

let carouselElement = document.getElementById('main-img-wrapper');

carouselElement[0].classList.add('d-block');
console.log(carouselElement);



const downButton = document.getElementById('down-button');

let activeElement = [0];
downButton.addEventListener('click', function(){
    carouselElement[activeElement].classList.add('d-none');
    activeElement++;
    carouselElement[activeElement].classList.add('d-block');
});

