console.log ("javascript file is link sucessfully!");
alert("hello RIDWAN 😂💲❤️🏹👌, communicating with u , with JavaScript interaction.....✌️🤞😉😤")

// Countdown for "Deals of the day "
function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ";  " + minutes + "; " + seconds;

        if (--timer < 0) {
            timer = duration; // Reset for demonstration, in real app, might stop or update 
            // Or set to 0 and display "Deal Ended !"
        }
    }, 1000);
}

window.onload = function () {
    const twentyFourHours = 24 * 60 * 60; // 24 hours in seconds 
    const display = document.querySelector('#countdown');
    if (display) {
        startCountdown(twentyFourHours, display);
    }

    // Example: Add a simple hover effects to departments list items
    const departmentsItems = document.querySelectorAll(".department-list li");
    departmentsItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#f0f0f0';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    // Example : Implements a basic Dropdown for "All Categories" or "Home"
    // (This would require more HTML structure for the Dropdown contest) 
    const allCategoriesSelect = document.querySelector('.search-bar select');
    if (allCategoriesSelect) {
        allCategoriesSelect.addEventListener('change', (event) => {
            console.log('Selected category:', event.target.value);
            // You Could redirects or filter products based on eection
        });
    }

    // You Would add Javascripts for:
    // - Search functinality (when Search button is Clicked)
    // - Handling clicks on Cart/Wishlist Icons (e.g.. Opening a mini-cart)
    // -Any image carousels (if the hero section was a slider )
    //  "View All" button functionality
}