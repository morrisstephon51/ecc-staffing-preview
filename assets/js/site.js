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
