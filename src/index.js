import '@laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';


$(window).on('load', function () {
    
    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').on("click", function () {
        alert('أضيف المُنتج إلى عربة الشراء');
    });

    $('.copyright').append("&copy;" + " جميع الحقوق محفوظة سنة " + new Date().getFullYear());
});



