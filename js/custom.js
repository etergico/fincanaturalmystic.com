
$(document).ready(function () {
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
});
/* ============================================================
   Sidenav
 * ============================================================*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).on('click', function (e) {
    if ($(e.target).closest("#mySidenav, .slide-menu").length === 0) {
        document.getElementById("mySidenav").style.width = "0";
    }
});
/* ============================================================
   Onscroll
 * ============================================================*/
window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

$(function () {
    $(".scroll").click(function () {
        $("html,body").animate({
            scrollTop: $(".top").offset().top
        }, "1000");
        return false
    })
})
/* ============================================================
   Scroll to Top
 * ============================================================*/
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) { 
        $('#return-to-top').fadeIn(200); 
    } else {
        $('#return-to-top').fadeOut(200); 
    }
});
$('#return-to-top').click(function () {


    $('body, html').animate({
        scrollTop: 0 
    }, 500);
});


// mensaje de boton d whatsapp ¿Necesitas ayuda? Chatea con nosotros
document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector('.tooltip');
  
    setInterval(() => {
        tooltip.classList.add('active');
        setTimeout(() => {
            tooltip.classList.remove('active');
        }, 5000); // Tooltip stays visible for 5 seconds
    }, 10000); // Tooltip appears every 10 seconds
});


  
