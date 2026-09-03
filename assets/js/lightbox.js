(function () {
  var overlay = document.getElementById('lightbox-overlay');
  if (!overlay) return;

  var imageEl = document.getElementById('lightbox-image');
  var captionEl = document.getElementById('lightbox-caption');
  var counterEl = document.getElementById('lightbox-counter');
  var prevBtn = document.getElementById('lightbox-prev');
  var nextBtn = document.getElementById('lightbox-next');
  var closeBtn = document.getElementById('lightbox-close');

  var galleries = {};
  var currentGallery = null;
  var currentIndex = 0;

  function collectGalleries() {
    document.querySelectorAll('[data-gallery]').forEach(function (trigger) {
      var group = trigger.getAttribute('data-gallery');
      var img = trigger.tagName === 'IMG' ? trigger : trigger.querySelector('img');
      if (!img) return;
      if (!galleries[group]) galleries[group] = [];
      var index = galleries[group].length;
      galleries[group].push({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        caption: trigger.getAttribute('data-caption') || img.getAttribute('alt') || ''
      });
      trigger.style.cursor = 'zoom-in';
      trigger.addEventListener('click', (function (g, i) { return function () { open(g, i); }; })(group, index));
      trigger.addEventListener('keydown', (function (g, i) {
        return function (e) {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(g, i); }
        };
      })(group, index));
    });
  }

  function render() {
    var set = galleries[currentGallery] || [];
    if (!set.length) return;
    var item = set[currentIndex];
    imageEl.src = item.src;
    imageEl.alt = item.alt;
    if (captionEl) captionEl.textContent = item.caption;
    if (counterEl) counterEl.textContent = set.length > 1 ? (currentIndex + 1) + ' / ' + set.length : '';
    if (prevBtn) prevBtn.hidden = set.length < 2;
    if (nextBtn) nextBtn.hidden = set.length < 2;
  }

  function open(group, index) {
    currentGallery = group;
    currentIndex = index;
    render();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function next() {
    var set = galleries[currentGallery] || [];
    if (!set.length) return;
    currentIndex = (currentIndex + 1) % set.length;
    render();
  }

  function prev() {
    var set = galleries[currentGallery] || [];
    if (!set.length) return;
    currentIndex = (currentIndex - 1 + set.length) % set.length;
    render();
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', collectGalleries);
  } else {
    collectGalleries();
  }
})();
