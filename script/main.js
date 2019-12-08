navbar = document.getElementById("navbar");

start_pos = 0;
new_pos = start_pos;

window.onscroll = function() {
    
    last_pos = new_pos;
    new_pos = window.scrollY;

    if (new_pos > start_pos) {
        navbar.classList.add("bg-light");
    } else if (new_pos == start_pos) {
        navbar.classList.remove("bg-light");
    }

    if (new_pos < last_pos) {
        navbar.classList.add("fixed-top");
        this.document.getElementById("content").classList.add("content-scroll");
    } else {
        navbar.classList.remove("fixed-top");
        this.document.getElementById("content").classList.remove("content-scroll");
    }
}