(function(){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  function apply(theme){
    root.setAttribute('data-theme', theme);
    btn.textContent = theme === 'light' ? '☀️' : '🌙';
  }
  var saved = null;
  try { saved = localStorage.getItem('hashim-theme'); } catch(e) {}
  var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  apply(saved || (prefersLight ? 'light' : 'dark'));
  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    try { localStorage.setItem('hashim-theme', next); } catch(e) {}
  });
})();