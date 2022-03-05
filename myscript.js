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

let thumbnailsWrapper = document.querySelector('#thumbnails-img');

let mainImage = document.getElementById('main-img')

function createNewSquare (){
    let newBox = document.createElement('div');
    return newBox;
}


const next = document.getElementById('down-button');

let activeElement = 1;

for (let i = 0; i < items.length; i++) {
    let addedBox = createNewSquare();
    mainImage.appendChild(addedBox);
    addedBox.classList.add('main-img-wrapper', 'd-none')
    addedBox.innerHTML += `<img src=${items[i]}>` ;

    let addedThumbBox = createNewSquare();
    thumbnailsWrapper.appendChild(addedThumbBox);
    addedThumbBox.classList.add('my-thumbnails')
    addedThumbBox.innerHTML += `<img id="thumbnails-img-element" src=${items[i]} alt="">` ; 
};

next.addEventListener('click', function (){
    document.getElementsByClassName('main-img-wrapper')[activeElement].classList.remove('d-none')


    if( activeElement === items.length - 1){
        activeElement = 0;
    } else {
        activeElement++;
    }

    document.getElementsByClassName('my-thumbnails')[activeElement].classList.add('clicked');
    
})