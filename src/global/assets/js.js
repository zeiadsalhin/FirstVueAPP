const button = document.querySelector("#menub"),
  menu = document.querySelector("#menu");
function menuf() {
  menu.classList.toggle("active"),
    button.classList.toggle("change"),
    menu.classList.toggle("height"),
    menu.classList.contains("active")
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
}

// const b1 = document.querySelector("#control1")
// const b2 = document.querySelector("#control2")
// const light = document.querySelector("#light")
// const water = document.querySelector("#water")
// const custom = document.querySelector("#custom")


// b1.addEventListener('click', () => {
//   setTimeout(() => {
//     if (b1.innerHTML === 'ايقاف') {
//       b1.innerHTML = ('تشغيل')
//       b1.classList.remove("bg-red-700")
//       b1.classList.toggle("bg-green-700")
//       light.innerHTML = ('متوقف')
//       light.classList.add('text-red-700')
//     } else if (b1.innerHTML === 'تشغيل') {
//       b1.innerHTML = ('ايقاف')
//       b1.classList.remove("bg-green-700")
//       b1.classList.toggle("bg-red-700")
//       light.innerHTML = ('مفعل')
//       light.classList.remove('text-red-700')
//       light.classList.add('text-green-600')
//     }
//   }, 1000);
// });
// b2.addEventListener('click', () => {
//   setTimeout(() => {
//     if (b2.innerHTML === 'ايقاف') {
//       b2.innerHTML = ('تشغيل')
//       b2.classList.remove("bg-red-700")
//       b2.classList.toggle("bg-green-700")
//       water.innerHTML = ('متوقف')
//       water.classList.add('text-red-700')
//     } else if (b2.innerHTML === 'تشغيل') {
//       b2.innerHTML = ('ايقاف')
//       b2.classList.remove("bg-green-700")
//       b2.classList.toggle("bg-red-700")
//       water.innerHTML = ('مفعل')
//       water.classList.remove('text-red-700')
//       water.classList.add('text-green-600')
//     }
//   }, 1000);
// });
// function customf() {
//   if (custom.innerHTML === 'تلقائي') {
//     custom.innerHTML = ('مخصص')
//     custom.classList.remove("text-green-600")
//     custom.classList.toggle("text-orange-500")
//   }
// }


