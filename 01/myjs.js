// Toggle a mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu(){
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class = 'fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class = 'fas fa-times'></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);

//Submenu

const items = document.querySelectorAll('.item');

function toggleItem() {
    if (this.classList.contains('dropdown-content-active')){
        this.classList.remove('dropdown-content-active');
    } else if (menu.querySelector('dropdown-content-active')) {
        menu.querySelector("dropdown-content-active").classList.remove("dropdown-content-active");
        this.classList.add("dropdown-content-active");
    } else {
        this.classList.add("dropdown-content-active");
    }
}

for (let item of items) {
    if (item.querySelector('.dropdown-content')) {
        item.addEventListener('click', toggleItem, false);
    }
}

// Close Submenu From Anywhere
function closeSubmenu(event) {
    let isClickInside = menu.contains(event.target);

    if(!isClickInside && menu.querySelector(".dropdown-content-active")) {
        menu.querySelector(".dropdown-content-active").classList.remove("dropdown-content-active");
    }
}

document.addEventListener('click', closeSubmenu, false);