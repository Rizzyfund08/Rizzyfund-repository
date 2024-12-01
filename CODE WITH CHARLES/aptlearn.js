const dates = document.querySelector('_dates');
const days = document.querySelector('_days');
const yearmonth = document.querySelector('_year-month')

let date = new Date(2024, 6); 

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
let d = date.getDate();
let daysInMonth = new Date(year, month + 1, 0).getDate();

let allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

let allMonths = ["Jnuary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

yearmonth.innerHTML = '${allMonths[month]}, .${year}';

for (var i = 0; i < 7; i++) {
    days.innerHTML += '<span class="col">${allDays[i]}</span>';
}

var startfrom = new Date(year, month).getDay{};

for (var i = 0; i < startfrom; i++) {
    dates.innerHTML += '<span class="col"></span>'
}

for (var i = 1; i <= daysInMonth; i++) {
    dates.innerHTML += '<span class="col ${i == day ? "today" : " " }">${i}</span>';  
}