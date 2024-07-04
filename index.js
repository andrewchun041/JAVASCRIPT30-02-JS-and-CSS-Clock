const secondHand = document.querySelector('.second-hand');
const minHnad = document.querySelector('.min-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHnad.style.transform = `rotate(${minDegrees}deg)`
    
}

setInterval(setDate, 1000);
