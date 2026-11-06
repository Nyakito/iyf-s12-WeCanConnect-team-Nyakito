(function () {
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("primary-navigation");

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute("aria-expanded", open ? "false" : "true");
        toggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
        menu.classList.toggle("is-open", !open);
    });
})();
