// const CountdownTimer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     const targetDate = new Date("Oct 25, 2021");
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = targetDate - currentTime;
//       const time = getTimeComponents(deltaTime);
//       updateClockInterface(time);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

// //

// // function init() {
// //   const time = getTimeComponents(0);
// //   //   onTick(time);
// // }

// // let intervalId = null;
// // const targetDate = new Date("Oct 25, 2021");
// // let isActive = false;

// // function start() {
// //   if (isActive) {
// //     return;
// //   }

// //   isActive = true;

// //   intervalId = setInterval(() => {
// //     const currentTime = Date.now();
// //     const deltaTime = targetDate - currentTime;
// //     const { days, hours, mins, secs } = getTimeComponents(deltaTime);
// //     updateClockInterface({ days, hours, mins, secs });
// //   }, 1000);
// // }

// // * - Принимает время в миллисекундах
// //  * - Высчитывает сколько в них вмещается часов/минут/секунд
// //  * - Рисует интерфейс
// //  */
// const targetDate = new Date("Oct 25, 2021");
// function updateClockInterface({ days, hours, mins, secs }) {
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.mins.textContent = `${mins}`;
//   refs.secs.textContent = `${secs}`;
// }
// function init() {
//   updateClockInterface(getTimeComponents(targetDate - Date.now()));
// }
// CountdownTimer.start();
// init();
