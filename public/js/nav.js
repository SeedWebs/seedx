document.addEventListener(
  'click',
  function (e) {
    if (e.target.closest('#navtoggle')) {
      document.body.classList.toggle('nav-open');
    }
    if (e.target.closest('nav a')) {
      document.body.classList.remove('nav-open');
    }
  },
  false
);
