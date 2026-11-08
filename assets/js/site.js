// Elite Career Compass -- mobile nav toggle
(function () {
  var toggle = document.getElementById('nav-toggle');
  var panel = document.getElementById('mobile-nav');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', function () {
    var open = panel.hasAttribute('hidden');
    if (open) {
      panel.removeAttribute('hidden');
    } else {
      panel.setAttribute('hidden', '');
    }
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// FormSubmit needs the exact submitting page URL in _url -- browsers' default
// strict-origin-when-cross-origin referrer policy strips this on cross-domain
// POSTs, which FormSubmit's own docs flag as a cause of failed/undelivered
// submissions. Set it from the real page at submit time so it always matches
// wherever the form is actually hosted (preview or production).
(function () {
  document.querySelectorAll('form .js-form-url').forEach(function (el) {
    el.value = window.location.href;
  });
})();

// FormSubmit's _next redirect has the same cross-domain trap as _url above: a
// hardcoded absolute URL points at whichever host the template was authored
// on, so a submission from any other deployment (production vs preview)
// bounces the visitor to the wrong site after they submit. Rebuild it from the
// submitting page's own origin; the hardcoded value stays as the no-JS
// fallback. data-thanks holds the site-root-relative thanks path.
(function () {
  document.querySelectorAll('form .js-form-next').forEach(function (el) {
    var root = window.location.pathname
      .replace(/index\.html?$/, '')
      .replace(/[^/]+\/?$/, '');
    el.value = window.location.origin + root + el.getAttribute('data-thanks');
  });
})();
