import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', handlClick);

function handlClick(event) {
    event.preventDefault();

    let delay = parseInt(event.target.elements.delay.value, 10);
    let state = event.target.elements.state.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            iziToast.success({
                message: `Проміс виконано успішно з затримкою ${delay} мс`,
                position: 'topRight'
            });
        })
        .catch(delay => {
            iziToast.error({
                message: `Проміс відхилено з затримкою ${delay} мс`,
                position: 'topRight'
            });
        });
}



