const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null;

document.getElementById('start').addEventListener(
  'click',
  function () {
    if (intervalId !== null) return;
    intervalId = setInterval(() => {
      const body = document.querySelector('body');
      body.style.backgroundColor = randomColor();
    }, 1000);
  },
  false
);

document.getElementById('stop').addEventListener(
  'click',
  function () {
    clearInterval(intervalId);
    intervalId = null;
  },
  false
);
