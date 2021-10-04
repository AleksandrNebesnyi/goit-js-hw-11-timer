// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

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

class CountdownTimer {
  constructor({ onTick, TargetDate }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.TargetDate = TargetDate;
  }
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.TargetDate - currentTime;
      const time = getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

function updateClockInterface({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

const timer = new CountdownTimer({
  onTick: updateClockInterface,
  TargetDate: new Date("Oct 18, 2021"),
});

timer.start();
