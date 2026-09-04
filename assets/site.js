// 目录跟着滚动高亮当前章节。没有目录的页面（首页）自动什么都不做。
(function () {
  var toc = document.querySelector('.toc');
  if (!toc) return;
  var links = Array.prototype.slice.call(toc.querySelectorAll('a'));
  var targets = links
    .map(function (a) {
      var el = document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);
  if (!targets.length) return;

  var current = null;
  function update() {
    // 取「已经滚过顶栏」的最后一个标题。用位置算而不是 IntersectionObserver：
    // 章节高度差别很大，观察器在长章节里会整段没有交点，高亮就断了。
    var line = 100, found = targets[0];
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].el.getBoundingClientRect().top <= line) found = targets[i];
    }
    if (found === current) return;
    if (current) current.link.classList.remove('on');
    found.link.classList.add('on');
    current = found;
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });
  update();
})();
