// サムネをタップすると、メイン画像が切り替わる（着用／白背景／拡大）。
// 画像は全部あらかじめ置いてあり、is-on を付け替えて見せるだけ（読み込み待ちが出ない）。
document.addEventListener('DOMContentLoaded', function () {
  var thumbs = document.querySelectorAll('.a-thumb[data-target]');
  var views = document.querySelectorAll('.a-img-main .view');
  thumbs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.dataset.target;
      views.forEach(function (v) { v.classList.toggle('is-on', v.dataset.view === key); });
      thumbs.forEach(function (t) { t.classList.toggle('is-on', t === btn); });
    });
  });
});
