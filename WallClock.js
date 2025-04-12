const hourHand = document.querySelector('.hour-hand') ;
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const numbers = document.querySelectorAll('.number');
const  toggleSecondsButton = document.getElementById('toggle-seconds');
const  toggleNumbersButton = document.getElementById('toggle-numbers');

let showSeconds = true;
let showNumbers = true;

function setDate () {
    const now = new Date () ;
    const seconds = now.getSeconds() ;
    const minutes = now.getMinutes() ;
    const hours = now.getHours() ;

    const secondsDegrees = ( ( seconds / 60 ) * 360 ) + 90 ;
    const minutesDegrees = ( ( minutes / 60 ) * 360 ) + ( ( seconds / 60 ) * 6 ) + 90 ;
    const hoursDegrees = ( ( hours / 12 ) * 360 ) + ( ( minutes / 60 ) * 30 ) + 90 ;

    secondHand.style.transform = ` translate ( -50% , -100% ) rotate ( $ { secondsDegrees } deg ) ` ;
    minuteHand.style.transform = ` translate ( -50% , -100% ) rotate ( $ { minutesDegrees } deg ) ` ;
    hourHand.style.transform = ` translate ( -50% , -100% ) rotate ( $ { hoursDegrees } deg ) ` ;
    
    // Hide the second hand if toggled off 

    if ( ! showSeconds) {
        secondHand.classList.add ('hidden') ;
    } else {
        secondHand.classList.remove ('hidden') ;
    }

    // Hide / Show Numbers

    numbers.forEach ( number => { 
        if ( ! showNumbers ) {
            number.classList.add ('hidden');
        } else {
            number.classList.remove ('hidden');
        }
    } );
}

setInterval( setDate, 1000 ) ; // Update every seconds
setDate() ; // Initial call to set the date immediately

toggleSecondsButton.addEventListener('click', () => {
    showSeconds = !showSeconds;
});

toggleNumbersButton.addEventListener('click', () => {
    showNumbers = !showNumbers; 
    numbers.forEach( number => {
        number.classList.toggle('hidden');
        console.log
    });
});