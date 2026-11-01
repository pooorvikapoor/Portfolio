(function () {
  "use strict";

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Project dialog
  var dialog = document.getElementById("project-dialog");
  var body = document.getElementById("dlg-body");
  var lastOpener = null;

  function openProject(button) {
    var tpl = document.getElementById(button.dataset.template);
    if (!tpl || !dialog) return;
    var row = button.closest(".row");
    var rev = row ? getComputedStyle(row).getPropertyValue("--rev") : "";
    dialog.style.setProperty("--rev", rev);
    body.innerHTML = "";
    body.appendChild(tpl.content.cloneNode(true));
    lastOpener = button;
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  document.querySelectorAll(".row-open").forEach(function (btn) {
    btn.addEventListener("click", function () { openProject(btn); });
  });

  if (dialog) {
    dialog.querySelector(".dlg-close").addEventListener("click", function () { dialog.close(); });
    // Click on the dark backdrop closes the dialog
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      body.innerHTML = "";
      if (lastOpener) lastOpener.focus();
    });
  }

  // Contact form: opens the visitor's email app with the message filled in
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var subject = "Portfolio message from " + f.get("name");
      var text = f.get("message") + "\n\nFrom: " + f.get("name") + " (" + f.get("email") + ")";
      window.location.href =
        "mailto:0324pk@gmail.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(text);
    });
  }
})();
