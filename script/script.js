const flipContainer = document.querySelectorAll(".flip-container");
const audio = new Audio("./sound/ok.mp3");
let data = ''
let data_2 = ''


const addEvent = () => {
    flipContainer.forEach((item) => {
        item.addEventListener("click", (event) => {
            audio.pause()
            item.classList.toggle("flip")
            item.classList.add('bloqueada');

            if (!data) data = item.dataset.targ;
            else data_2 = item.dataset.targ;

            compare(item);
        });
    });
}

addEvent()


const compare = (item) => {
    if (data == data_2) {
        document.querySelectorAll(`[data-targ="${data}"]`).forEach((d) => { d.classList.add("active") });
        audio.play();
        data = '';
        data_2 = '';        
    } else if (data_2) {
        if (data !== data_2) {
            setTimeout(() => {
                flipContainer.forEach((item) => {
                    item.classList.remove("flip");
                    item.classList.remove("bloqueada")
                });
            }, 1000)
        }        
        data = '';
        data_2 = ''
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i> 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));        
        [array[i], array[random]] = [array[random], array[i]];       
    }
}

const setContainer = (flipArray) => {
    const gameContainer = document.querySelector('.game');
    flipArray.forEach(container => {
        gameContainer.appendChild(container);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const flipArray = Array.from(flipContainer);

    shuffleArray(flipArray);
    
    setContainer(flipArray);

});






