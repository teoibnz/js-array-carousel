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

for ( i= 0; i > items.length; i++){
    carouselContent += `
    <div class="main-img-wrapper d-none">
        <img id="main-img-element" src="${items[i]}" alt="">
    </div>`
};

const mainImage = document.getElementById('main-img');

mainImage.innerHTML += carouselContent;

const mainImageElement = document.getElementsByClassName('main-img-wrapper');

mainImageElement[0].classList.add('d-inline')
console.log(mainImageElement);



const downButton = document.getElementById('down-button');

let activeElement = [0];
downButton.addEventListener('click', function(){
    mainImageElement[activeElement].classList.remove('d-inline');
    activeElement++;
    mainImageElement[activeElement].classList.add('d-inline');
});

