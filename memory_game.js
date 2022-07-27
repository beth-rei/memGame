const cardArray = [
    {
        name: 'cat1',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
    },
    {
        name: 'cat2',
        img: 'https://cdn.theatlantic.com/thumbor/mORGMuM_Oh1Rc3YJzLc3bwoApIY=/1071x0:3826x2755/1080x1080/media/img/mt/2021/07/GettyImages_473437806_copy/original.jpg',
    },
    {
        name: 'cat3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2c36gO1DihNXRE9_1E375oG0MiUjd_9UWMA&usqp=CAU',
    },
    {
        name: 'cat4',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-cost-less-1559228480.jpg',
    },
    {
        name: 'cat5',
        img: 'https://geniusvets.s3.amazonaws.com/gv-blog/2020/1/cat-teeth.jpg',
    },
    {
        name: 'cat6',
        img: 'https://image.petmd.com/files/2020-10/1-meow-reasons-414080974.gif',
    },
    {
        name: 'cat1',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*',
    },
    {
        name: 'cat2',
        img: 'https://cdn.theatlantic.com/thumbor/mORGMuM_Oh1Rc3YJzLc3bwoApIY=/1071x0:3826x2755/1080x1080/media/img/mt/2021/07/GettyImages_473437806_copy/original.jpg',
    },
    {
        name: 'cat3',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2c36gO1DihNXRE9_1E375oG0MiUjd_9UWMA&usqp=CAU',
    },
    {
        name: 'cat4',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-cost-less-1559228480.jpg',
    },
    {
        name: 'cat5',
        img: 'https://geniusvets.s3.amazonaws.com/gv-blog/2020/1/cat-teeth.jpg',
    },
    {
        name: 'cat6',
        img: 'https://image.petmd.com/files/2020-10/1-meow-reasons-414080974.gif',
    },
]

cardArray.sort(() => 0.5 - Math.random()); // easy way to sort randomly/shuffle

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src',"https://i.etsystatic.com/18460845/r/il/ad3036/1803249808/il_1588xN.1803249808_puql.jpg");
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match!');
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src',"https://i.etsystatic.com/18460845/r/il/ad3036/1803249808/il_1588xN.1803249808_puql.jpg");
        cards[optionTwoId].setAttribute('src',"https://i.etsystatic.com/18460845/r/il/ad3036/1803249808/il_1588xN.1803249808_puql.jpg");
        alert('You clicked the same image!');
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','https://media.istockphoto.com/vectors/paw-print-vector-id181885044?k=20&m=181885044&s=612x612&w=0&h=-nE-83hZZSUjgM_xudQRcho-V72LkY0rJQ6QHegN6bk=');
        cards[optionTwoId].setAttribute('src','https://media.istockphoto.com/vectors/paw-print-vector-id181885044?k=20&m=181885044&s=612x612&w=0&h=-nE-83hZZSUjgM_xudQRcho-V72LkY0rJQ6QHegN6bk=');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        resultDisplay.innerHTML = cardsWon.length;
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src',"https://i.etsystatic.com/18460845/r/il/ad3036/1803249808/il_1588xN.1803249808_puql.jpg");
        cards[optionTwoId].setAttribute('src',"https://i.etsystatic.com/18460845/r/il/ad3036/1803249808/il_1588xN.1803249808_puql.jpg");
        alert('Sorry try again');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratulations you found them all!' //can also use .innerHTML
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

