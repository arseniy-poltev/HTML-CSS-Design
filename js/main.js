/* Menu Collapse */
document.querySelectorAll("#menu .dropdown > button").forEach(function(e, i) {
    e.addEventListener('click', function(){
        document.querySelectorAll("#menu .dropdown > button").forEach((e) => {
            var panel = e.nextElementSibling;
            if (e === this) {
                e.classList.toggle("active");
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            } else {
                e.classList.remove("active");
                panel.style.maxHeight = null;
            }
        });
    });
});

/* Toggle Menu */
document.getElementById("open-menu").addEventListener("click", function() {
    document.getElementById("fixed-menu").classList.add("show");
});
document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("fixed-menu").classList.remove("show");
});

/* Accordion */
document.querySelectorAll(".accordion .accordion-button").forEach(function(e, i){
    e.addEventListener('click', function(){
        document.querySelectorAll(".accordion .accordion-button").forEach((e) => {
            var panel = e.parentElement.nextElementSibling;
            if (e === this) {
                e.classList.toggle("active");
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            } else {
            	e.classList.remove("active");
                panel.style.maxHeight = null;
            }
        });
    });
});

/* Scrolling Section Menu */
document.querySelectorAll("#menu a").forEach(function(e, i){
    e.addEventListener('click', function(){
        document.querySelectorAll("#menu a").forEach((e) => {
            if (e === this) {
                e.classList.add("active");
            } else {
            	e.classList.remove("active");
            }
        });
    });
});

/* Toggle Join Presale */
document.getElementById("open-join-presale").addEventListener("click", function() {
    document.getElementById("fixed-join-presale").classList.add("show");
    document.body.style.overflow="hidden";
});
document.getElementById("close-join-presale").addEventListener("click", function() {
    document.getElementById("fixed-join-presale").classList.remove("show");
    document.body.style.overflow="auto";
});

/* Sticky Navbar */
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.getElementById("fixed-join-presale").classList.add("desktopTop");
        document.getElementById("fixed-join-presale").classList.add("mobileTop");
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("fixed-join-presale").classList.remove("desktopTop");
        document.getElementById("fixed-join-presale").classList.remove("mobileTop");
    }
}