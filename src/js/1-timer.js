import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate = null;
let currentData = null;
let timerId = null;

const btnStartEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const inputEl = document.querySelector('#datetime-picker');

btnStartEl.addEventListener('click', handlClickStart);
btnStartEl.setAttribute('disabled', "");


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < options.defaultDate) {
            iziToast.error({
                message: `Please choose a date in the future`,
                position: 'topRight'
            });
        } else {
            btnStartEl.removeAttribute('disabled');
            userSelectedDate = selectedDates[0].getTime();
        }
    },
};


flatpickr(inputEl, options);

function handlClickStart() {
    timerId = setInterval(() => {
        currentData = Date.now();
        const timer = userSelectedDate - currentData;
        if (timer <= 0) {
            clearInterval(timerId);
        } else {
            updateTimer(convertMs(timer));
        }
    }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}