function clock() {
  let hours = document.getElementById('hour');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = 'AM';

  // Convert 24 Hour Time To 12 Hour with AM PM Indicator
  if (h > 12) {
    h = h - 12;
    let am = 'PM';
  }

  // Add 0 to the beginning of number if less than 10
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}

let interval = setInterval(clock, 1000);
