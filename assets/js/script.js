const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const closeBtn = document.querySelector('.js-modal-close')
function showBuyTickets() {
    modal.classList.add('open')
}
function closeBuyTickets() {
    modal.classList.remove('open')
}

// function showBuyTickets() {
//     modal.style.display = 'flex'
// }
// function closeBuyTickets() {
//     modal.style.display = 'none'
// }
// function outsideClick(e) {
//     if(e.target == modal) {
//         closeBuyTickets()
//     }
// }

for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

closeBtn.addEventListener('click', closeBuyTickets)

modal.addEventListener('click', closeBuyTickets)
//viết hàm bên trong không cần đặt tên hàm
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


//mobile

var header = document.getElementById('header')
var mobileMenu = document.getElementById('menu-btn')
var headerHeight = header.clientHeight

//đóng mở menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight
    if(isClosed) {
        header.style.height = 'auto'
    }
    else {
        header.style.height = null
    }
}

//auto hide menu after click
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}

