const secondHand = document.querySelector('.second-hand');
const minHnad = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (seconds === 0) {
        secondHand.style.transition = 'none';
        minHnad.style.transition = 'none';
        hourHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.32, 0.58, 1)';
        minHnad.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.32, 0.58, 1)';
        hourHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.32, 0.58, 1)';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHnad.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setDate();
setInterval(setDate, 1000);