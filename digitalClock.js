let hr = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

let day = new Date()
let perhr = day.getHours() * 30
let permin = day.getMinutes() * 6
let persec = day.getSeconds() * 6

hr.style.transform = `rotateZ(${perhr + (permin / 12)}deg)`
min.style.transform = `rotateZ(${permin}deg)`
sec.style.transform = `rotateZ(${persec}deg)`

setInterval(() => {
  let day = new Date()
  let perhr = day.getHours() * 30
  let permin = day.getMinutes() * 6
  let persec = day.getSeconds() * 6

  hr.style.transform = `rotateZ(${perhr + (permin / 12)}deg)`
  min.style.transform = `rotateZ(${permin}deg)`
  sec.style.transform = `rotateZ(${persec}deg)`

  // suuji

  let dhours = document.getElementById('dhour')
  let dmins = document.getElementById('dmin')
  let dsecs = document.getElementById('dsec')
  let ampm = document.getElementById('ampm')

  let dhr = day.getHours()
  let dmin = day.getMinutes()
  let dsec = day.getSeconds()

  let ampmSwitch = dhr >= 12 ? "PM" : "AM"

  if (dhr > 12) {
    dhr = dhr -12
  }

  dhr = dhr < 10 ? "0" + dhr : dhr
  dmin = dmin < 10 ? "0" + dmin : dmin
  dsec = dsec < 10 ? "0" + dsec : dsec

  dhours.innerHTML = dhr
  dmins.innerHTML = dmin
  dsecs.innerHTML = dsec
  ampm.innerHTML = ampmSwitch
})