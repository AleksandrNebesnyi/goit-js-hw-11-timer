// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
  timer: document.querySelector('[data-value="days"]'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

// Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков

function pad(value) {
  return String(value).padStart(2, "0");
}

//  - Принимает время в миллисекундах
//  - Высчитывает сколько в них вмещается часов/минут/секунд
//  - Возвращает обьект со свойствами hours, mins, secs
//   - Адская копипаста со стека

// time - разница между targetDate и текущей датой

function getTimeComponents(time) {
  // Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  //  миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  //     Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  //  остатка % и делим его на количество миллисекунд в одном часе
  //  (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  //     Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  //     миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  //  Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  //   миллисекунд в одной секунде (1000)
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

class CountdownTimer {}

// function init() {
//   const time = getTimeComponents(0);
//   //   onTick(time);
// }
let intervalId = null;
const targetDate = new Date("Oct 25, 2021");
let isActive = false;

function start() {
  if (isActive) {
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = targetDate - currentTime;
    const { days, hours, mins, secs } = getTimeComponents(deltaTime);
    updateClockInterface({ days, hours, mins, secs });
  }, 1000);
}

// * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
function updateClockInterface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}
function init() {
  updateClockInterface(getTimeComponents(targetDate - Date.now()));
}
start();
