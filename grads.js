
(function () {
  // Rasmlar shu papkada: ./img/Bitiruvchilar/1.jpg ... 100.jpg
  var TOTAL = 126;
  var FOLDER = './img/Bitiruvchilar/';
  var EXT = '.jpg';
 
  // Har bir rasm uchun standart o'lcham (CSS .marquee-track img bilan mos)
  var IMG_WIDTH = 220;
  var IMG_HEIGHT = 220;
 
  // Qatorlar soni (aylanadigan qatorlar)
  var ROW_IDS = ['gradsRow1', 'gradsRow2', 'gradsRow3'];
 
  var all = [];
  for (var i = 1; i <= TOTAL; i++) {
    all.push(i);
  }
 
  // Rasmlarni 3 ta qatorga teng bo'lib beramiz
  var rowCount = ROW_IDS.length;
  var rows = [];
  for (var r = 0; r < rowCount; r++) rows.push([]);
  all.forEach(function (number, idx) {
    rows[idx % rowCount].push(number);
  });
 
  function buildRow(containerId, numbers) {
    var track = document.getElementById(containerId);
    if (!track) return;
    // Uzluksiz aylanish uchun ro'yxatni ikki marta chizamiz (seamless loop)
    var doubled = numbers.concat(numbers);
    doubled.forEach(function (number) {
      var img = document.createElement('img');
      img.src = FOLDER + number + EXT;
      img.alt = 'Hashim School bitiruvchisi';
      img.width = IMG_WIDTH;
      img.height = IMG_HEIGHT;
      // Agar rasm topilmasa, joyni band qilmasin
      img.onerror = function () { img.remove(); };
      track.appendChild(img);
    });
  }
 
  ROW_IDS.forEach(function (id, i) {
    buildRow(id, rows[i]);
  });
})();