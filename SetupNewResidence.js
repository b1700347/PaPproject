var input = document.querySelector('input'),
      btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var MIN = 1, MAX = 50;
  input.value = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
});